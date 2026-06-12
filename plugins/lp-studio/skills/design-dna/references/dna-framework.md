# Design DNA Framework

## Service Reading Checklist

Read these before choosing visual language:

- **Category**: SaaS, devtool, finance, healthcare, consumer app, marketplace, creative tool, infra, AI agent, etc.
- **Audience**: founder, marketer, developer, executive buyer, consumer, creator, designer, operator.
- **Buying risk**: low-friction trial, enterprise trust, regulated decision, high-ticket purchase, reputation-sensitive launch.
- **Primary CTA**: waitlist, book demo, start trial, generate demo, buy, download, subscribe, contact sales.
- **Interaction surface**: chat, editor, playground, dashboard, upload flow, API console, mobile app, checkout, or another primary user-touch point.
- **Hero interaction**: what the visitor can actually type, click, select, upload, run, edit, or change in the hero.
- **First-viewport behavior**: trust, demo desire, emotional aspiration, technical confidence, comparison clarity, urgency.
- **Differentiator**: speed, taste, automation, security, data depth, 3D/visual quality, workflow integration, cost.
- **Proof available**: real metrics, customers, screenshots, demo, open-source repo, founder story, none yet.
- **Feature visual evidence**: screenshots, demo states, output examples, comparisons, workflow diagrams, product photos, previews, or before/after objects that can explain features without relying on text and icons alone.
- **Typography intent**: what the audience should feel from the type system, which words need display force, which words should recede, and whether italic, mono, serif, condensed, or oversized type has a real job.
- **Composition intent**: what the first viewport should make the visitor do or notice first, second, and third.
- **Spacing intent**: where the page needs focus space, comparison space, reading space, or compression.
- **Element jobs**: why each major hero object, media frame, proof block, CTA, card, divider, image, and motion cue exists.
- **Creative range**: what can be expressive, what must stay plain, and how much visual risk the category can tolerate.
- **Signature move**: the one memorable design gesture that makes the LP ownable: type-as-interface, oversized cropped copy, editorial image staging, strict index grid, dramatic product theater, tactile material system, or another product-specific move.

For SaaS, the interaction surface is a first-order design constraint. A product demo should put the real place the user touches the product in the hero and make it operable in the built LP. If the product is chat-based, the hero is a usable chat composer and conversation loop; if it is an editor, the hero is editor controls; if it is an API/devtool, the hero is a playground or code flow. Do not default to a generic dashboard, static screenshot, or explanatory hero image.

Across all archetypes, a finished landing page should not use text-and-icon-only sections as primary feature explanation. Icons can help scanning, but they must support a larger visual object that shows the feature in use.

## Common DNA Archetypes

Use these as starting points. Rename and tune them to the service.

### Demo-First Studio

Best for products where seeing or imagining the workflow sells better than claims.

- Hero: a central interactive object such as a usable chat composer, prompt box, upload dropzone, or live canvas.
- CTA: secondary until the demo promise is understood.
- Typography: confident sans for UI, optional editorial font only when it creates a clear brand voice or slows the visitor down at the promise line. The DNA should define exact display/body/label scale and why the demo needs that contrast.
- Layout: large central interaction, minimal sides, progress states below.
- Spacing: focus space around the interaction so the visitor understands one product action before reading proof.
- Motion: the demo is the motion. Typed prompt playback, caret blink, and state progression inside the interaction, plus one staggered hero reveal that lands on the composer. Everything around the demo stays still so the interaction reads as alive.
- Avoid: side dashboards that make the product feel passive.
- Creative move: make the product input feel like the page's main typographic object. Use scale, cursor states, prompt text, and generated labels as part of the visual identity.

### Trust Console

Best for B2B products with operational or security stakes.

- Hero: dense but readable control surface.
- CTA: demo or sales motion.
- Typography: precise sans plus mono labels when operational credibility matters. Type scale should preserve scannability under density.
- Layout: panels, tables, timelines, system maps.
- Spacing: comparison space between panels and enough row height to make the surface trustworthy rather than cramped.
- Motion: precision physics. Quick deliberate transitions, data that settles into place, count-up numerals on first view, no bounce or playfulness.
- Avoid: playful colors, vague claims, invented metrics.
- Creative move: use precision as drama. Large tabular numerals, strict mono labels, rule lines, and dense-but-legible hierarchy can feel more distinctive than decorative imagery.

