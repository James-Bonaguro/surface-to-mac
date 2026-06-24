# 01 — Mac first-time setup

> For someone who has **never used a Mac**. We'll get you from a sealed box to a working,
> secure work machine, then teach you just enough macOS to feel at home coming from Windows.
>
> Before this page, finish **[00 — safety net](00-pre-migration-safety-net.md)**.

---

## Step 1 — Setup Assistant (the first-boot wizard)

Power on. macOS walks you through a setup wizard. Here's what to pick:

1. **Country/region, Language** → your choices.
2. **Wi-Fi** → connect to your network.
3. **Migration Assistant** ("Transfer your data") → choose **"Not now" / "Don't transfer."**
   We're doing a **clean start** so work and personal stay cleanly separated.
   - *(If you'd rather bulk-copy everything from the Surface instead, see
     [doc 03](03-data-and-files.md) for the Windows Migration Assistant route — but clean
     start is recommended here.)*
4. **Sign in with your Apple ID** →
   - On the **Mac**, sign in with your **work-domain Apple ID** (create one at
     [account.apple.com](https://account.apple.com) first if you haven't). This keeps the
     work machine on the work identity.
   - ⚠️ Your **phone** is a separate decision — see [doc 04](04-phone-apple-id-2fa.md).
     Different devices can use different Apple IDs; that's fine.
5. **Enable FileVault** when offered → **Yes.** This encrypts your disk so a lost/stolen
   laptop doesn't leak work data. Save the recovery key into your password manager.
6. **Touch ID** → set up your fingerprint. You'll use it to unlock, install apps, and
   autofill passwords.
7. **Siri / Screen Time / analytics** → optional; safe to skip.

You'll land on the **Desktop**.

---

## Step 2 — Essential System Settings

Open **System Settings** (the gear icon in the Dock, or ⌘Space → type "System Settings").

- **General → Software Update** → install any pending macOS updates now.
- **Wi-Fi / Network** → confirm you're connected.
- **Touch ID & Password** → confirm Touch ID; set a strong login password (store it in your
  manager).
- **Privacy & Security → FileVault** → confirm it's **On**.
- **Keyboard** → if you want, enable **"Use F1, F2 keys as standard function keys."**
- **Trackpad** → turn on **"Tap to click"** (lets you tap instead of physically pressing).
- **Desktop & Dock → "Show all filename extensions"** lives in Finder settings (next step) —
  do it; it makes you less likely to run the wrong file.

---

## Step 3 — The Windows → Mac cheat sheet

This is the part that trips up every Windows switcher. Keep this handy for a week.

| You used to… (Windows) | On a Mac… |
|------------------------|-----------|
| **Ctrl** for shortcuts (Ctrl+C, Ctrl+V) | **⌘ (Command)** — ⌘C, ⌘V, ⌘Z, ⌘A |
| Right-click | **Two-finger tap** on the trackpad (or Control+click) |
| **Alt+Tab** to switch apps | **⌘Tab** |
| Start menu / search | **Spotlight** — press **⌘Space**, type anything (apps, files, math, web) |
| **File Explorer** | **Finder** (the blue smiley face in the Dock) |
| Minimize/maximize/close (top-right) | Traffic lights **top-left**: 🔴 close · 🟡 minimize · 🟢 fullscreen |
| Closing a window quits the app | ❗ Closing (🔴) only closes the **window** — the app keeps running. **⌘Q quits** it. |
| Taskbar | **Dock** (bottom) + **menu bar** (top, changes per app) |
| Delete key deletes forward | Mac **Delete** = backspace. Forward-delete = **fn+Delete** |
| PrtScn | **⌘⇧3** (whole screen) · **⌘⇧4** (select an area) · **⌘⇧5** (full toolbar + recording) |
| Task Manager | **Activity Monitor** (⌘Space → "Activity Monitor"); force-quit = **⌘⌥Esc** |
| Installing a `.exe` | Apps come as `.dmg` (drag into Applications), from the **App Store**, or via **Homebrew** (see [doc 05](05-claude-code-on-mac.md)) |

**Trackpad gestures worth learning on day one:**
- Two-finger swipe up/down = scroll.
- Three/four-finger swipe up = **Mission Control** (see all windows).
- Three/four-finger swipe left/right = switch between full-screen apps/desktops.
- Pinch with thumb + three fingers = Launchpad (all apps).

---

## Step 4 — Set up separate Work and Personal browser profiles

This is the single best habit for keeping the two identities from bleeding together.

1. Install **Google Chrome** (download from [google.com/chrome](https://www.google.com/chrome)
   — it arrives as a `.dmg`; drag Chrome into the **Applications** folder).
2. In Chrome, click your profile avatar (top-right) → **Add** →
   - Profile 1: **Work** → sign in with your **work Workspace** Google account. Make this
     your default.
   - Profile 2: **Personal** → sign in with your **personal Gmail** (only if you need
     personal stuff on the work Mac; otherwise leave personal browsing on the Surface).
3. Pin the two profile windows to your Dock so they're easy to tell apart.

Now "work Google" and "personal Google" live in physically separate browser windows with
separate cookies, history, and autofill. No more accidental cross-posting.

---

## Step 5 — Install your essential apps

| Category | App | How |
|----------|-----|-----|
| Browser | Google Chrome | `.dmg` from google.com/chrome |
| Passwords | 1Password / Bitwarden | App Store or their site (you already made the account in doc 00) |
| AI | **Claude** desktop | [claude.ai/download](https://claude.ai/download) |
| AI | **ChatGPT** desktop | [openai.com/chatgpt/desktop](https://openai.com/chatgpt/desktop) |
| Work comms | Slack / Teams / Zoom | App Store or each vendor's site |
| Notes/Docs | whatever your team uses | — |
| Dev stack | Homebrew, Node, git, an editor, Claude Code | see **[doc 05](05-claude-code-on-mac.md)** |

> Sign into **Claude** and **ChatGPT** with your **work** accounts — but create those accounts
> first in **[doc 02](02-account-migration.md)**.

---

## ✅ Exit criteria for this page

- [ ] Setup Assistant completed with the **work-domain Apple ID**
- [ ] FileVault **On**, recovery key saved; Touch ID working
- [ ] macOS updated
- [ ] Comfortable with ⌘Space, ⌘Q, two-finger tap, and the cheat sheet
- [ ] Chrome installed with separate **Work** and **Personal** profiles
- [ ] Essential apps installed (AI sign-ins happen after doc 02)

Next: **[02 — Account migration](02-account-migration.md)**.
