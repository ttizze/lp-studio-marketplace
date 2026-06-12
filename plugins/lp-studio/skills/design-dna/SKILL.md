---
name: design-dna
description: "Generate service-specific landing page design DNA after LP brief onboarding and before visual ideation, image generation, UI generation, or implementation. Use when a user asks to choose the best visual direction for a product, adapt a reference DESIGN.md to a new service, create LP design strategy, score style candidates, or produce a reusable design specification for a landing page, SaaS site, product page, waitlist page, or launch page."
---

# Design DNA

Use this skill to decide the design language a service should have before generating screens or code. The output is a practical design specification, not a mood-board dump.

Inside LP Studio, this skill sits between `landing-page-brief.md` and `lp-visual-directions`. Produce or update a human-readable `design-dna.md` when working in a local project, or provide an equivalent confirmed design DNA in the thread when no file target exists.

Inside LP Studio, the default output is exactly three candidate DNAs that are radically different from each other: three design worlds, not three settings of one theme. Each candidate becomes the style source of one visual direction in `lp-visual-directions`, and the user's direction pick selects the final DNA. Produce a single chosen DNA only when the user explicitly asks for one decisive recommendation or is working outside the three-direction flow.

## Core Rule

Generate DNA from the service. Do not paste a style preset onto the service.

A reference design, screenshot, or `DESIGN.md` is source material. Extract its useful design mechanics, then translate them to the target product's audience, category, CTA, trust needs, and demo needs.

Every visible design choice needs a job. Design DNA must explain why the typeface, type size, italic policy, spacing, section order, component shape, and major visual object belong in this service. Do not write vague direction such as "modern sans", "generous spacing", "premium look", or "clean cards" unless the DNA also states what that choice does for comprehension, trust, pacing, conversion, or brand memory.

The DNA should be creative by default, not merely tidy. Choose where the page earns memorability: type, composition, imagery, interaction, motion, or material treatment. A conservative SaaS layout with safer fonts is acceptable only when the service has a clear trust reason for restraint. Otherwise, define a `signature_move` and a typographic point of view strong enough that the page would still be recognizable if the logo were removed.

## Workflow

1. **Read the service**
   - Identify product category, audience, sophistication level, buying risk, CTA, proof needs, and the single behavior the first viewport must create.
   - Identify the product's actual interaction surface: chat, editor, playground, dashboard, upload flow, API console, mobile app, checkout, or another primary user-touch point.
   - For SaaS, treat the first-viewport product demo as required product evidence. The hero demo should be an operable product surface in the built LP, not a static explanatory image. It should match the actual interaction surface users touch. If real screens are missing, specify a prototype/demo mock that is clearly not fake customer proof.
   - If a SaaS product is chat-based, make the hero an operable chat interaction with a composer, messages, and response behavior. Do not substitute a static screenshot, explanatory image, generic dashboard, admin console, or editor unless that is the real product surface.
   - Identify reference examples and extract the useful mechanics they contribute. If references are missing for a visual/product-led category, call that out as an input gap instead of filling the page with copy.
   - Prefer `landing-page-brief.md` as the source of truth when it exists.
   - If context is missing, ask at most three questions. If the user says to proceed, state assumptions.

2. **Extract references**
   - For a provided `DESIGN.md`, read colors, typography, layout, components, motion, effects, and guardrails.
   - For screenshots or images, inspect the image directly before using it.
   - For reference LPs or product examples, extract mechanics: demo structure, visual density, section rhythm, proof pattern, CTA behavior, and what to avoid.
   - Keep a short "Reference DNA extracted" note. Include only reusable mechanics, not source brand copy.

3. **Create candidate DNA**
   - Inside LP Studio, produce exactly three candidates. Outside the flow, produce 2-3 when exploring.
   - Make the candidates radically different design worlds, not variations of one idea. The set must differ in archetype, palette family (for example one light, one dark or strongly colored, one unexpected), typographic signature, composition system, and motion concept. Apply the style distance test in `references/dna-framework.md`: if two candidates could pass as the same brand's A/B test, push them further apart.
   - At least one candidate should be type-led or editorially expressive unless the category is regulated, enterprise-risk-heavy, or the user explicitly asks for restraint.
   - For each candidate, name the creative bet: for example oversized type as product theater, condensed type as speed, editorial serif as taste, mono as technical evidence, spatial image stage as immersion, or strict grid as operational trust.
   - Produce 1 chosen DNA only when the user asks for a decisive recommendation or implementation handoff outside the three-direction flow.
   - Use `references/dna-framework.md` for archetypes, scoring, motion levers, the style distance test, and the output schema.

4. **Score fit**
   - Score each candidate 1-5 on audience fit, conversion clarity, category differentiation, brand memorability, feasibility, and reference alignment when a reference exists.
   - Inside LP Studio, rank the candidates but keep all three: each becomes the style source of one visual direction, and the user's direction pick makes the final call. Carry the scores forward as one-sentence tradeoff notes for the option presentation.
   - Outside the flow, pick the strongest candidate. If the highest score is not the recommendation, explain the tradeoff.