### Editorial Studio

Best for creative tools, premium SaaS, and products where taste is the differentiator.

- Hero: strong type hierarchy and authored copy.
- CTA: waitlist or invitation-style.
- Typography: high-quality display face paired with disciplined sans. Italic is allowed only for a deliberate editorial accent such as a quote, aside, or contrast line; it should not be decorative filler.
- Layout: asymmetry, whitespace, rules, art-directed fragments.
- Spacing: intentional pause space and strong alignment rules; whitespace should frame authorship, not hide missing content.
- Motion: editorial pacing. Slow staggered text reveals on scroll, images that ease in with a slight scale settle, generous reveal thresholds that make scrolling feel like turning pages.
- Avoid: template-like feature grids.
- Creative move: let typography carry authorship. Consider a high-contrast display serif, italic aside, cropped display word, oversized pull quote, or asymmetric text block that would be memorable without extra decoration.

### Technical Index

Best for devtools, SDKs, APIs, and infra.

- Hero: index, schema, terminal-like prompt, API map, or system diagram.
- CTA: docs, GitHub, start building, waitlist for SDK.
- Typography: grotesk plus mono with an explicit role split: persuasive claims in grotesk, exact commands/labels/data in mono.
- Layout: strict grid, labels, code/data artifacts.
- Spacing: tight but deliberate grid spacing that supports comparison and code reading.
- Motion: terminal energy. Instant state changes, typed text, blinking cursors, mono tickers; transitions snap rather than ease.
- Avoid: marketing fluff or excessive lifestyle visuals.
- Creative move: turn structure into brand. Index marks, command syntax, dense labels, keyboard-like controls, or code/data typography can become the signature.

### Spatial Product Stage

Best when 3D, simulation, visualization, hardware, or generated scenes are central.

- Hero: one staged spatial scene with minimal type overlay.
- CTA: demo or waitlist.
- Typography: restrained technical sans sized to avoid competing with the scene. Labels should annotate, not decorate.
- Layout: full-bleed scene, annotation layer, simple state strip.
- Spacing: scene-first composition with text held to edges or quiet bands.
- Motion: the scene is the engine. Slow camera drift or restrained parallax in the hero scene, scroll-linked scene states, annotations that fade in as the scene settles; UI chrome stays quiet.
- Avoid: decorative 3D that does not explain product value.
- Creative move: make type behave like an annotation layer in space: edge labels, measured callouts, quiet overlays, and one strong scene title.

### Luxury Minimal

Best for high-ticket or premium consumer/professional products.

- Hero: sparse product object, strong restraint.
- CTA: request access, book consultation, purchase.
- Typography: elegant display plus quiet sans, with exact size/weight choices that create scarcity and confidence rather than emptiness.
- Layout: negative space, slow reveal, low density.
- Spacing: luxury pause space; each gap must protect a product object, price signal, or decision moment.
- Motion: scarcity of movement. One slow confident reveal per viewport, long durations with soft easing, hover states that barely whisper; nothing competes with the product object.
- Avoid: SaaS dashboards and crowded claims.
- Creative move: use extreme scale contrast and silence. One exquisitely set line, a restrained italic, or a precise product name can carry the page.

### Consumer Playful

Best for low-risk consumer products or community products.

- Hero: immediate emotional payoff.
- CTA: download, join, try.
- Typography: friendly sans, expressive but legible, with larger touch-friendly controls and no fragile decorative italics.
- Layout: clear path, color-coded states, direct benefit.
- Spacing: quick-scan spacing; the visitor should not need to decode a complex composition.
- Motion: springy and immediate. Bouncy micro-interactions, playful hover states, quick joyful reveals; keep durations short so the page feels fast, not cute.
- Avoid: enterprise density and over-serious tone.
- Creative move: use friendly expressive type, irregular rhythm, or warm microcopy while keeping CTAs obvious and touch-friendly.

## Creative Typography Levers

Use these to avoid default-safe typography. Pick only what fits the service.

