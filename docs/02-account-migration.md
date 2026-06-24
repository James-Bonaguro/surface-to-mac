# 02 — Account migration

> The core of the move. For each service: **what transfers**, **what doesn't**, and the
> **exact steps**. Do these from the Mac (in your **Work** browser profile), after finishing
> [doc 00](00-pre-migration-safety-net.md).

**The big sort:** services fall into two buckets.

- 🟢 **Email-swap (easy):** keep the account, change its email to your work domain, keep all
  data. → GitHub, Lyft, and most consumer apps.
- 🔴 **Start-fresh (no merge):** the account can't change identity or import history; you make
  a new one and archive the old. → **Claude, ChatGPT.**

---

## 🔴 Claude

**What transfers:** nothing automatic. **What doesn't:** chat history, Projects, custom
styles, and memory. Your new work account starts **empty**. (You exported an archive in
doc 00 — that's for your reference only; there is no import.)

**Steps:**
1. In your **Work** Chrome profile, go to [claude.ai](https://claude.ai) → **Sign up**.
2. Choose **"Continue with Google"** and pick your **work Workspace** account. (Using Google
   SSO ties the account to your work identity cleanly — no separate password.)
3. Subscribe to the plan you want (see callout below).
4. Install the **Claude desktop app** ([claude.ai/download](https://claude.ai/download)) and
   sign in with the work account.
5. Reconnect your **integrations/MCP** (Gmail, Drive, Calendar, GitHub) to the **work**
   accounts — this is what lets Claude act on your work data. Details in
   [doc 05](05-claude-code-on-mac.md).
6. On the **Surface**, leave your personal Claude signed in on the **Free** plan.

> **Which plan? (your "$200 for business" question)**
> - **Claude Max — individual, ~$200/mo (20×):** highest personal usage, one account,
>   simplest. This is almost certainly what "$200" refers to. ✅ Recommended if it's just you.
> - **Claude Team / Enterprise — per seat (~$25–30/seat/mo):** a managed *business* workspace
>   with an admin console, central billing, and your data not used for training by default.
>   Choose this **only** if it's a company account with teammates or you need admin controls.
> - You don't have to decide forever — you can start on Max and move to Team later.

---

## 🔴 ChatGPT

**What transfers:** nothing automatic. **What doesn't:** chat history, **Custom
Instructions**, **Memory**, saved **GPTs**, and **Projects**. New account starts empty.

**Before you switch:** open your current ChatGPT → Settings → **Personalization** and copy
your *Custom Instructions* and *Memory* into a note so you can recreate them. List any custom
**GPTs/Projects** you rely on.

**Steps:**
1. Work Chrome profile → [chatgpt.com](https://chatgpt.com) → **Sign up** → **Continue with
   Google** → work account.
2. Subscribe (**Plus $20/mo** is the common individual tier; **Pro $200/mo** only if you need
   the heaviest models/limits; **Team ~$25–30/seat** for a business workspace).
3. Install the **ChatGPT desktop app**
   ([openai.com/chatgpt/desktop](https://openai.com/chatgpt/desktop)); sign in with work.
4. Recreate your Custom Instructions / Memory from your notes.
5. Keep personal ChatGPT on the Surface (Free or existing plan).

---

## 🟢 Google Workspace / Gmail — the big one

**Goal:** live primarily out of your **work domain** so that Claude's Google integrations
(Gmail/Drive/Calendar) operate on your *work* data, and so your day-to-day is one identity.

You're not "migrating an account" here so much as **moving the contents** of your personal
Google into the work Workspace, then living in the work one.

### Email + contacts
- **Easiest (no admin needed):** in your **work** Gmail → ⚙️ **See all settings** →
  **Accounts and Import** → **Import mail and contacts** → enter your personal Gmail. Google
  pulls your old mail and contacts over (via POP) over the next hours/days.
- **If you're the Workspace admin:** the [Admin console](https://admin.google.com) →
  **Data Migration** service does the same thing more robustly for mail/contacts/calendar.

### Calendar
- Personal Google Calendar → Settings → **Import & Export** → **Export** (gives a `.ics`
  zip) → in **work** Calendar, **Import** that file.
- Or simply **share** your personal calendar with your work account if you just want to see
  it, not move it.

### Drive (ownership can't cross unrelated accounts directly)
Pick based on volume:
- **A few files:** open them, **Share** to your work account, then in work Drive **Make a
  copy** (the copy is owned by work).
- **Lots of files:** use the **Google Takeout** archive from doc 00 and **re-upload** to work
  Drive (drag the folders into [drive.google.com](https://drive.google.com) in your work
  profile).
- **Whole-account move:** Google's *Transfer your content* tool only works between accounts in
  the same org, so for personal→work treat it as copy/re-upload. (Full details in
  [doc 03](03-data-and-files.md).)

### Photos
- **Google Photos → partner sharing** can mirror your library to the work account, or use the
  **Takeout** export and re-upload. (Personal photos may be fine to simply *leave* on the
  personal account — decide per the two-identity model.)

### Transition tactic (so nothing falls through the cracks)
- In **personal** Gmail → Settings → **Forwarding** → forward to your **work** address for a
  grace period (a few months). That way, as you update each service's email (below), anything
  you miss still reaches you.
- As you go, update the email on each important service to your **work** address.

---

## 🟢 GitHub — you keep the account (you were right)

**What transfers:** everything — it's the same account. You're just changing which email it
uses. **What doesn't:** nothing; repos, stars, history all stay.

**Steps:**
1. [github.com](https://github.com) → **Settings → Emails** → **Add email address** → your
   work email → **verify** (check work inbox).
2. Set the work email as **Primary**, and as your **commit email** (or enable *"Keep my email
   addresses private"* to use the `…@users.noreply.github.com` form).
3. On the Mac, point git at the work email:
   ```bash
   git config --global user.email "you@workdomain.com"
   git config --global user.name "Your Name"
   ```
4. New machine = new keys: generate a fresh **SSH key** and add it to GitHub, and re-set
   commit **signing** if you use it. Full steps in [doc 05](05-claude-code-on-mac.md).
5. Re-enroll GitHub **2FA** on your phone during [doc 04](04-phone-apple-id-2fa.md).

> If your work has a GitHub **Organization**, ask the org admin to invite your account; you
> don't need a second GitHub login.

---

## 🟢 Everything else (Lyft, and the long tail)

Good news: unlike Claude/ChatGPT, **the vast majority of consumer services let you change the
account's email and keep all your data and history.** Lyft, Uber, Amazon, etc. — ride history
and orders stay put.

**The repeatable pattern — do this for each row in your inventory table:**
1. Log in with the current (personal) credentials.
2. Account/Profile **Settings** → change the **email** to your work address.
3. **Verify** the new email (check work inbox).
4. **Update the login** in your password manager (move it to the **Work** folder).
5. **Migrate its 2FA** to your phone if it has any ([doc 04](04-phone-apple-id-2fa.md)).
6. Mark **Done** in your table.

**Skip the ones you marked "Keep"** — leave purely personal services on the personal Gmail /
Surface lane.

> 🤖 Want help working the list? Ask me and I can pull your inventory from Gmail and we can go
> service-by-service together.

---

## ✅ Exit criteria for this page

- [ ] New **Claude** work account created, subscribed, desktop app signed in
- [ ] New **ChatGPT** work account created, subscribed, instructions recreated
- [ ] **Google**: mail/contacts/calendar imported to work; Drive/Photos handled; forwarding on
- [ ] **GitHub**: work email added, verified, set primary + commit email
- [ ] Long-tail services swapped to work email, row by row
- [ ] Every migrated login updated in the password manager

Next: **[03 — Data & files](03-data-and-files.md)**.
