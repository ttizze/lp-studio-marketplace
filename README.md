# LP Studio Marketplace

This repository publishes the `lp-studio` Codex plugin through a Codex marketplace.

LP Studio is a standalone landing-page workflow:

1. Create or refine a landing-page brief.
2. Generate three style-divergent design DNA candidates, each with its own motion system.
3. Generate exactly three image-led visual directions — one per candidate, three completely different style worlds.
4. Wait for the user to pick one direction; the pick also selects its DNA.
5. Build from the selected visual target — including its motion system — and verify the result.
6. Optionally add a gated Studio mode so the rendered page can be tuned visually.

The plugin does not depend on or modify the Product Design plugin.

## Install

Add this marketplace:

```bash
codex plugin marketplace add ttizze/lp-studio-marketplace --ref main
```

Install the plugin:

```bash
codex plugin add lp-studio@lp-studio
```

Start a new Codex thread after installing so the plugin skills are loaded.

## Try It

In Codex, mention the plugin and ask for a landing page workflow:

```text
[@lp-studio](plugin://lp-studio@lp-studio) Create an LP for my AI SaaS.
```

LP Studio should first produce a brief, then three candidate design DNAs, then exactly three visual directions in completely different styles. It should not build until you choose one direction.

After a page has been built, you can ask for a Studio-like visual editor:

```text
[@lp-studio](plugin://lp-studio@lp-studio) Add Studio mode so I can edit the copy and positions on the page.
```

Studio mode is intended for local polish. The generated page opens normally for visitors, and the editor appears only through a gated URL such as `?studio=1`. Edits can be exported as JSON so Codex can apply the approved copy and layout changes back into source files.

## Contents

- `.agents/plugins/marketplace.json` - Codex marketplace entry.
- `plugins/lp-studio/.codex-plugin/plugin.json` - plugin manifest.
- `plugins/lp-studio/skills/` - LP Studio workflow skills.
- `plugins/lp-studio/assets/lp-studio-editor/` - reusable local Studio editor assets.

## Development Validation

If you have the Codex plugin-creator validation scripts available locally, validate the plugin manifest and skills from this repository root:

```bash
python3 /path/to/plugin-creator/scripts/validate_plugin.py plugins/lp-studio
```

If your Python environment is missing `PyYAML`, install it in a temporary virtual environment and run the validator from there.