- **Scale contrast**: one very large display line against quiet body text. Use when a single promise must be remembered.
- **Condensed/extended proportions**: narrow type for speed, tooling, density, or compression; extended type for calm, luxury, or spatial confidence.
- **Serif/sans tension**: serif for authorship, taste, craft, or editorial confidence; sans for UI clarity and product action.
- **Mincho/gothic pairing**: Japanese mincho can add literary, premium, or reflective tone; gothic keeps UI and action clear. Do not use mincho for dense UI labels.
- **Mono as evidence**: mono should mean system state, code, timestamp, metadata, generated output, or operational proof. Do not use it as generic decoration.
- **Italic as voice**: italic should signal an aside, quote, emotional inflection, contrast phrase, or editorial signature. Avoid italic for core Japanese readability unless the typeface supports it well.
- **Type as layout**: text can become the hero object, anchor a grid, sit on a rule, or crop at an edge. Use only when it supports hierarchy. Avoid side rails, vertical marginal labels, or decorative framing text unless they provide necessary orientation, navigation, state, or proof.
- **Wordmark behavior**: if no logo exists, the name's letter spacing, weight, case, or script relationship can become a brand asset.
- **Numeral treatment**: tabular, oversized, or circled numerals can create sequence and credibility in workflows.
- **Variable weight/width**: use width or weight changes for state, emphasis, or responsive behavior when implementation can support it.

## Motion Levers

Motion is a design material with the same rules as typography: every cue needs a job, and one signature motion idea beats five decorative ones. Pick only what fits the service.

- **Hero entrance choreography**: a one-time staggered reveal that builds the first viewport in reading order — headline, then demo surface, then supporting chrome. Use it to establish hierarchy in the first second; keep the whole sequence under roughly 1.2s.
- **Demo-as-motion**: typed prompts, caret blinks, state progressions, streaming output, and cursor walkthroughs inside the product surface. The strongest motion for SaaS because it is also product evidence.
- **Scroll-triggered reveals**: sections that fade and rise into place as they enter the viewport, with staggered children. This is pacing, not decoration — reveals should group content the way the section intent groups evidence.
- **Type in motion**: split-text line reveals, weight or width transitions on hover, cropped display lines that slide into their crop. Use only when type is the signature.
- **Sticky transformation**: a pinned section whose content transforms across a scroll range — workflow walkthroughs, before/after states. High narrative power, high implementation cost; spend it on the one story that matters.
- **Parallax and depth**: subtle background/foreground speed separation. Easy to overuse; keep offsets small and never parallax body text.
- **Hover physics**: lift, tilt, magnetic pull, underline draws, image zooms. Micro-interactions that reward exploration and prove the page is alive.
- **Count-up numerals**: tabular numbers that count to their value on first view. Use only for real metrics.
- **Marquee/ticker**: continuous horizontal motion for logos, examples, or index items. Pause on hover; never use it for body copy.
- **Ambient material motion**: grain shimmer, slow gradient drift, floating particles. The riskiest lever — only when the brand's material is itself the signature.

Restraint rules:

- Every motion cue must pass the deletion test: if removing it does not weaken comprehension, hierarchy, evidence, or memorability, remove it.
- Micro-interactions run about 150-300ms; section reveals about 400-800ms; anything longer must be a deliberate signature moment.
- Use custom ease-out style easing curves rather than linear or browser-default ease; springs belong only in playful DNAs.
- Animate transform and opacity only. Never animate layout properties, never scroll-jack, never autoplay motion that blocks reading.
- Always define the `prefers-reduced-motion` fallback: content appears without large movement and demo states still communicate.

## Style Distance Test

Inside LP Studio, the three candidate DNAs must read as three different design worlds, not three settings of one theme. Check the set, not only each candidate:

- Different archetypes, or at minimum radically different interpretations of one archetype.
- Different palette families: vary light/dark, temperature, and saturation across the set — for example one light editorial, one dark technical, one saturated or unexpected.
- Different typographic signatures: the display faces should come from different classifications (serif, grotesk, mono, condensed), not three similar sans-serifs.
- Different composition systems: for example one centered single column, one asymmetric editorial layout, one strict index grid.
- Different motion concepts: each candidate names its own motion personality.