5. **Specify the DNA**
   - Inside LP Studio, specify all three candidates at this depth. Concise wording is fine, but each candidate must be complete enough to drive image generation and a build. Finalize implementation notes for the winning candidate after the user picks a direction.
   - Define typography, palette, layout, hero rule, CTA behavior, image/3D direction, motion, component density, proof strategy, and avoid list.
   - Define the creative range: what should feel familiar, what should feel surprising, the maximum acceptable visual risk, and the one signature move the page will own.
   - Define a type system contract, not only font names: primary and secondary families, fallback stack, type sizes, weights, line heights, letter spacing, label treatment, button text, body copy, captions, mono/metadata, and whether italics are allowed. Explain why each type role fits the service and audience.
   - Define the typographic signature. Specify how type is used as a design material: scale contrast, contrast between Japanese and Latin text, display cut/crop, condensed or extended proportions, italic stress, editorial punctuation, vertical rhythm, wordmark behavior, text wrapping shape, numeral treatment, mono labels, and whether text can overlap, frame, or anchor imagery. If the answer is "none", explain why restraint is the stronger creative choice.
   - Choose actual font directions, not only generic categories. Prefer naming candidate families or font archetypes with fallback logic: display, body, UI, mono, Japanese/CJK pairing, Latin pairing, and implementation-safe fallback. Do not default to Inter/Geist/Noto unless their neutrality is the point.
   - Define the spacing and composition rationale: section padding, gutters, grid, whitespace role, density rule, scroll rhythm, and mobile compression. State what each spacing decision separates, emphasizes, slows down, or makes easier to compare.
   - Define the motion system as a first-class part of the DNA: a named motion concept that matches the candidate's personality, hero entrance choreography, scroll reveal policy, micro-interactions for buttons, inputs, links, and cards, one signature motion moment the visitor will remember, the reduced-motion fallback, and performance rules. Use the motion levers in `references/dna-framework.md`. Motion cues pass the same deletion test as visual objects; "subtle fade-ins everywhere" with no job is not a motion system.
   - Define an element-intent ledger for the major sections and visual objects. Each hero object, media frame, card, proof block, CTA, badge, image, illustration, divider, background band, and motion cue needs a purpose, why it is placed there, and a deletion test: what would break if it were removed.
   - Define the `hero_interaction_rule`: what the visitor can actually click, type, select, upload, run, or change in the hero. For chat products, specify only the chat behavior allowed by the brief and user constraints; do not add assistant responses or preview/output updates when they have been excluded.
   - Define the surrounding page system beyond the demo: section rhythm, generated examples, proof objects, output previews, background treatment, and how non-demo areas stay as polished as the hero interaction.
   - Define visual evidence rules for feature explanations. Text-plus-icon sections are not valid finished LP sections; every feature section needs a meaningful visual object such as a screenshot, demo state, generated output, comparison, workflow diagram, product photo, preview, or example artifact.
   - Make the DNA implementable. Name fonts, colors, type scale, spacing, radius, first-viewport composition, component rules, and rationale for why these choices exist.
   - Save the selected DNA to `design-dna.md` when the workflow is file-backed.

6. **Handoff**
   - For image generation, convert the DNA into hard prompt constraints.
   - For implementation, convert the DNA into tokens, layout rules, component states, and responsive constraints.
   - Route back to [$lp-visual-directions](../lp-visual-directions/SKILL.md) after the DNA is selected or confirmed.

## Quality Bar

