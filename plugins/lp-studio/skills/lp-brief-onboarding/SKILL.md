---
name: lp-brief-onboarding
description: Create landing-page briefs through chat onboarding before LP design DNA, visual direction, or generation. Use when the user wants to plan, generate, improve, or diagnose a landing page; collect industry expectations, conversion goal, proof, usable assets, missing materials, and visual/image-generation directions; produce or update a human-readable landing-page-brief.md instead of hidden JSON.
---

# LP Brief Onboarding

Use this skill before generating a landing page, redesigning a landing page, or producing LP visual assets. Act like a product-minded editor: interview the user, identify what the industry expects to see, inventory usable proof and materials, then produce a Markdown brief that another skill or agent can use to build the LP.

The core output is `landing-page-brief.md`. Do not hide the brief in an internal JSON model. The user should be able to read, correct, and keep improving it.

## Workflow

1. Classify the offer and industry.
2. Interview for audience, conversion goal, proof, objections, and available assets.
3. Map the industry to the LP evidence it must show.
4. Collect reference examples or mark the reference gap explicitly.
5. Produce or update `landing-page-brief.md`.
6. Recommend the LP shape for that industry.
7. Prepare image-generation directions for missing or useful visuals.
8. Hand off to design DNA generation only after the brief is usable.

Ask in small batches. Prefer 2-4 targeted questions at a time, and make each question tied to a section of the future LP.

## First Questions

Start with these unless the user already provided the answers:

```md
To create the LP brief, start by answering these four things.

1. What kind of LP is this? Examples: SaaS / AI tool / ecommerce / course / store / professional service / event / agency service.
2. Who is it for? Examples: consumers / companies / developers / executives / operators / creators.
3. What should the visitor do? Examples: sign up / book a demo / buy / contact / request materials / reserve.
4. What usable materials already exist? Examples: logo / screenshots / video / product photos / existing site / Figma / PDF / sales deck.
5. What is the actual demo surface visitors should touch in the hero? Examples: chat / editor / playground / dashboard / upload flow / API console / mobile app / checkout.
6. What reference examples should this feel close to or avoid? Examples: competitor LPs / product demos / SaaS pages / screenshots / sites with a similar interaction.
```

If the user attaches files, screenshots, URLs, or docs, treat them as first-class inputs. Summarize what each asset can support in the LP.

## Reference Examples

Ask for reference examples when the product category depends on taste, product interaction, or proof quality, especially SaaS, AI tools, developer tools, ecommerce, and premium services.

Classify references by what they contribute:

- `product demo mechanic`: how the page shows the product working.
- `visual taste`: typography, palette, spacing, density, and polish.
- `proof pattern`: examples, templates, comparisons, reviews, metrics, or trust sections.
- `conversion flow`: CTA placement, pricing reveal, onboarding, trial/demo motion.
- `avoid`: references that show what the LP should not become.

If the user has no references, mark this as a missing input and propose the kind of examples that would be useful. Do not compensate by adding more explanatory copy. The LP should become more visual and example-led, not more text-heavy.

When the LP needs to explain features, plan the visual evidence for those features. A section made only of text plus icons is not acceptable as a primary LP section. Each feature explanation should be paired with a product screenshot, demo state, generated output, comparison, workflow diagram, product photo, example card, or another meaningful image/object that shows the feature in use.

## Asset Intake

Always ask about assets because LP quality depends on visible evidence.

Classify every asset into one of these buckets:

- `real product`: screenshots, demos, templates, sample output, product photos, app videos.
- `demo surface`: the actual place the user touches the product, such as chat, editor, playground, dashboard, upload flow, API console, mobile app, or checkout.
- `brand`: logo, colors, fonts, tone, existing site, brand deck.
- `proof`: customer logos, testimonials, reviews, case studies, metrics, certifications.
- `sales material`: pitch deck, one-pager, pricing sheet, FAQ, comparison doc.
- `visual reference`: reference LPs, mood boards, Figma, images the user likes.
- `reference example`: competitor pages, product demo examples, interaction examples, style references, conversion-flow references.
- `missing`: required evidence the user does not have yet.

Never fabricate real evidence. If customer logos, metrics, testimonials, certifications, or screenshots are missing, mark them as missing or propose generated placeholder visuals that are clearly not proof.

## Industry Expectations

After classifying the industry, insert the relevant expectations into the brief. Use judgment when an offer spans multiple categories.

