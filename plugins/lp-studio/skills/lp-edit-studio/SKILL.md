---
name: lp-edit-studio
description: Add or use an on-page local studio editor for an existing LP Studio landing page. Use when the user wants to tweak copy, wording, spacing, alignment, or element positions directly on the rendered page, or asks for a Studio-like visual adjustment tool after a landing page has been built.
---

# LP Edit Studio

Add a local, browser-based edit mode to an already built landing page. This is for visual polish and copy/layout adjustment on the rendered page, not for replacing the brief, design DNA, or selected visual target.

## Gate

Before editing files, confirm that there is a built landing page or target project path. If no landing page has been built yet and the user is still in the LP Studio workflow, route through the normal flow:

1. [$lp-brief-onboarding](../lp-brief-onboarding/SKILL.md)
2. [$design-dna](../design-dna/SKILL.md)
3. [$lp-visual-directions](../lp-visual-directions/SKILL.md)
4. [$lp-build-selected-direction](../lp-build-selected-direction/SKILL.md)

If a page exists, continue without re-running the visual direction flow unless the user asks for a redesign.

## What To Build

Install a gated "Studio mode" that opens on the local page with `?studio=1` or `#studio`. It should let the user:

- select visible LP elements on the page
- edit copy in the panel and, when safe, directly on the page
- drag selected elements or nudge them with arrow keys
- adjust x/y offset, max width, text alignment, and section padding
- save changes to browser localStorage
- copy a JSON export of all edits so Codex can apply the approved adjustments back into source files
- reset one element or all local edits

Do not ship the editor as a public CMS. Keep it local or explicitly gated by a query/hash flag, and do not collect analytics or send edits to a server.

## Implementation

1. Copy the reusable editor assets from this plugin into the target app:
   - `../../assets/lp-studio-editor/editor.css`
   - `../../assets/lp-studio-editor/editor.js`
2. Place them where the app can serve static files. Common paths:
   - Vite/React: `public/lp-studio-editor/editor.css` and `public/lp-studio-editor/editor.js`
   - static HTML: `assets/lp-studio-editor/editor.css` and `assets/lp-studio-editor/editor.js`
3. Load the assets only for local studio mode. Use the project's existing framework where possible.
   - Static HTML can include the files normally; `editor.js` will no-op unless `?studio=1`, `#studio`, `localStorage.lp-studio-enabled = "1"`, or `window.LP_STUDIO_EDIT = true`.
   - React/Vite can add a small component or effect that injects the CSS and JS in development, or can serve static tags from `index.html`.
4. Annotate real editable targets with stable attributes:
   - `data-lp-editable="hero.headline"` for text-bearing elements
   - `data-lp-movable="hero.composer"` for major layout objects
   - `data-lp-section="proof"` for sections where padding should be adjustable
5. Annotate the important surface area, not every node. Cover:
   - hero H1/H2/body copy and primary CTA
   - nav labels and footer links
   - demo labels, chat composer placeholder text, output captions, and key buttons
   - section headings, body copy, proof cards, comparison rows, and final CTA
   - major visual groups that users will naturally want to move
6. Prefer source-friendly adjustments:
   - text edits should map cleanly to JSX/HTML strings
   - position edits should map to CSS variables, margins, grid/flex alignment, or transform offsets
   - section spacing should map to existing spacing tokens when the project has them

## Applying User Edits Back To Source

When the user says the Studio result is good, apply the exported changes to source code instead of leaving the page dependent on localStorage.

Use the JSON export as the patch contract:

- apply `text` values to the matching JSX/HTML/copy source
- translate x/y offsets into intentional CSS, preferably variables or component-level styles
- translate padding and max-width edits into the closest existing layout token when one exists
- keep responsive behavior intact; verify desktop and mobile after applying
- remove temporary experimental attributes only if they are no longer useful

## Verification

Before handoff:

1. Run the target app's lint/build/typecheck command when available.
2. Start the local dev server when needed.
3. Open the page with `?studio=1`.
4. Verify element selection, copy editing, drag/nudge movement, local save, reset, and JSON copy.
5. Verify the normal URL without `?studio=1` does not show the editor.
6. Check desktop and mobile viewports for layout overlap after any applied source edits.

## Handoff

Report:

- the local Studio URL, including `?studio=1`
- what files were added or changed
- how to export edits for Codex to apply back into source
- whether the editor is dev-only, query-gated, or both

Keep the answer concise.
