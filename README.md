# LP Studio Marketplace

This repository publishes the `lp-studio` Codex plugin through a Codex marketplace.

LP Studio is a standalone landing-page workflow:

1. Create or refine a landing-page brief.
2. Generate service-specific design DNA.
3. Generate exactly three image-led visual directions.
4. Wait for the user to pick one direction.
5. Build from the selected visual target and verify the result.

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

LP Studio should first produce a brief, then design DNA, then exactly three visual directions. It should not build until you choose one direction.

## Contents

- `.agents/plugins/marketplace.json` - Codex marketplace entry.
- `plugins/lp-studio/.codex-plugin/plugin.json` - plugin manifest.
- `plugins/lp-studio/skills/` - LP Studio workflow skills.

## Development Validation

If you have the Codex plugin-creator validation scripts available locally, validate the plugin manifest and skills from this repository root:

```bash
python3 /path/to/plugin-creator/scripts/validate_plugin.py plugins/lp-studio
```

If your Python environment is missing `PyYAML`, install it in a temporary virtual environment and run the validator from there.
