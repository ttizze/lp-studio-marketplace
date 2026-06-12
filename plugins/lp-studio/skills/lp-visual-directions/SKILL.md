---
name: lp-visual-directions
description: Generate exactly three image-based landing-page visual directions in completely different styles after LP brief onboarding and design DNA candidates are complete. Use when the user has a landing-page brief plus design DNA and wants visual concepts, generated images, options, directions, or a pick-one flow before implementation.
---

# LP Visual Directions

Generate landing-page visual directions from `landing-page-brief.md` plus `design-dna.md`, or equivalent confirmed context. This is the LP Studio equivalent of "show three directions and wait for the user to choose", specialized for landing pages.

## Gate

Do not start if the LP brief is missing the offer, audience, industry, conversion goal, available assets, and industry expectations. Route back to [$lp-brief-onboarding](../lp-brief-onboarding/SKILL.md) first.

Do not start if design DNA is missing. The LP Studio default input is three style-divergent candidate DNAs from [$design-dna](../design-dna/SKILL.md); route there first when they do not exist.

Do not build during this step. The output is three visual options and a request for the user to choose one.

## Resolve Context

Before image generation:

1. Read the brief.
2. Read `design-dna.md` or the equivalent confirmed design DNA candidates.
3. Identify the actual product interaction surface the LP must demo: chat, editor, playground, dashboard, upload flow, API console, mobile app, checkout, or another primary user-touch point.
4. Inspect any referenced local screenshots, product images, logos, Figma exports, PDFs, or existing site captures that are available.
5. Inspect any reference examples that are available and extract only reusable mechanics, not source brand copy.
6. Decide which assets are real proof and must not be invented.
7. Decide which visual material can be generated safely.
8. Pick a landing-page viewport: default to `1440px wide, scrollable landing page`.

If a named asset cannot be accessed, say so and ask whether to continue without it. Do not silently ignore named assets.

## Three Options

Generate exactly three independent image options unless the user explicitly requests a different count. The three options are three completely different style worlds, not three variants of one design: different typography, palette, composition system, mood, and motion concept. The difference must be obvious from a thumbnail of the first viewport.

By default, each option embodies one of the three candidate DNAs from design-dna — one option per candidate. Within its candidate, an option must not violate that candidate's typography, palette, component language, proof strategy, or avoid list. If the user has already locked a single DNA, say so, keep all three options inside it, and maximize structural and compositional range instead.

The visual options must preserve their candidate DNA's rationale, not only its surface style. If the DNA says why a font, size, italic rule, whitespace rhythm, section, motion cue, or visual object exists, the option must make that intention visible. Do not add decorative elements, extra cards, badges, dividers, or gaps unless they pass the DNA's element job/deletion test.

Do not make three safe variants. Unless the brief or user demands restraint, the set should include at least one type-led option where typography is the main visual engine, one product/evidence-led option, and one composition/brand-system-led option. The differences should be visible from the first viewport.

What stays constant across all three: the brief's offer and audience, the actual product interaction surface, real-versus-placeholder proof rules, and every explicit user constraint. Style diverges completely; honesty, the demo surface, and the user's negative constraints do not.

Every option carries a motion concept inherited from its candidate DNA. The generated image is static, so carry motion in the presentation: when describing each option, narrate its hero entrance, scroll behavior, and signature motion moment so the user can compare how the three pages would feel in motion, not only how they look.

The craft bar is an award-level art-directed page, not a clean template. Each image should show deliberate lighting and color grading, real texture and material decisions, layered depth, and refined component detail. If an option looks like a default component library with content poured in, regenerate it.

Use these default lenses:

- `Product Proof`: foreground the actual product, demo, templates, screenshots, or output examples.
- `Audience Scene`: foreground the buyer/user context and the situation that makes the offer valuable.
- `Editorial System`: foreground narrative, proof, and section rhythm for a polished marketing page.
- `Type-Led Campaign`: foreground the typographic signature, scale contrast, wordmark behavior, or type-as-interface idea from the DNA.

Adjust the lenses by industry:

