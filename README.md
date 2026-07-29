# Surface to Mac Migration Assistant

A small local checklist/wizard for moving work life from a Windows Surface to a new Mac while keeping work and personal accounts separate.

The app has no backend, no accounts, and no external API calls. Checklist progress and expanded phases are saved in browser `localStorage`.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Playbook Docs

The detailed migration playbook is still available in `docs/`.

| # | Guide | What it covers |
|---|-------|----------------|
| 00 | [Pre-migration safety net](docs/00-pre-migration-safety-net.md) | Password manager, account inventory, data exports, 2FA audit. |
| 01 | [Mac first-time setup](docs/01-mac-first-time-setup.md) | Setup Assistant, System Settings, Windows-to-Mac basics, essential apps. |
| 02 | [Account migration](docs/02-account-migration.md) | Claude, ChatGPT, Google, GitHub, long-tail services, and work SaaS. |
| 03 | [Data & files](docs/03-data-and-files.md) | Moving files and consolidating Google Drive/Photos. |
| 04 | [Phone, Apple ID & 2FA](docs/04-phone-apple-id-2fa.md) | Phone Apple ID strategy and the two-factor-auth migration trap. |
| 05 | [Claude Code & dev setup](docs/05-claude-code-on-mac.md) | Homebrew, Git, SSH, Claude Code, MCP servers, and repo cloning. |

The original Codex build prompt is in [prompts/codex-app-prompt.md](prompts/codex-app-prompt.md).
