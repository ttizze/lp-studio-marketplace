(() => {
  const params = new URLSearchParams(window.location.search);
  const enabled =
    params.has("studio") ||
    window.location.hash.includes("studio") ||
    window.localStorage.getItem("lp-studio-enabled") === "1" ||
    window.LP_STUDIO_EDIT === true;

  if (!enabled || window.__lpStudioEditorLoaded) {
    return;
  }

  window.__lpStudioEditorLoaded = true;

  const targetSelector = "[data-lp-editable], [data-lp-movable], [data-lp-section]";
  const stateKey = `lp-studio:${window.location.origin}${window.location.pathname}`;
  const original = new WeakMap();
  let state = readState();
  let targets = [];
  let selected = null;
  let moveMode = false;
  let dragStart = null;
  let panel = null;
  let frame = null;
  let badge = null;

  boot();

  function boot() {
    document.body.classList.add("lp-studio-active");
    targets = collectTargets();
    targets.forEach(prepareTarget);
    buildPanel();
    frame = document.createElement("div");
    frame.className = "lp-studio-frame";
    frame.hidden = true;
    badge = document.createElement("div");
    badge.className = "lp-studio-badge";
    badge.hidden = true;
    document.body.append(frame, badge);
    targets.forEach((target) => applyRecord(target, state.elements[idFor(target)]));

    document.addEventListener("click", onDocumentClick, true);
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("scroll", updateFrame, { passive: true });
    window.addEventListener("resize", updateFrame);

    if (targets[0]) {
      selectTarget(targets[0]);
    } else {
      setStatus("No editable LP elements found. Add data-lp-editable or data-lp-movable attributes.");
    }
  }

  function collectTargets() {
    const explicit = [...document.querySelectorAll(targetSelector)];
    if (explicit.length) {
      return explicit;
    }

    const fallback = [
      ...document.querySelectorAll(
        "main h1, main h2, main h3, main p, main a, main button, header a, footer a, section"
      ),
    ].filter((element) => visible(element) && readable(element));

    fallback.forEach((element, index) => {
      if (element.matches("section")) {
        element.dataset.lpSection = `auto.section.${index}`;
        element.dataset.lpMovable = element.dataset.lpMovable || `auto.section.${index}`;
      } else {
        element.dataset.lpEditable = `auto.copy.${index}`;
      }
    });

    return fallback;
  }

  function prepareTarget(element) {
    const id = idFor(element);
    element.dataset.lpStudioId = id;
    element.classList.add("lp-studio-target");
    element.tabIndex = element.tabIndex < 0 ? 0 : element.tabIndex;
    original.set(element, {
      text: readText(element),
      translate: element.style.translate,
      paddingTop: element.style.paddingTop,
      paddingBottom: element.style.paddingBottom,
      maxWidth: element.style.maxWidth,
      textAlign: element.style.textAlign,
    });
  }

  function buildPanel() {
    panel = document.createElement("aside");
    panel.className = "lp-studio-panel";
    panel.setAttribute("aria-label", "LP Studio editor");
    panel.innerHTML = `
      <div class="lp-studio-panel__top">
        <div class="lp-studio-panel__title">
          <strong>LP Studio</strong>
          <span>Local copy and layout editor</span>
        </div>
        <button class="lp-studio-panel__close" type="button" data-action="exit" aria-label="Close">x</button>
      </div>
      <div class="lp-studio-field">
        <label for="lp-studio-element">Element</label>
        <select id="lp-studio-element" data-field="element"></select>
      </div>
      <div class="lp-studio-field">
        <label for="lp-studio-text">Copy</label>
        <textarea id="lp-studio-text" data-field="text"></textarea>
      </div>
      <div class="lp-studio-grid">
        <div class="lp-studio-field">
          <label for="lp-studio-x">X offset</label>
          <input id="lp-studio-x" data-field="x" type="number" step="1" />
        </div>
        <div class="lp-studio-field">
          <label for="lp-studio-y">Y offset</label>
          <input id="lp-studio-y" data-field="y" type="number" step="1" />
        </div>
        <div class="lp-studio-field">
          <label for="lp-studio-pt">Top pad</label>
          <input id="lp-studio-pt" data-field="paddingTop" type="number" min="0" step="1" />
        </div>
        <div class="lp-studio-field">
          <label for="lp-studio-pb">Bottom pad</label>
          <input id="lp-studio-pb" data-field="paddingBottom" type="number" min="0" step="1" />
        </div>
      </div>
      <div class="lp-studio-grid">
        <div class="lp-studio-field">
          <label for="lp-studio-width">Max width</label>
          <input id="lp-studio-width" data-field="maxWidth" type="number" min="0" step="1" />
        </div>
        <div class="lp-studio-field">
          <label for="lp-studio-align">Align</label>
          <select id="lp-studio-align" data-field="textAlign">
            <option value="">Default</option>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
      <div class="lp-studio-actions">
        <button type="button" data-action="move" aria-pressed="false">Move drag</button>
        <button type="button" data-action="save">Save local</button>
        <button class="lp-studio-actions__wide" type="button" data-action="copy">Copy changes JSON</button>
        <button type="button" data-action="reset-selected">Reset selected</button>
        <button type="button" data-action="reset-all">Reset all</button>
      </div>
      <div class="lp-studio-panel__status" data-role="status"></div>
    `;

    const select = panel.querySelector('[data-field="element"]');
    targets.forEach((target) => {
      const option = document.createElement("option");
      option.value = idFor(target);
      option.textContent = labelFor(target);
      select.append(option);
    });

    panel.addEventListener("input", onPanelInput);
    panel.addEventListener("change", onPanelInput);
    panel.addEventListener("click", onPanelClick);
    document.body.append(panel);
  }

  function onDocumentClick(event) {
    if (panel.contains(event.target)) {
      return;
    }

    const target = event.target.closest(targetSelector);
    if (!target || !targets.includes(target)) {
      return;
    }

    if (target === selected && isTextEditable(target) && !event.target.closest("a, button, input, textarea, select")) {
      event.stopPropagation();
      return;
    }

    selectTarget(target);
    event.preventDefault();
    event.stopPropagation();
  }

  function onPanelInput(event) {
    if (!selected) {
      return;
    }

    const field = event.target.dataset.field;
    if (!field) {
      return;
    }

    if (field === "element") {
      selectTarget(targets.find((target) => idFor(target) === event.target.value));
      return;
    }

    const record = currentRecord(selected);
    if (field === "text") {
      record.text = event.target.value;
    } else if (["x", "y", "paddingTop", "paddingBottom", "maxWidth"].includes(field)) {
      record[field] = event.target.value === "" ? "" : Number(event.target.value);
    } else if (field === "textAlign") {
      record.textAlign = event.target.value;
    }

    writeRecord(selected, record);
    applyRecord(selected, record);
    saveState();
    updateFrame();
  }

  function onPanelClick(event) {
    const action = event.target.dataset.action;
    if (!action) {
      return;
    }

    if (action === "move") {
      moveMode = !moveMode;
      document.body.classList.toggle("lp-studio-moving", moveMode);
      event.target.setAttribute("aria-pressed", String(moveMode));
      setStatus(moveMode ? "Drag the selected element, or use arrow keys." : "Move mode off.");
    }

    if (action === "save") {
      saveState();
      setStatus("Saved locally in this browser.");
    }

    if (action === "copy") {
      copyChanges();
    }

    if (action === "reset-selected" && selected) {
      delete state.elements[idFor(selected)];
      resetTarget(selected);
      saveState();
      syncPanel();
      updateFrame();
      setStatus("Selected element reset.");
    }

    if (action === "reset-all") {
      state = { version: 1, updatedAt: new Date().toISOString(), elements: {} };
      targets.forEach(resetTarget);
      saveState();
      syncPanel();
      updateFrame();
      setStatus("All local edits reset.");
    }

    if (action === "exit") {
      shutdown();
    }
  }

  function onPointerDown(event) {
    if (!moveMode || !selected || panel.contains(event.target) || !selected.contains(event.target)) {
      return;
    }

    const record = currentRecord(selected);
    dragStart = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: Number(record.x) || 0,
      y: Number(record.y) || 0,
    };

    selected.setPointerCapture?.(event.pointerId);
    document.addEventListener("pointermove", onPointerMove, true);
    document.addEventListener("pointerup", onPointerUp, true);
    event.preventDefault();
    event.stopPropagation();
  }

  function onPointerMove(event) {
    if (!dragStart || event.pointerId !== dragStart.pointerId) {
      return;
    }

    const record = currentRecord(selected);
    record.x = Math.round(dragStart.x + event.clientX - dragStart.startX);
    record.y = Math.round(dragStart.y + event.clientY - dragStart.startY);
    writeRecord(selected, record);
    applyRecord(selected, record);
    saveState();
    syncPanel();
    updateFrame();
  }

  function onPointerUp(event) {
    if (dragStart && event.pointerId === dragStart.pointerId) {
      dragStart = null;
      document.removeEventListener("pointermove", onPointerMove, true);
      document.removeEventListener("pointerup", onPointerUp, true);
      setStatus("Position saved locally.");
    }
  }

  function onKeyDown(event) {
    if (!selected || !moveMode || typingInPanel(event.target)) {
      return;
    }

    const keys = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
    };

    if (!keys[event.key]) {
      return;
    }

    const step = event.shiftKey ? 10 : 1;
    const [dx, dy] = keys[event.key];
    const record = currentRecord(selected);
    record.x = (Number(record.x) || 0) + dx * step;
    record.y = (Number(record.y) || 0) + dy * step;
    writeRecord(selected, record);
    applyRecord(selected, record);
    saveState();
    syncPanel();
    updateFrame();
    event.preventDefault();
  }

  function selectTarget(target) {
    if (!target) {
      return;
    }

    if (selected) {
      selected.classList.remove("lp-studio-selected");
      selected.contentEditable = "false";
      selected.removeEventListener("input", onDirectTextInput);
    }

    selected = target;
    selected.classList.add("lp-studio-selected");
    if (isTextEditable(selected)) {
      selected.contentEditable = "true";
      selected.addEventListener("input", onDirectTextInput);
    }
    selected.focus({ preventScroll: true });
    syncPanel();
    updateFrame();
  }

  function onDirectTextInput(event) {
    if (event.target !== selected) {
      return;
    }

    const record = currentRecord(selected);
    record.text = readText(selected);
    writeRecord(selected, record);
    saveState();
    syncPanel();
  }

  function syncPanel() {
    if (!panel || !selected) {
      return;
    }

    const record = currentRecord(selected);
    panel.querySelector('[data-field="element"]').value = idFor(selected);
    panel.querySelector('[data-field="text"]').value = readText(selected);
    panel.querySelector('[data-field="text"]').disabled = !isTextEditable(selected);
    panel.querySelector('[data-field="x"]').value = valueOrBlank(record.x);
    panel.querySelector('[data-field="y"]').value = valueOrBlank(record.y);
    panel.querySelector('[data-field="paddingTop"]').value = valueOrBlank(record.paddingTop);
    panel.querySelector('[data-field="paddingBottom"]').value = valueOrBlank(record.paddingBottom);
    panel.querySelector('[data-field="maxWidth"]').value = valueOrBlank(record.maxWidth);
    panel.querySelector('[data-field="textAlign"]').value = record.textAlign || "";
  }

  function updateFrame() {
    if (!selected || !frame || !badge) {
      return;
    }

    const rect = selected.getBoundingClientRect();
    frame.hidden = false;
    badge.hidden = false;
    frame.style.left = `${Math.max(0, rect.left - 5)}px`;
    frame.style.top = `${Math.max(0, rect.top - 5)}px`;
    frame.style.width = `${rect.width + 10}px`;
    frame.style.height = `${rect.height + 10}px`;
    badge.textContent = labelFor(selected);
    badge.style.left = `${Math.max(8, rect.left)}px`;
    badge.style.top = `${Math.max(8, rect.top - 28)}px`;
  }

  function currentRecord(element) {
    return {
      x: "",
      y: "",
      paddingTop: "",
      paddingBottom: "",
      maxWidth: "",
      textAlign: "",
      ...(state.elements[idFor(element)] || {}),
    };
  }

  function writeRecord(element, record) {
    state.elements[idFor(element)] = cleanRecord(record);
    state.updatedAt = new Date().toISOString();
  }

  function cleanRecord(record) {
    return Object.fromEntries(
      Object.entries(record).filter(([, value]) => value !== "" && value !== null && value !== undefined)
    );
  }

  function applyRecord(element, record) {
    if (!record) {
      return;
    }

    if (typeof record.text === "string" && isTextEditable(element)) {
      writeText(element, record.text);
    }

    const x = Number(record.x) || 0;
    const y = Number(record.y) || 0;
    element.style.translate = x || y ? `${x}px ${y}px` : original.get(element)?.translate || "";
    element.style.paddingTop =
      record.paddingTop === undefined ? original.get(element)?.paddingTop || "" : `${Number(record.paddingTop) || 0}px`;
    element.style.paddingBottom =
      record.paddingBottom === undefined
        ? original.get(element)?.paddingBottom || ""
        : `${Number(record.paddingBottom) || 0}px`;
    element.style.maxWidth =
      record.maxWidth === undefined || record.maxWidth === "" ? original.get(element)?.maxWidth || "" : `${Number(record.maxWidth) || 0}px`;
    element.style.textAlign = record.textAlign || original.get(element)?.textAlign || "";
  }

  function resetTarget(element) {
    const snapshot = original.get(element);
    if (!snapshot) {
      return;
    }

    writeText(element, snapshot.text);
    element.style.translate = snapshot.translate;
    element.style.paddingTop = snapshot.paddingTop;
    element.style.paddingBottom = snapshot.paddingBottom;
    element.style.maxWidth = snapshot.maxWidth;
    element.style.textAlign = snapshot.textAlign;
  }

  function readState() {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(stateKey) || "{}");
      return { version: 1, updatedAt: parsed.updatedAt || "", elements: parsed.elements || {} };
    } catch {
      return { version: 1, updatedAt: "", elements: {} };
    }
  }

  function saveState() {
    window.localStorage.setItem(stateKey, JSON.stringify(state, null, 2));
  }

  async function copyChanges() {
    const payload = JSON.stringify(state, null, 2);
    try {
      await navigator.clipboard.writeText(payload);
      setStatus("Changes JSON copied.");
    } catch {
      window.prompt("Copy LP Studio changes JSON", payload);
    }
  }

  function shutdown() {
    targets.forEach((target) => {
      target.classList.remove("lp-studio-target", "lp-studio-selected");
      target.contentEditable = "false";
    });
    document.body.classList.remove("lp-studio-active", "lp-studio-moving");
    panel?.remove();
    frame?.remove();
    badge?.remove();
  }

  function setStatus(message) {
    const status = panel?.querySelector('[data-role="status"]');
    if (status) {
      status.textContent = message;
    }
  }

  function idFor(element) {
    return (
      element.dataset.lpStudioId ||
      element.dataset.lpEditable ||
      element.dataset.lpMovable ||
      element.dataset.lpSection ||
      cssPath(element)
    );
  }

  function labelFor(element) {
    const id = idFor(element);
    const tag = element.tagName.toLowerCase();
    return `${id} (${tag})`;
  }

  function cssPath(element) {
    const parts = [];
    let node = element;
    while (node && node.nodeType === 1 && node !== document.body) {
      const index = [...node.parentElement.children].indexOf(node) + 1;
      parts.unshift(`${node.tagName.toLowerCase()}:nth-child(${index})`);
      node = node.parentElement;
    }
    return parts.join(">");
  }

  function visible(element) {
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function readable(element) {
    return element.matches("section") || readText(element).trim().length > 0;
  }

  function isTextEditable(element) {
    return Boolean(element.dataset.lpEditable) && !element.matches("section");
  }

  function readText(element) {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      return element.placeholder || element.value || "";
    }
    return element.innerText || element.textContent || "";
  }

  function writeText(element, value) {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      if (element.placeholder) {
        element.placeholder = value;
      } else {
        element.value = value;
      }
      return;
    }
    element.textContent = value;
  }

  function typingInPanel(element) {
    return Boolean(element?.closest?.(".lp-studio-panel"));
  }

  function valueOrBlank(value) {
    return value === undefined || value === null ? "" : value;
  }
})();
