# Surface → Mac Migration Playbook

A step-by-step guide for moving your **work life** off a Windows Surface 5 and onto a new
Mac, while cleanly separating it from your **personal** life. Written for someone who has
**never used a Mac before**.

> **The one-sentence summary:** Your Mac becomes your *work* machine running under your
> *work Google Workspace domain*; your Surface stays as your *personal* machine under your
> *personal Gmail*. Some accounts (GitHub, Lyft, most apps) just change their email and keep
> everything. A few (Claude, ChatGPT) **cannot** be merged — you start fresh and archive the
> old. This guide walks you through all of it in a safe order.

---

## The mental model: two identities

Keep these two lanes from ever touching and most of the confusion disappears.

| | 🏠 **Personal** | 💼 **Work** |
|---|---|---|
| Machine | Surface (you keep it) | Mac (new) |
| Google account | personal Gmail | Workspace domain |
| Apple ID | personal (stays on your phone) | work-domain (Mac + work app logins) |
| Claude | Free | Max / Team (paid) |
| ChatGPT | Free / existing | New account under work domain |
| GitHub | **one account** — work email set as primary + commit email | *(same account)* |
| Password manager | one vault, separate "Personal" and "Work" folders | *(same vault)* |

---

## ⚠️ Read these two truths first

1. **Claude and ChatGPT accounts cannot be merged, and your chat history cannot be imported
   into a new account.** Your new work-domain Claude and ChatGPT will start **empty**. This is
   expected and unavoidable. You *can* export the old data to keep as an archive — but there's
   no "import" on the other side. → See [doc 02](docs/02-account-migration.md).
2. **Most other services are easy** — GitHub, Lyft, and the like let you simply change the
   account's email address and keep all your data and history. So don't over-worry about those.

---

## How to use this playbook

Work through the docs **in numerical order**. The order is deliberate: every step that could
lock you out or lose data is gated behind a safety-net step that comes first.

| # | Guide | What it covers |
|---|-------|----------------|
| 00 | [Pre-migration safety net](docs/00-pre-migration-safety-net.md) | **Do this first.** Password manager, account inventory, data exports, 2FA audit. |
| 01 | [Mac first-time setup](docs/01-mac-first-time-setup.md) | Unboxing → Setup Assistant → System Settings → a Windows→Mac cheat sheet → essential apps. |
| 02 | [Account migration](docs/02-account-migration.md) | Per service: what transfers, what doesn't, and exact steps. Claude, ChatGPT, Google, GitHub + a pattern for everything else. |
| 03 | [Data & files](docs/03-data-and-files.md) | Moving files Surface→Mac; consolidating Google Drive/Photos onto the work account. |
| 04 | [Phone, Apple ID & 2FA](docs/04-phone-apple-id-2fa.md) | Which Apple ID to use on your phone, and the two-factor-auth trap that locks people out. |
| 05 | [Claude Code & dev setup on the Mac](docs/05-claude-code-on-mac.md) | Rebuild your developer + Claude Code environment so you can keep doing what you do today. |

There's also a **[Codex prompt](prompts/codex-app-prompt.md)** — paste it into Codex and it
will build you a small interactive checklist app that walks you through all of this with
progress tracking.

---

## Master checklist (the whole migration at a glance)

### Phase 0 — Safety net (before changing *anything*)
- [ ] Install a password manager; import existing passwords
- [ ] Build an inventory of every account under your personal email
- [ ] Export data you want to keep (Claude, ChatGPT, Google Takeout)
- [ ] Audit which accounts use SMS vs an authenticator app for 2FA

### Phase 1 — Set up the Mac
- [ ] Run Setup Assistant (clean start)
- [ ] Turn on FileVault + Touch ID
- [ ] Learn the basics (Spotlight, Dock, gestures, the Win→Mac cheat sheet)
- [ ] Create separate **Work** and **Personal** browser profiles
- [ ] Install essential apps

### Phase 2 — Migrate accounts
- [ ] Google Workspace: bring email/contacts/calendar/files onto the work domain
- [ ] Claude: new work account → subscribe → install
- [ ] ChatGPT: new work account → subscribe → install
- [ ] GitHub: add + verify work email, set as primary/commit email
- [ ] Long-tail tools: change email to work, one by one
- [ ] Work SaaS (Notion, Slack, Figma…): swap email or join via work invite
- [ ] Keep-personal accounts (banking…): leave on personal lane, save login + 2FA

### Phase 3 — Phone & 2FA
- [ ] Decide Apple ID strategy (recommended: keep personal Apple ID)
- [ ] Migrate authenticator app **before** changing anything on the phone
- [ ] Sign into work apps (Claude, Gmail, Slack) with work credentials

### Phase 4 — Dev environment
- [ ] Install Homebrew → Node → Claude Code
- [ ] Set git work email, create a new SSH key, reconnect MCP servers

---

*This repo is documentation only — there is no code to run. The single optional "build"
step is handing the [Codex prompt](prompts/codex-app-prompt.md) to Codex to generate the
interactive app.*
