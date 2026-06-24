# 04 — Phone, Apple ID & 2FA

> This page does two things: (1) decides which Apple ID belongs on your **phone**, and
> (2) walks the **two-factor migration** that locks people out if they skip it. Do the 2FA
> section **before** you change anything on the phone.

---

## First, what an Apple ID actually controls

An Apple ID is the identity behind a *device's* personal data and purchases:

- **iCloud:** photos, contacts, notes, device backup, iCloud Drive.
- **App Store purchases & subscriptions:** apps and subscriptions are bought *by an Apple ID*
  and **cannot be transferred** to a different Apple ID.
- **Find My, Messages, FaceTime.**

The key fact: **switching the device's *primary* Apple ID signs you out of all the personal
iCloud data and forfeits access to apps you bought under the old one.**

---

## The decision for your iPhone

You mentioned wanting to put your **new work-domain Apple ID** on the phone so the Claude app
there is your business one. Here's the important correction:

> ✅ **You do NOT need a work Apple ID on the phone to use work accounts in apps.**
> The Apple ID and the account *inside* an app (Claude, Gmail, Slack) are **separate things.**
> You can keep your **personal Apple ID** as the phone's identity and still log into Claude,
> Gmail, etc. with your **work** credentials inside each app.

### ✅ Recommended: keep your personal Apple ID on the phone
- Your photos, contacts, purchased apps, and backups stay intact — **no data loss.**
- You simply open each work app and **sign in with your work account.**
- This is what almost everyone with one phone for both worlds does.

**Steps:** nothing to change on the Apple ID. Just:
1. Install **Claude** (App Store) → sign in with your **work** Claude account.
2. Install **Gmail** → add your **work** Workspace account (you can keep personal too).
3. Same for Slack/Teams/etc.
4. As you noted: on a free Claude tier you can also just use **claude.ai in Safari** on the
   phone if you don't want the app.

### ⚠️ Alternative: switch the phone fully to the work Apple ID
Only if you specifically want the *device* to be a work device. Consequences:
- Signs you **out of personal iCloud** (photos, contacts, backups) on that phone.
- You **lose access to apps/subscriptions** purchased under the personal Apple ID (you'd
  re-download/re-buy under the work ID).
- Generally **not recommended** for a phone you also use personally. Better to wait until you
  get a dedicated work phone, as you mentioned.

---

## 2FA / authenticator migration — do this carefully

This is the **#1 way people lock themselves out** during a device change. Your authenticator
*app* codes live on the device — change the device wrong and they're gone.

### If you store 2FA codes in your password manager (best case)
If you took the doc-00 suggestion and your TOTP codes are in 1Password/Bitwarden, there's
**nothing to migrate** — the codes follow your password-manager login to any device. Skip
ahead.

### If you use Google Authenticator
1. **Before** changing anything: open Google Authenticator on the old phone →
   **⋯ → Transfer accounts → Export** → it shows a QR code (or several).
2. On the new phone / new setup, install Google Authenticator → **Import** → scan.
3. Confirm a couple of codes work on the new device **before** removing the old.
4. *(Alternatively, turning on Google Authenticator cloud sync keeps codes tied to your Google
   account.)*

### If you use Authy
- Authy backs up to its own account (phone number + backup password). Install Authy on the new
  device, sign in, restore. Keep the old device until you confirm.

### SMS-based 2FA
- Tied to your **phone number**, not the device. As long as you keep the same SIM/number,
  you're fine. If you ever change numbers, update those accounts first.

### After migrating
- Walk your inventory table's **2FA** column and tick **"2FA moved?"** for each account.
- Re-confirm logins for the accounts you migrated in [doc 02](02-account-migration.md)
  (GitHub, Google, etc.).

---

## ✅ Exit criteria for this page

- [ ] Apple ID decision made (recommended: **personal Apple ID stays** on the phone)
- [ ] Authenticator app migrated **and verified** on the device you'll keep using
- [ ] Every "authenticator" account ticked **2FA moved?** in your table
- [ ] Work apps (Claude, Gmail, Slack) installed on the phone and signed in with **work**
      accounts

Next: **[05 — Claude Code & dev setup on the Mac](05-claude-code-on-mac.md)**.
