# 00 — Pre-migration safety net

> **Do every step on this page before you change a single email address, switch a phone, or
> wipe anything.** These four steps are what stand between you and getting locked out of an
> account or losing data you can't get back. It's about 1–2 hours of boring work that saves
> you a very bad afternoon later.

---

## 1. Install a password manager (the backbone of the whole move)

When you change accounts across two machines and a phone, the thing that keeps you sane is a
single source of truth for logins. Browser-saved passwords don't travel cleanly between a
Surface and a Mac, so move them into a real manager now.

**Recommended:** [1Password](https://1password.com) (paid, polished) or
[Bitwarden](https://bitwarden.com) (excellent free tier). Either works on Windows, Mac, and
iPhone, which is exactly what you need.

**Steps:**
1. Create the account (use your **work email** — this manager is part of your work setup).
2. Install it on the **Surface** first, while your passwords still live there.
3. Export passwords from your browser and import them:
   - Chrome: `chrome://password-manager/settings` → **Export passwords** → a `.csv` file.
   - Edge: Settings → Profiles → Passwords → **⋯** → Export passwords.
   - Import that `.csv` into the password manager, then **delete the `.csv` file** (it's
     plaintext).
4. Inside the manager, make two folders/collections: **Personal** and **Work**. You'll sort
   logins into these as you go.

> 🔐 **Bonus:** both 1Password and Bitwarden can also store your **two-factor (TOTP) codes**.
> This makes the phone migration in [doc 04](04-phone-apple-id-2fa.md) dramatically easier —
> consider it.

---

## 2. Inventory every account under your personal email

You can't migrate what you can't see. Build a list of every service currently tied to your
personal Gmail.

**Fast way to find them all** — search your personal Gmail inbox for these terms; each
surfaces a different batch of signups:

- `welcome` · `verify your email` · `confirm your email`
- `your receipt` · `your invoice` · `payment` · `subscription`
- `password` · `sign in` · `new device`

> 🤖 **I can do this for you.** I have access to your Gmail through an integration. If you
> want, ask me to *"scan my inbox and build the account inventory"* and I'll produce the
> table below automatically, pre-filled. (You approve before I touch anything.)

**Track everything in one table** (copy this into a notes doc or spreadsheet):

| Service | Current email | Keep or Move? | New email | 2FA type (SMS / app / none) | 2FA moved? | Done |
|---------|---------------|---------------|-----------|------------------------------|------------|------|
| Claude | personal Gmail | Move (new acct) | work | app | ☐ | ☐ |
| ChatGPT | personal Gmail | Move (new acct) | work | app | ☐ | ☐ |
| GitHub | personal Gmail | Move (email swap) | work | app | ☐ | ☐ |
| Lyft | personal Gmail | ? | | SMS | ☐ | ☐ |
| *(add the rest)* | | | | | | |

**Decision rule for the "Keep or Move?" column:**
- **Move** → anything you use for work.
- **Keep** → anything purely personal (personal banking, personal streaming, etc.). Leave it
  on the personal Gmail / Surface lane.

---

## 3. Export the data you want to keep (before you switch)

Some accounts start empty on the other side. Export now so you have an archive.

| What | Where | Notes |
|------|-------|-------|
| **Claude** chat history | claude.ai → Settings → **Privacy** → *Export data* | You'll get a file by email. **There is no import** into the new account — this is an archive only. |
| **ChatGPT** history | chatgpt.com → Settings → **Data controls** → *Export data* | Same deal — archive only. Also screenshot your **Custom Instructions** and list your **saved GPTs/Projects**, since those don't transfer. |
| **Personal Google data** | [takeout.google.com](https://takeout.google.com) | Select Mail, Drive, Photos, Contacts, Calendar. Use this for the file moves in [doc 03](03-data-and-files.md). |

> ⏳ Google Takeout and the Claude/ChatGPT exports are **prepared in the background and
> emailed to you** — they can take minutes to hours. Kick them off early.

---

## 4. Audit your two-factor authentication (the #1 lockout cause)

Before you touch the phone in [doc 04](04-phone-apple-id-2fa.md), know exactly what's
protecting each account:

1. Go through your inventory table and fill the **2FA type** column:
   - **SMS** → tied to your phone *number*. Safe as long as you keep the same SIM/number.
   - **Authenticator app** (Google Authenticator, Authy, etc.) → tied to the *app on your
     device*. **This is the dangerous one** — if you wipe or switch the phone without
     migrating it first, you lose the codes.
   - **None** → consider turning 2FA *on* for important accounts while you're here.
2. For every "authenticator app" row, you'll migrate it deliberately in doc 04 — **do not**
   reset your phone until then.

---

## ✅ Exit criteria for this page

- [ ] Password manager installed on the Surface, passwords imported, `.csv` deleted
- [ ] Account inventory table built and the "Keep or Move?" column filled in
- [ ] Claude, ChatGPT, and Google Takeout exports requested
- [ ] 2FA type recorded for every account; authenticator-app accounts flagged

When all four boxes are checked, move on to **[01 — Mac first-time setup](01-mac-first-time-setup.md)**.