- SaaS: one product-surface direction, one workflow/templates direction, one enterprise/trust direction.
- AI tool: one input/output transformation direction, one workflow automation direction, one trust/data-policy direction.
- Ecommerce: one product-detail direction, one lifestyle/use-scene direction, one comparison/review direction.
- Service/agency: one outcome/examples direction, one process/deliverables direction, one consultative trust direction.
- Course: one curriculum direction, one instructor/proof direction, one learner-outcome direction.

For SaaS, all three directions should make the actual product demo surface the primary hero object. The visual target should depict the surface that will be operable in the built LP, not a static explanatory image. The three options may differ in demo framing, such as live product surface, workflow walkthrough, or trust/admin console, but the real user-touch surface remains the primary evidence. Chat products put the chat composer and conversation in the hero. Editor products show editor controls. API/devtools show playgrounds or code. Upload products show upload/review flow. Galleries, audience scenes, editorial rhythm, and trust sections are secondary to showing how the SaaS works.

Visual directions should be visual-first and example-led. Avoid text-heavy pages where long paragraphs explain the value. Use short headlines, compact labels, product demo surfaces, example galleries, before/after states, templates, screenshots, comparisons, or proof objects to carry meaning. If references are missing, state the reference gap and propose what kind of examples should guide the next round.

Typography should be a major part of each visual direction. Each option should show clear type hierarchy, intentional font personality, explicit display/body/label/button roles, and any italic or mono usage only when it has a semantic job. Weak default typography, same-size text everywhere, generic rounded buttons, or browser-default control text fail this step. Prefer one visible typographic idea: oversized display, condensed index, editorial serif/sans tension, type-as-interface, sharp mono metadata, or a custom wordmark treatment when appropriate. Avoid stacking multiple typographic accessories.

Side rails, vertical labels, marginal text, decorative rules, and frame labels are high-risk. Do not include them unless the DNA gives them a concrete information job and they pass the deletion test. If they only add style around a hero, remove them.

Spacing should be purposeful. Each option should demonstrate why the hero has its amount of empty space, why sections are separated or compressed, and why repeated elements are grouped. Do not use blank space to cover missing evidence, and do not fill space with repeated claims.

Never use a text-and-icon-only section as a finished landing-page section. Icon rows can be small labels or secondary navigation, but feature explanations must include meaningful visual evidence: a product screenshot, demo state, generated output, comparison, workflow diagram, product photo, preview, example artifact, or before/after. If no such visual exists, create a clearly labeled generated/example visual rather than replacing it with more copy and icons.

The product demo must not be the only designed part of the option. Each direction should also show a coherent non-demo page system: polished generated-output examples, intentional section bands, tasteful proof placeholders, output previews, and CTA areas. Avoid empty placeholder boxes, generic dark panels, and section layouts that feel unfinished once the demo is removed.

Do not present schematic wireframes, generic boxes, or low-fidelity placeholder compositions as visual directions. A visual direction should look like an art-directed landing page concept, not an explanatory diagram. If you cannot create production-quality visuals, state that the output is a wireframe and do not ask the user to choose it as the visual target.

Never substitute a code-rendered mock for a visual direction. Do not create SVG diagrams, CSS/HTML-rendered page mockups, browser screenshots of hand-coded placeholder layouts, gray-line skeletons, or "simple vector" compositions and present them as visual options. Those are implementation sketches, not LP Studio visual directions. Use real product screenshots, supplied design assets, or high-fidelity image-generated bitmap concepts. If high-fidelity visual generation fails or keeps adding invalid content, report that failure and stop; do not fill the gap with simplified local renders.

For chat-based products, the chat transcript must be semantically correct. The assistant response should show the real product value being delivered. For an LP generation SaaS, a correct response might include a brief summary, generated section plan, style choices, and a rendered/previewed landing-page artifact. A vague message like "preview attached" is not enough.

For chat-based products, do not make the hero a picture explaining chat. The hero composition should make the chat itself feel usable. By default that can include visible input/composer, send affordance, example prompt, response state, and a resulting output or preview update. However, if the user excludes generated results or limits the hero contents, use only the allowed chat elements.

Respect explicit negative constraints exactly. If the user says the hero should contain only H1, H2, and chat, then the hero contains only those elements. Do not add generated results, assistant output, preview cards, output artifacts, prompt chips, proof, galleries, screenshots, metrics, logos, or explanatory sections to the hero. Do not infer that a chat product must show the generated result in the initial hero when the user has excluded it.