| Industry | LP must show |
| --- | --- |
| SaaS | Product demo is required: the actual primary interaction surface users touch, such as chat, editor, playground, dashboard, upload flow, or API console; real screens when available, the core workflow, templates or examples, use cases, integrations, pricing, admin/security when B2B. In the built LP, the hero demo should be an operable product surface, not a static explanatory image. Feature explanations must be backed by product/demo/output visuals, not icon-only cards. |
| Developer tool/API | Quickstart, runnable code, playground, SDKs, docs, limits, pricing units, latency/reliability, GitHub/sample app. |
| AI tool | Input/output examples, workflow fit, quality boundaries, evaluation/proof, data policy, cost model, prompt/template examples. |
| B2B/Enterprise | Case studies, ROI logic, security, SSO, audit logs, permissions, implementation path, procurement-ready materials. |
| EC/Product | Product photos, variants, specs, size/context, reviews, delivery/returns, warranty, comparison, usage scenes. |
| Service/Agency | Deliverables, examples, process, timeline, price range, team, before/after, consultation flow. |
| Course/Education | Curriculum, lesson sample, instructor proof, target level, outcomes, study time, support/refund policy. |
| Financial/Insurance | Fees, risks, license/registration, simulator, security, terms, support, transparent comparison. |
| Medical/Healthcare | Practitioner/medical supervision, scope, privacy, appointment path, expected outcomes, disclaimers, safety limits. |
| Legal/Professional | Specialty, credentials, case types, fees, consultation flow, confidentiality, response area. |
| Real estate/Hospitality | Photos, map/location, availability, price, amenities, reviews, neighborhood, booking/inquiry path. |
| Event | Date/time, venue, speakers, agenda, audience, ticket tiers, past atmosphere, access information. |
| Community | Who joins, rituals/activity examples, member outcomes, participation rules, tone, retention reason. |
| App/Game | Gameplay or app video, screenshots, supported devices, reviews, pricing/IAP, download path, core loop. |
| Restaurant/Store | Menu/product range, prices, photos, location, hours, reservation, reviews, seat/store atmosphere. |
| NPO/Donation | Problem evidence, use of funds, impact, transparency, stories, recurring support reason. |

## LP Shape Recommendation

Once the brief has industry, audience, goal, assets, proof, and objections, state the recommended LP shape:

```md
For this industry, the LP should work like this:

- First view:
- Primary evidence:
- Main sections:
- Proof strategy:
- CTA strategy:
- Visual strategy:
- What not to overemphasize:
```

Examples:

- SaaS: Lead with the product demo as primary evidence, then templates/examples, use-case workflows, proof, integrations/security, pricing, CTA.
- AI tool: Lead with a concrete input/output transformation, then real examples, workflows, boundaries, pricing, data policy, CTA.
- Service/agency: Lead with outcome and examples, then deliverables, process, proof, pricing range, consultation CTA.
- EC: Lead with product and price signal, then variants/specs, reviews, usage scenes, delivery/return, purchase CTA.

For SaaS, the expected standard is that claims, mood, a sample gallery, or an explanatory hero image are not enough as the main first-view evidence. The brief should state the actual demo surface the LP must let visitors use in the hero, even if the current product asset is only a prototype, generated mock, or clearly labeled placeholder. If the product is chat-based, the first-view demo should be an operable chat interaction with a composer and response behavior, not a static screenshot, generic dashboard, editor mock, or explanation image.

Across industries, do not recommend text-and-icon-only feature sections as a finished LP section. If an icon row is useful, it must support a larger visual object such as a product image, demo, example, comparison, workflow, or before/after.

## Markdown Brief Template

Create or update this structure. Keep unknowns explicit.

```md
# Landing Page Brief

## Offer
- Name:
- Category / industry:
- What it does:
- Why now:

## Audience
- Primary audience:
- Buyer/user distinction:
- What they already know:
- What they fear:

## Conversion Goal
- Primary CTA:
- Secondary CTA:
- Success path:

## Industry Expectations
- Required evidence:
- Expected sections:
- Compliance or trust needs:

## Product / Service Artifacts
- Primary demo surface:
- Hero interaction required:
- Demo URL:
- Screenshots:
- Templates:
- Sample outputs:
- Product photos:
- Videos:
- Case studies:
- Pricing sheet:

## Assets
- Logo:
- Brand colors:
- Fonts:
- Existing site:
- Figma/design files:
- Deck/PDF/sales docs:
- Reference LPs:
- Reference examples:
- Other media:

## Proof
- Customers/logos:
- Testimonials/reviews:
- Metrics:
- Certifications/credentials:
- Security/privacy:
- Support/guarantee:

## Objections
- Price:
- Effort/setup:
- Trust/risk:
- Effectiveness:
- Data/privacy:
- Switching/commitment:

## Recommended LP Shape
- First view:
- Primary demo surface:
- Section order:
- CTA strategy:
- Proof strategy:
- Visual strategy:
- Copy density:
- Reference examples to use or seek:

## Design DNA Inputs
- Desired first-viewport behavior:
- Actual interaction to show:
- Taste / brand direction:
- Reference design:
- Reference examples:
- Visual avoid list:
- Implementation constraints:

## Image Generation Brief
- Hero image:
- Product or workflow visuals:
- Feature explanation visuals:
- Section images:
- Style:
- Must include:
- Must avoid:
- Real assets that must not be faked:

## Missing Materials
- [ ]
```

## Completion Standard

The onboarding is complete when:

- The brief names the industry, audience, offer, and conversion goal.
- The brief lists available assets and missing materials.
- The brief explains what this industry's LP must show.
- The brief recommends a section shape and proof strategy.
- The image generation brief separates generatable visuals from real evidence.
- The brief is ready to hand off to `design-dna` before visual directions.

If critical information is missing, still produce the Markdown with `Unknown` and `Missing Materials` rather than blocking indefinitely.