Thumbnail test: shrink all three first viewports to thumbnails. If a stranger could group any two as the same brand, the set fails — push them apart.

What must stay constant across all three: the brief's truth, the actual product interaction surface, real-proof-versus-placeholder rules, and every explicit user constraint. Style diverges; honesty and the demo surface do not.

## Creative Range Scoring

Score or name the creative range before choosing a DNA:

- **1 Quiet utility**: almost all creativity is in spacing and precision. Use for high-trust or regulated products.
- **2 Polished product**: distinctive but restrained; one typographic or material move.
- **3 Editorial product**: clear type personality, asymmetry, stronger section rhythm.
- **4 Signature campaign**: bold typography, unusual composition, image/type interaction, still conversion clear.
- **5 Experimental**: expressive and memorable, only acceptable when conversion risk is low or brand memorability is the product.

If the chosen range is 1 or 2, explain why restraint converts better. If it is 3-5, specify which elements remain plain so the page does not become noisy.

## Fit Scoring

Score each candidate 1-5:

- **Audience fit**: Does this match what the audience respects?
- **Conversion clarity**: Does the first viewport make the next action obvious?
- **Category differentiation**: Does it avoid looking like every competitor?
- **Brand memorability**: Will the service be remembered after one view?
- **Feasibility**: Can this be implemented well with available time/assets?
- **Reference alignment**: If a reference exists, does it preserve useful mechanics without copying the wrong context?

Recommendation rule:

- Prefer the candidate that best supports the first-viewport behavior.
- Do not choose the most visually novel option if it makes the CTA or product promise weaker.
- If no candidate scores at least 4 on conversion clarity, revise the hero rule before continuing.

## DNA Spec Fields

Use these definitions when producing a final spec:

- **name**: Memorable internal label for the DNA.
- **service_read**: One sentence about category, audience, CTA, and risk.
- **conversion_thesis**: Why this visual language should convert for this service.
- **creative_range**: Familiarity, surprise, risk level, signature move, and what must stay plain.
- **hero_rule**: Non-negotiable first-viewport composition.
- **hero_interaction_rule**: The required usable behavior in the hero; for example chat send/response, editor control changes, playground run, upload preview, or dashboard drilldown.
- **typography**: Display, body, label/mono choices and why.
- **typographic_signature**: The memorable type move: scale contrast, font pairing, editorial italic, condensed index, type-as-interface, wordmark behavior, or another product-specific mechanism. It should be one strong idea, not a collection of typographic accessories.
- **type_scale**: Concrete desktop and mobile sizes, weights, line heights, letter spacing, and text-transform rules for H1, H2, body, caption, labels, buttons, metadata, and any mono/serif/italic roles.
- **italic_policy**: Where italic is allowed, what semantic job it performs, and where it is forbidden because it would weaken clarity or localization.
- **palette**: Background, surface, text, accent, and forbidden palette moves.
- **design_intent**: The page thesis, visual hierarchy contract, and element job ledger.
- **layout**: Grid, density, section rhythm, mobile behavior, and why the order creates the desired visitor behavior.
- **spacing_system**: Spacing scale, section padding, gutters, component gaps, whitespace rationale, and the difference between focus space, comparison space, and dead space.
- **section_intent**: The job, evidence, spacing reason, and exit condition for each major section.
- **component_language**: Buttons, inputs, cards, panels, badges, forms, and radius.
- **imagery_and_3d**: What visuals should show, what they must not become.
- **visual_evidence_rules**: How features are explained with screenshots, demos, generated examples, comparisons, workflow diagrams, product photos, previews, or before/after objects instead of text-plus-icon-only sections.
- **motion**: The motion system: named concept, hero entrance choreography, scroll behavior, micro-interactions, one signature moment, reduced-motion fallback, and performance rules.
- **cta_behavior**: Placement, hierarchy, and wording.
- **proof_strategy**: What proof to use now; placeholders if proof is absent.
- **avoid**: Specific anti-patterns for this service.
- **implementation_notes**: Tokens, responsive constraints, and build handoff details.

## Example: LaunchPage AI

