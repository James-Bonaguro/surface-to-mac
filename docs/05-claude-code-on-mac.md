# 05 — Claude Code & dev setup on the Mac

> Rebuild your developer + Claude Code environment so you can keep doing on the Mac exactly
> what you do today. This assumes you finished the account moves in
> [doc 02](02-account-migration.md) (especially GitHub).

Open the **Terminal** app (⌘Space → "Terminal").

---

## Step 1 — Homebrew (the Mac package manager)

Homebrew installs developer tools with one command each. Install it:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After it finishes, it prints two `echo`/`eval` lines to add `brew` to your PATH — **run those
two lines** (on Apple Silicon they reference `/opt/homebrew/bin/brew`). Then verify:

```bash
brew --version
```

---

## Step 2 — Core tools

```bash
brew install git node
xcode-select --install   # command-line dev tools (git, compilers); accept the popup
```

Verify:

```bash
git --version
node --version
npm --version
```

An editor (pick one):

```bash
brew install --cask visual-studio-code   # or:  brew install --cask cursor
```

---

## Step 3 — Point git at your work identity

So your commits are attributed to your **work** email (which you added to GitHub in doc 02):

```bash
git config --global user.name  "Your Name"
git config --global user.email "you@workdomain.com"
git config --global init.defaultBranch main
```

---

## Step 4 — A fresh SSH key for GitHub (new machine = new key)

```bash
ssh-keygen -t ed25519 -C "you@workdomain.com"
# press Enter to accept the default path; set a passphrase (store it in your password manager)

eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519

# copy the PUBLIC key to your clipboard:
pbcopy < ~/.ssh/id_ed25519.pub
```

Then on [github.com](https://github.com) → **Settings → SSH and GPG keys → New SSH key** →
paste. Test:

```bash
ssh -T git@github.com
```

> If you use **commit signing** (GPG or SSH signing), set it up here too and add the signing
> key to GitHub under the same settings page.

---

## Step 5 — Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

Then start it in any project folder and authenticate with your **work** Claude account:

```bash
cd ~/your-project
claude
```

On first run it walks you through sign-in (use the **work** Claude account that has your Max
subscription). The desktop app and the CLI both authenticate to the same account.

> 💡 You can also use Claude Code on the web and the Claude desktop app — all tied to the same
> work Claude account.

---

## Step 6 — Reconnect your MCP servers / integrations

This is what lets Claude act on your **work** data — the whole reason for consolidating onto
the work domain.

- **Google Workspace** (Gmail, Drive, Calendar): connect to your **work** Google account.
- **GitHub**: connect with your account (work email is now primary).
- Any others you use today (Notion, Supabase, Vercel, etc.): reconnect with the **work**
  versions where they exist.

In Claude Code, manage these with the `/mcp` command (or via Settings in the desktop/web app).
Re-add each server and authenticate with the **work** account when prompted.

> 🤖 If you tell me which integrations you had connected before, I can help you reconnect the
> equivalent set on the Mac.

---

## Step 7 — Clone your repos

```bash
mkdir -p ~/code && cd ~/code
git clone git@github.com:your-org/your-repo.git
```

Repeat for each repo you work on. They'll now commit under your work identity over SSH.

---

## ✅ Exit criteria for this page

- [ ] Homebrew, git, node, editor installed
- [ ] git configured with **work** name/email
- [ ] New SSH key created and added to GitHub; `ssh -T git@github.com` succeeds
- [ ] Claude Code installed and signed in with the **work** Claude account
- [ ] MCP servers / integrations reconnected to **work** accounts
- [ ] Your repos cloned and you can commit/push

🎉 That's the migration. Your Mac is now your work machine, running under the work identity,
with your dev + AI environment rebuilt.
