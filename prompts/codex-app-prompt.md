# Codex prompt — build the interactive migration app

Copy **everything inside the box below** and paste it into Codex (or any coding agent). It's
self-contained: it tells Codex what to build, the exact tech, and embeds all the checklist
content so the resulting app stands on its own.

> Tip: run this from inside this repo so Codex can also read the `docs/` files for extra
> detail if it wants.

---

```text
You are building a small, local, single-page web app called "Surface → Mac Migration
Assistant." It is an interactive checklist/wizard that walks a first-time Mac user through
migrating their work life from a Windows Surface to a new Mac while separating it from their
personal life. There is NO backend and NO accounts — it runs entirely in the browser and
saves progress to localStorage.

TECH REQUIREMENTS
- Vite + React + TypeScript.
- No backend, no database, no external API calls.
- Progress (which checkboxes are ticked, which phases are expanded) persists in localStorage.
- Runs with: `npm install` then `npm run dev`. Document this in a README.
- Keep dependencies minimal. Plain CSS or a tiny utility setup is fine — no heavy UI kit.
- Mobile-friendly and accessible (real <button>/<input> elements, labels, keyboard support).

FEATURES
1. A header with the title and an overall PROGRESS BAR showing % of all checklist items done.
2. The migration is organized into PHASES (see CONTENT). Render each phase as a collapsible
   section showing "x / y done" in its header.
3. Each phase contains STEPS. Each step has:
   - a checkbox + title,
   - a short instruction body (support simple markdown-ish line breaks / links),
   - optional CALLOUTS rendered as colored boxes by type:
       * "warning" (amber)  — risks / lockout dangers,
       * "info" (blue)      — helpful context,
       * "transfer" (green/red split) — "What transfers" vs "What does NOT transfer".
   - optional COMMAND snippets shown in a monospace block with a "Copy" button.
4. A global "Reset progress" button (with a confirm dialog) that clears localStorage.
5. Ticking the last item in a phase visually marks the phase complete (checkmark).
6. A persistent note near the top: "Do phases in order — later steps assume earlier ones."

CONTENT (use exactly these phases, steps, and callouts)

PHASE 0 — Safety net (do before changing anything)
- Step "Install a password manager": Install 1Password or Bitwarden on the Surface first.
  Import browser passwords, then delete the exported .csv. Make "Personal" and "Work" folders.
  callout info: "1Password/Bitwarden can also store your 2FA codes — this makes the phone
  step far easier."
- Step "Inventory accounts under your personal email": Search your inbox for: welcome, verify
  your email, your receipt, subscription, new device. Build a table: Service | Current email |
  Keep or Move | New email | 2FA type | 2FA moved | Done.
- Step "Export data to keep": Claude (Settings > Privacy > Export data), ChatGPT (Settings >
  Data controls > Export), Google Takeout (Mail, Drive, Photos, Contacts, Calendar).
  callout warning: "These exports are archives only. Claude and ChatGPT have NO import on the
  new account."
- Step "Audit your 2FA": Mark each account as SMS / authenticator app / none. Flag every
  authenticator-app account — do NOT reset your phone until those are migrated.

PHASE 1 — Set up the Mac
- Step "Run Setup Assistant (clean start)": Choose 'Don't transfer' at the Migration Assistant
  prompt. Sign in with your WORK-domain Apple ID on the Mac. Enable FileVault (save the
  recovery key to your password manager) and Touch ID.
- Step "Update macOS": System Settings > General > Software Update.
- Step "Learn the basics": Spotlight = Cmd+Space. Quit app = Cmd+Q (closing the red dot only
  closes the window). Right-click = two-finger tap. Screenshot = Cmd+Shift+4. App switch =
  Cmd+Tab. Finder = the file manager.
  callout info: "Coming from Windows: Cmd replaces Ctrl for almost every shortcut."
- Step "Create separate browser profiles": Install Chrome. Make a WORK profile (work
  Workspace) and a PERSONAL profile. Keep them separate so identities never mix.
- Step "Install essential apps": Chrome, password manager, Claude desktop, ChatGPT desktop,
  work comms (Slack/Teams/Zoom). Sign into AI apps after Phase 2.

PHASE 2 — Migrate accounts
- Step "Claude (start fresh)":
  callout transfer: transfers="Nothing automatic" notTransfers="Chat history, Projects,
  custom styles, memory — new account starts empty".
  Body: Sign up at claude.ai with 'Continue with Google' (work account). Subscribe to Max
  (~$200/mo individual) or Team (per-seat business). Install the desktop app. Keep personal
  Claude as Free on the Surface.
- Step "ChatGPT (start fresh)":
  callout transfer: transfers="Nothing automatic" notTransfers="History, Custom Instructions,
  Memory, saved GPTs, Projects".
  Body: Copy your Custom Instructions/Memory to a note first. Sign up at chatgpt.com with
  Google (work). Subscribe (Plus $20 / Pro $200 / Team). Recreate instructions.
- Step "Google Workspace (the big one)": In work Gmail > Settings > Accounts and Import >
  Import mail and contacts (from personal Gmail). Calendar: export .ics from personal, import
  to work. Drive: share+copy small sets, or Takeout+re-upload bulk. Turn on forwarding from
  personal Gmail to work for a grace period.
  callout info: "Goal: live out of the work domain so Claude's Google integrations act on work
  data."
- Step "GitHub (keep the account, swap the email)":
  callout transfer: transfers="Everything — same account, repos/stars/history stay"
  notTransfers="Nothing".
  Body: Settings > Emails > add work email > verify > set Primary + commit email.
  command: git config --global user.email "you@workdomain.com"
  command: git config --global user.name "Your Name"
- Step "Long-tail tools (Lyft, etc.)":
  callout info: "Unlike the AI apps, most services let you change the email and KEEP all data."
  Body (repeatable pattern): log in > Settings > change email to work > verify > update
  password manager > migrate its 2FA > mark Done. Skip anything you marked 'Keep'.

PHASE 3 — Phone, Apple ID & 2FA
- Step "Decide your phone's Apple ID":
  callout warning: "Switching the phone's primary Apple ID signs you out of personal iCloud and
  forfeits apps bought under the old Apple ID. You do NOT need a work Apple ID to use work
  accounts inside apps."
  Body (recommended): keep your PERSONAL Apple ID on the phone; just sign into Claude, Gmail,
  Slack with your WORK accounts inside each app.
- Step "Migrate your authenticator BEFORE changing the phone":
  callout warning: "This is the #1 lockout cause. Migrate and verify before removing the old
  device."
  Body: If your 2FA codes are in your password manager, nothing to do. Google Authenticator:
  ... > Transfer accounts > Export, then Import on the new device. Authy: sign in to restore.
  SMS: fine as long as you keep your number.
- Step "Install work apps on the phone": Claude, Gmail (add work account), Slack — sign in with
  WORK credentials.

PHASE 4 — Dev environment (Claude Code on the Mac)
- Step "Install Homebrew + core tools":
  command: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  command: brew install git node
  command: xcode-select --install
- Step "Configure git for work":
  command: git config --global user.email "you@workdomain.com"
  command: git config --global user.name "Your Name"
- Step "Create a new SSH key and add it to GitHub":
  command: ssh-keygen -t ed25519 -C "you@workdomain.com"
  command: pbcopy < ~/.ssh/id_ed25519.pub
  Body: Paste it at GitHub > Settings > SSH and GPG keys > New SSH key. Test with:
  command: ssh -T git@github.com
- Step "Install Claude Code and sign in":
  command: npm install -g @anthropic-ai/claude-code
  command: claude
  Body: Authenticate with the WORK Claude account (the one with your Max subscription).
- Step "Reconnect MCP servers / integrations": Reconnect Google Workspace, GitHub, and any
  others (Notion, Supabase, Vercel...) to the WORK accounts. Use the /mcp command in Claude
  Code.
- Step "Clone your repos":
  command: git clone git@github.com:your-org/your-repo.git

ACCEPTANCE CRITERIA
- `npm install && npm run dev` starts the app with no errors.
- All 5 phases and every step above render, with correct callout types and copy-buttons on
  every command.
- Ticking boxes updates the per-phase counts and the global progress bar, and survives a page
  reload (localStorage).
- "Reset progress" clears state after a confirm.
- Looks clean on both desktop and phone widths.
- Include a short README with run instructions.

Build it now. After building, run it, fix any errors, and report the dev-server URL.
```

---

## After Codex builds it

- Run `npm install && npm run dev` and open the printed URL.
- Sanity-check that the phases match these docs and that progress survives a reload.
- If you want it hosted (so you can tick items from your phone), it's a static site — it can
  deploy to Vercel/Netlify/GitHub Pages as-is.