```yaml
design_dna:
  name: "Central Demo Studio"
  service_read: "AI SaaS landing page studio for founders and marketers, free-start CTA, low proof but high demo value."
  conversion_thesis: "The chat input is the product promise; users should imagine using the demo before being asked to join."
  creative_range:
    familiarity: "The chat input behaves like a familiar product surface."
    surprise: "The surrounding page uses oversized editorial type as a studio signal."
    risk_level: "3 Editorial product"
    signature_move: "A huge cropped launch phrase frames the central composer without competing with it."
    what_must_stay_plain: "Composer controls, primary CTA, and generated output labels."
  design_intent:
    page_thesis: "Make the visitor feel the product starts from one sentence, so every visual choice protects the central chat."
    hierarchy_contract: "H1 names the promise, chat owns the proof, primary CTA stays secondary until the demo is understood."
    element_jobs:
      - element: "central chat composer"
        purpose: "the product interaction"
        why_here: "founders need to imagine typing their own brief immediately"
        deletion_test: "without it the page becomes a generic AI landing page"
  hero_rule: "One large centered chat composer dominates the first viewport; side panels are avoided."
  hero_interaction_rule: "The visitor can enter or select a startup brief, send it, receive a generated LP plan, and see a preview/output state update."
  typography:
    primary_family: "Geist or Inter"
    secondary_family: "Editorial serif only for one supporting line if it adds studio character"
    japanese_pairing: "Noto Sans JP or Zen Kaku Gothic for UI clarity if Japanese is used"
    latin_pairing: "Geist for UI, editorial serif for one expressive phrase"
    mono_family: "JetBrains Mono for generated state labels"
    rationale: "The core action is a product UI, so the main type must feel precise; the optional serif creates authored taste without weakening the composer."
    typographic_signature:
      creative_bet: "The page feels like a design studio because one oversized editorial line frames the product interaction."
      scale_contrast: "H1 is 3-4x body size; metadata stays tiny and exact."
      expressive_moves: "One cropped display phrase, one optional italic aside, mono only for generated state."
      restraint_rules: "No decorative italics in controls; no serif inside the composer."
    scale:
      h1: "64-76px desktop / 42-48px mobile, 0.95-1.02 line-height, 700 weight, reserved for the product promise"
      body: "18-20px desktop / 16px mobile, 1.55 line-height, used for one explanatory paragraph"
      label: "12-13px mono or all-caps sans for generated state labels only"
      button: "15-16px, 650 weight, no browser-default sizing"
    italic_policy: "No decorative italics. Use italic only for a quote-like studio aside, otherwise avoid for UI clarity."
  palette:
    background: "black"
    surface: "cream"
    text: "white and ink"
    accent: "minimal cream/gray, no neon dependency"
  layout:
    grid: "single centered column with controlled max-width"
    section_order: "promise -> demo -> output evidence -> waitlist"
    spacing_system: "large focus space around composer; tighter comparison space for output states"
    composition_rationale: "The page must slow the visitor at the chat input and speed up once output proof appears."
  component_language: "16px surfaces, 8px controls, precise input affordances, quiet waitlist button."
  imagery_and_3d: "3D can appear after the first interaction or below the fold; it must not compete with the chat."
  visual_evidence_rules: "Feature explanations use chat states, generated page previews, and output examples. Icon-only feature rows are not used as standalone sections."
  motion:
    concept: "The composer is alive; the page around it stays calm."
    hero_entrance: "Headline settles first, then the composer rises into place and the caret starts blinking; whole sequence under 1s."
    scroll_behavior: "Sections fade-rise on entry with short stagger between children; output examples reveal in reading order."
    micro_interactions: "Composer focus ring, button lift on hover, prompt chips that press down on click."
    signature_moment: "A prompt types itself in the composer and the generated LP plan streams in while the visitor watches."
    reduced_motion: "All movement collapses to opacity fades; the typed-prompt demo renders as a completed state."
    performance_rules: "Transform/opacity only; no scroll-jacking; demo playback starts only when the hero is in view."
  cta_behavior: "The primary CTA remains visible in nav or below demo without interrupting the product surface."
  proof_strategy: "Use demo states instead of fake customer proof."
  avoid:
    - "left/right dashboard split in hero"
    - "purple AI gradient"
    - "fake metrics"
    - "feature-card grid as first impression"
    - "text-and-icon-only feature sections"
```
