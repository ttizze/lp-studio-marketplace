---
name: lp-build-selected-direction
description: Build a landing page only after the user has selected a visual direction, generated image, screenshot, or mockup from the LP Studio flow and design DNA is available. Use when the user says to build, implement, code, make the site, or create the landing page after choosing an option.
---

# LP Build Selected Direction

Build from the selected visual target, `landing-page-brief.md`, and `design-dna.md`. Do not start from prose alone.

## Gate

Before editing files, confirm that all are available:

- a selected visual target, image, screenshot, or mockup
- the current `landing-page-brief.md` or equivalent confirmed brief
- the current `design-dna.md` or equivalent confirmed design DNA; when the LP Studio flow used three candidates, finalize the selected direction's candidate as the chosen DNA before building
- the target project or output path

If the user has not selected a visual target, route to [$lp-visual-directions](../lp-visual-directions/SKILL.md). If the design DNA is missing, route to [$design-dna](../design-dna/SKILL.md). If the brief is missing, route to [$lp-brief-onboarding](../lp-brief-onboarding/SKILL.md).

## Build Rules

- Follow the selected visual target as the primary design source.
- Use the design DNA for typography, palette, layout rhythm, component language, proof strategy, motion, and avoid rules.
- Preserve the design DNA's rationale, not only its visible style. Before coding, extract the type system contract, spacing/composition rationale, and element-intent ledger into implementation decisions.
- Preserve the DNA's creative range and signature move. If the chosen direction uses typography as the main creative engine, implement that as real text/CSS where possible rather than flattening it into an image or replacing it with generic headings.
- Implement typography as an explicit system: font families, fallback stacks, H1/H2/body/label/button/caption sizes, weights, line heights, letter spacing, text transform, mono/serif roles, and italic policy. Do not rely on browser-default typography for buttons, inputs, labels, cards, nav, or footer text.
- Implement creative typography deliberately: display/body/UI/mono/CJK pairings, oversized or cropped type, condensed/extended text, wordmark behavior, tabular numerals, italic asides, and type-as-layout only when the selected direction and DNA call for them. Keep core UI controls readable and accessible. Treat side rails, vertical labels, marginal text, and decorative rules as removable by default unless they carry necessary orientation, navigation, state, or proof.
- Implement whitespace as an explicit system: section padding, gutters, component gaps, max-widths, and mobile compression should match the DNA's stated purpose. Do not add arbitrary blank space or decorative filler to balance a layout.
- Implement the DNA's motion system as real behavior, not an afterthought: the hero entrance choreography, scroll-triggered section reveals, micro-interactions on buttons, inputs, links, and cards, and the DNA's signature motion moment. Use CSS transitions/keyframes and IntersectionObserver-driven reveals or the project's existing animation tooling; do not add a heavy animation library for effects CSS can do.
- Make motion crafted, not default: custom easing curves instead of linear or browser-default ease, staggered child reveals instead of one simultaneous fade, roughly 150-300ms for micro-interactions and 400-800ms for section reveals. Animate transform and opacity only; never animate layout properties or scroll-jack.
- Respect `prefers-reduced-motion` with a reduced variant in which content appears without large movement and demo states still communicate. Keep every motion cue accountable to the deletion test; motion that only decorates gets removed.
- Sweat static craft as hard as motion: optical alignment, layered shadows, precise radius and border rhythm, hover/focus/active states for every interactive element, and the DNA's texture or material treatments. The built page should look as good as the selected image, not like a flattened approximation of it.
- Include a local Studio mode unless the user explicitly declines it. The built page should be openable with `?studio=1` so the user can adjust copy, element position, max width, alignment, and section spacing on the rendered page.
- Studio mode is for local polish, not production CMS behavior. Gate it behind `?studio=1`, `#studio`, a dev-only loader, or an explicit localStorage flag; the normal URL must not show the editor.
- Use the reusable editor assets from `../../assets/lp-studio-editor/editor.css` and `../../assets/lp-studio-editor/editor.js` when practical, or implement an equivalent framework-native layer if the target app architecture makes that cleaner.
- Annotate the meaningful LP surface with stable edit handles: `data-lp-editable` for copy-bearing elements, `data-lp-movable` for major layout groups, and `data-lp-section` for sections where padding may need adjustment. Use semantic ids such as `hero.headline`, `hero.composer`, `proof.card.1`, and `final-cta.button`.
- Make Studio edits exportable as JSON so Codex can apply the approved changes back into source files. Do not leave final source changes dependent on browser localStorage when the user asks to keep the edit.
- Keep the element deletion test during implementation. If a section, card, badge, image, divider, animation, or decorative object does not support comprehension, trust, memorability, conversion, or approved proof, remove it or surface the conflict.
- Use the brief for section content, proof strategy, CTA strategy, and missing-material placeholders.
- For SaaS, preserve the actual demo surface from the brief and design DNA, and implement it as the hero's operable product surface. Do not replace the hero demo with a static explanatory image, decorative screenshot, or marketing illustration. Chat products should be built around a usable chat composer and conversation loop, editor products around editable controls, API/devtools around a playground/code demo, upload products around upload/review behavior, and so on.
- Respect explicit negative constraints from the user, brief, design DNA, or selected visual direction. If the hero is limited to H1, H2, and chat, do not add generated results, assistant output, preview panels, output cards, prompt chips, proof, metrics, logos, galleries, or explanatory feature cards to the hero.
- If the real backend is unavailable, implement the allowed front-end prototype interaction in the hero rather than a static image. For chat products, the visitor should at minimum be able to type and send. Add assistant responses or preview/output state changes only when the user has not excluded them from the hero.
- Build the surrounding page system with the same care as the demo. Generated examples, proof placeholders, section bands, CTAs, and output previews should be visually resolved, not generic cards added around a good hero.
- Do not build text-and-icon-only sections as finished LP sections. Feature explanations must be paired with meaningful visual evidence such as product screenshots, demo states, generated outputs, comparisons, workflow diagrams, product photos, previews, example artifacts, or before/after states. Icon cards may support a visual section, but they cannot be the section's main evidence.
- For chat products, make the chat result semantically correct for the product. The chat should visibly produce the product's actual value, not generic assistant text, and the hero should remain usable after the initial example state.
- Do not implement a selected visual target if it is only a schematic wireframe unless the user explicitly chooses a wireframe. Ask for or create a production-quality visual direction first.
- Do not treat simplified SVG, CSS/HTML-rendered placeholder pages, browser screenshots of hand-coded mock layouts, gray-line skeletons, or low-fidelity local renders as selected visual targets. If the selected target is one of those, reject it and return to high-fidelity visual direction generation or ask for a real product/design asset.
- If the visual target and DNA conflict, preserve the selected visual target's composition and preserve the DNA's system constraints where possible. Surface any unavoidable conflict instead of silently changing direction.
- Preserve real assets and real proof. Do not fabricate screenshots, customer logos, testimonials, metrics, certifications, medical claims, financial claims, or legal claims.
- If a needed real asset is missing, render a clearly labeled placeholder or restructure the section around available evidence.
- Use the existing project framework, tokens, and build tooling when present.
- Start a local dev server for web apps and provide the URL after verification.

## Verification

Before handoff:

1. Run the relevant lint/build/typecheck command when available.
2. Open the page locally when a dev server is needed.
3. Check desktop and mobile viewports.
4. For SaaS heroes, manually verify the allowed hero interaction works. For chat products, at minimum verify typing and send affordance; verify assistant response or preview/output updates only when those states are part of the approved hero.
5. Verify the motion system: the hero entrance plays correctly once, scroll reveals trigger at sensible thresholds without popping, micro-interactions respond on hover/focus/click, and `prefers-reduced-motion` produces the reduced variant. Watch for animation-caused jank or layout shift.
6. Open the Studio URL with `?studio=1` when Studio mode was included. Verify element selection, copy editing, movement controls, local save/reset, and JSON export. Then verify the normal URL does not show the editor.
7. Fix obvious layout, overlap, clipping, and text-fit issues.
8. Keep the server running only if the user should try the result locally.

## Handoff

Report:

- what was built
- where the files are
- what command or local URL to use
- the Studio URL when included, usually the same local URL plus `?studio=1`
- any missing real materials that remain

Keep the answer concise.