- The hero rule must match the product's actual selling motion.
- For SaaS, the hero rule should make the actual product demo the primary evidence: the real interaction surface, core workflow, and user action should be usable before claims or galleries carry the page. A static hero image that merely explains the product does not satisfy the demo requirement.
- Match demo format to product format and make it operable in the built LP: chat products provide a chat composer and response loop, editor products provide editable controls, API/devtools provide a runnable playground or code interaction, upload products provide upload/review behavior, dashboard products provide dashboard interaction.
- For chat products, the hero's primary object is the chat itself. Generated previews, screenshots, output images, and explanation panels may sit beside or below the chat, but they cannot replace the chat as the hero demo.
- Respect explicit negative constraints exactly. If the user limits the hero to H1, H2, and chat, do not add generated results, assistant output, prompt chips, preview panels, proof rows, metrics, logos, galleries, explanatory cards, or any other hero element. The user's excluded elements override the default demo pattern.
- Treat the global header as separate from hero content. If the user limits the hero contents, do not remove the normal landing-page header unless the user explicitly says no header. Specify header rules separately from hero rules.
- The demo alone is not enough. The DNA must also make the rest of the landing page look intentional: generated examples, output previews, proof sections, background bands, and section transitions need a coherent visual system.
- Keep copy density low. Good LP design should make the product, examples, and proof do the work; long explanatory text is a fallback, not the main surface.
- Typography is a conversion mechanism, not styling. The DNA must specify which words deserve display scale, which copy should stay quiet, where contrast comes from, whether italic is meaningful or forbidden, and how type size changes across desktop and mobile. Weak defaults like "Inter, 16px body" are not enough.
- Motion is a design material with the same status as typography. Each DNA must say what its motion does for the page: pacing the scroll story, proving the product is alive, directing attention to the demo or CTA, or expressing the brand's physics. Motion that only decorates fails the deletion test, and a DNA with no motion position at all is incomplete.
- Inside LP Studio, the three candidates must be distinguishable as thumbnails. If a stranger could group two candidates as the same brand, the set fails the style distance test and must be pushed further apart.
- Typography should carry creative force. The DNA should actively consider high-contrast serif, soft grotesk, narrow/condensed grotesk, mono, slab, humanist sans, Japanese mincho/gothic pairings, custom wordmark behavior, oversized/cropped type, and mixed typographic voices. Reject the obvious choice unless it is better for the product.
- One typographic move should be memorable. Examples: a huge cropped verb, a thin editorial italic aside, a narrow technical index, a type-as-interface hero, large tabular numerals, or a wordmark that drives the grid. The move must still preserve readability and product truth.
- Do not use side rails, marginal labels, vertical labels, decorative rules, or framing text merely to make the page feel designed. They are allowed only when they replace necessary navigation, orientation, status, or proof that would otherwise need to appear elsewhere. If deleting the side element does not harm comprehension or conversion, it is decorative and should be removed.
- Whitespace must be purposeful. The DNA must explain the difference between breathing room, comparison space, focus space, and dead space. If a gap exists only to make the page look sparse, revise the composition.
- Every repeated component needs a reason to repeat. If a feature card, proof card, reaction example, icon row, or section band repeats a claim already made, either assign it a new evidence job or remove it.
- Major visual objects must pass the deletion test. If removing a visual object does not weaken comprehension, trust, memorability, or conversion, it should not be in the DNA.
- Do not allow text-and-icon-only sections to carry feature explanation. Icons can label or support a feature, but each feature section needs visual evidence: product UI, workflow state, generated example, comparison, before/after, photo, diagram, preview, or another concrete image/object that shows what happens.
- Do not accept schematic wireframes as design DNA. The DNA must define visual taste, composition, artifact quality, and the semantics of what the product interaction actually returns.
- Do not use simplified SVG, CSS/HTML-rendered placeholder pages, gray skeleton lines, or code-rendered mock screenshots as visual evidence of design quality. Those may be internal implementation sketches only. LP Studio visual targets must come from real assets or high-fidelity bitmap concepts.
- For chat products, specify what a correct assistant response looks like for this product. A chat transcript that does not produce the product's actual value is misleading even if it contains chat bubbles.
- Do not invent metrics, logos, testimonials, or customer proof.
- Do not overfit to "AI SaaS" defaults such as purple-blue gradients, vague glow effects, floating dashboards, or generic feature-card grids.
- Preserve useful reference constraints, but reject reference details that weaken the target service.
- Prefer one strong first-viewport idea over a balanced but generic composition.

## Output Shape

Use this compact structure in `design-dna.md` or the thread unless the user asks for another format:

```yaml
design_dna:
  name:
  service_read:
  conversion_thesis:
  creative_range:
    familiarity:
    surprise:
    risk_level:
    signature_move:
    what_must_stay_plain:
  design_intent:
    page_thesis:
    hierarchy_contract:
    element_jobs:
      - element:
        purpose:
        why_here:
        deletion_test:
  hero_rule:
  hero_interaction_rule:
  interaction_surface:
  interaction_semantics:
  reference_examples:
  typography:
    primary_family:
    secondary_family:
    japanese_pairing:
    latin_pairing:
    mono_family:
    fallback_stack:
    rationale:
    typographic_signature:
      creative_bet:
      scale_contrast:
      expressive_moves:
      restraint_rules:
    scale:
      h1:
        size:
        line_height:
        weight:
        role:
      h2:
      body:
      label:
      button:
      caption:
    italic_policy:
    contrast_rule:
  palette:
  layout:
    grid:
    section_order:
    spacing:
      scale:
      section_padding:
      gutters:
      whitespace_rationale:
      density_rule:
    composition_rationale:
  surrounding_page_system:
  section_intent:
    - section:
      job:
      evidence:
      spacing_reason:
      exit_condition:
  visual_evidence_rules:
  component_language:
  imagery_and_3d:
  motion:
    concept:
    hero_entrance:
    scroll_behavior:
    micro_interactions:
    signature_moment:
    reduced_motion:
    performance_rules:
  cta_behavior:
  proof_strategy:
  copy_density:
  avoid:
  implementation_notes:
fit_score:
  audience_fit:
  conversion_clarity:
  category_differentiation:
  brand_memorability:
  feasibility:
  reference_alignment:
recommendation:
```

Load `references/dna-framework.md` when choosing archetypes, scoring candidates, or producing a final DNA spec.
