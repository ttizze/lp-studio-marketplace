---
name: index
description: Route LP Studio landing-page workflows. Use when the user wants to create, plan, improve, design, visually explore, or build a landing page; onboard the LP brief; create service-specific design DNA; generate three visual directions; wait for the user to select one; then build only from the selected visual target.
---

# LP Studio

LP Studio is a standalone landing-page workflow. It does not modify or depend on the Product Design plugin.

## Router

Route requests in this order:

1. If there is no usable `landing-page-brief.md` or confirmed LP brief in the thread, use [$lp-brief-onboarding](../lp-brief-onboarding/SKILL.md).
2. If the brief is usable but there is no `design-dna.md` with three style-divergent candidate DNAs (or an explicitly confirmed single DNA), use [$design-dna](../design-dna/SKILL.md).
3. If the brief and design DNA are usable and the user wants design exploration, visual direction, images, or "show options", use [$lp-visual-directions](../lp-visual-directions/SKILL.md).
4. If the user has selected one generated direction, screenshot, mockup, or visual target and asks to build, use [$lp-build-selected-direction](../lp-build-selected-direction/SKILL.md).

## Core Rule

Do not build a landing page from a written brief alone when the user wants the full LP Studio flow. First create or confirm the brief, then create three style-divergent design DNA candidates, then generate exactly three visual directions — one per candidate, each a completely different style world — then wait for the user to choose one. The chosen direction also selects its candidate DNA.

The selected visual direction becomes the source of truth for implementation. The design DNA is the system-level constraint for typography, palette, layout rhythm, component language, proof strategy, motion, and avoid rules. It must also capture design intent: why each font, type size, italic rule, spacing decision, section, and major visual object belongs on the page. It should choose a creative range and signature move so the page has a point of view, not just correctness.

Motion is a first-class part of the DNA: every candidate names a motion concept, every direction narrates its motion story, and the build implements it as real behavior with a reduced-motion fallback.

## Flow

```text
LP idea
  -> brief onboarding
  -> landing-page-brief.md
  -> design-dna.md (three style-divergent candidates)
  -> three visual directions (one per candidate, completely different styles)
  -> user chooses one (direction + DNA)
  -> build selected direction (including its motion system)
  -> verify responsive/local output and motion
```

## Handoff Language

Keep user updates short:

- "Brief first, then visuals."
- "DNA first, then visuals."
- "I will generate three completely different styles and stop for your pick."
- "Now that option N is selected, I can build from that visual target."

## Product Design Boundary

Do not edit the Product Design plugin cache or any Product Design plugin source. If Product Design is mentioned, treat it as a conceptual reference only. This plugin owns its own LP-specific onboarding and visual-direction flow.