Do not confuse the global header with hero content. A normal landing page can still require a site header above the hero when the hero itself is limited to H1, H2, and chat. Unless the user explicitly says no header, preserve or include a minimal global header with brand, essential navigation, and primary CTA as separate page chrome.

## Image Prompt Requirements

Every prompt must include:

- `Landing page, 1440px wide, scrollable`
- industry and audience
- primary CTA
- required proof/evidence from the brief
- for SaaS, the actual product demo surface and core workflow
- for SaaS, the hero interaction that will be operable in the built LP
- reference examples or the explicit reference gap
- the candidate DNA this option embodies, with its constraints
- creative range and signature move from that candidate DNA
- art-direction craft cues: lighting, color grading, texture and material, depth
- typography rationale, type scale, and italic policy from the design DNA
- typographic signature, including font pairing, scale contrast, and expressive/restrained type moves
- spacing and composition rationale from the design DNA
- element-intent rules for the hero, major sections, media frames, CTAs, and repeated components
- feature explanation visuals, not text-plus-icon-only sections
- available real assets to reference
- constraints about what must not be faked
- a distinct section strategy
- no browser chrome or device frame unless the real asset requires it
- no code-rendered SVG/CSS/HTML mockup substitutes

Use this prompt structure:

```text
Create a realistic production-quality landing page visual direction.

Viewport: 1440px wide, scrollable landing page.
Industry:
Audience:
Offer:
Primary CTA:

Direction:
Section strategy:
Proof strategy:
Visual style:
Creative range and signature move:
Typography system:
Typographic signature:
Spacing and composition intent:
Element intent and deletion test:
Actual demo surface:
Hero interaction:
Interaction semantics:
Reference examples or gaps:
Surrounding page system:
Feature explanation visuals:
Candidate design DNA and constraints:
Art direction craft (lighting, grading, texture, depth):
Assets to use or respect:
Must not fake:

Make it feel like a real landing page for this industry, with visible evidence rather than generic feature cards. The hero must center the actual product surface visitors will use, not a static explanatory image. For chat products, the hero is the chat. Include only the chat elements allowed by the user's constraints; if the user says no generated result, do not show assistant output, generated artifacts, or preview updates in the hero. Do not include text-and-icon-only sections; every feature explanation needs a screenshot, demo state, generated example, comparison, workflow diagram, preview, or other meaningful visual object. The output must be a high-fidelity visual concept or real product/design asset, not a CSS/SVG/HTML-rendered placeholder mock. Use clear hierarchy, readable typography, purposeful spacing, and realistic above-the-fold composition.

Every major visual object must have a visible job. If an element is present only because it looks nice, remove it. The design should make clear why the font, type size, italic/mono treatment, whitespace, section order, and CTA placement were chosen. Use type creatively where the DNA allows it; avoid default SaaS typography unless neutrality is the explicit creative choice.

The craft bar is an award-winning art-directed page. Light the page deliberately, grade the colors as a set, choose real materials and textures, and resolve every component to refined detail. Do not produce a generic component-library layout with content poured in.

If the user explicitly limits hero contents, obey that limit over the default demo pattern. Never add hero elements the user excluded.
If a header is needed, place it outside and above the hero content area; do not count it as an extra hero element.
```

## Output

After generation:

1. Name each option with a short memorable label.
2. For each option, give the strategy in one sentence, the style world in one sentence (candidate DNA name plus its typography and palette in a few words), and the motion story in one or two sentences: hero entrance, scroll behavior, signature moment.
3. Ask the user to choose one option or request another round.
4. Stop. Do not build yet.

Closing line:

```text
Pick 1, 2, or 3 as the visual target, or tell me what to remix before building.
```

## Selection

When the user picks an option, record:

- selected option number and name
- the candidate DNA behind the selected option; it becomes the final design DNA, so finalize its implementation notes in `design-dna.md` or the thread
- what should be preserved
- any requested changes
- whether to build a static LP or a richer interactive LP

Then route back to [$index](../index/SKILL.md) for selected-target build handling.
