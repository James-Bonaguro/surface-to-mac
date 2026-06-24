# 03 — Data & files

> Getting your actual files from the Surface to the Mac, and finishing the Google Drive/Photos
> consolidation started in [doc 02](02-account-migration.md).

---

## Recommended: a mix — transfer select folders directly, keep accounts clean

The sweet spot (and the approach you picked): **directly copy over the specific work folders
you want**, but **don't bulk-import accounts, logins, or browser sessions** — those get set
up fresh and clean per docs 01–02. You move *files*, not *identity*. Pick whichever of the
three methods below is easiest; you can combine them.

### Option A — through the cloud (simplest, no cables)
1. On the **Surface**, put the work files you want into **Google Drive** (your work account)
   or OneDrive.
2. On the **Mac**, install the same cloud app (Google Drive for desktop:
   [google.com/drive/download](https://www.google.com/drive/download)) and sign in with
   **work**.
3. Files sync down. Done — and they stay backed up.

### Option B — external drive
1. Format a USB drive as **exFAT** (readable by both Windows and Mac).
2. Copy your work files onto it from the Surface.
3. Plug into the Mac, drag them into your **Documents** (or wherever you want).

### Option C — local network transfer
Both machines on the same Wi-Fi: enable **File Sharing** on the Mac
(System Settings → General → Sharing) and copy over the network, or use a tool like
[LocalSend](https://localsend.org) (free, cross-platform, dead simple).

---

## Optional: Migration Assistant for bulk files

If you have a *lot* of files and want them pulled across in one shot, Apple makes a Windows
tool for this. Fine to use as part of your mix for **files** — just still set up accounts and
logins fresh (docs 01–02) rather than relying on what it imports.

1. On the **Surface**, download **Windows Migration Assistant** from Apple (get the version
   matching your macOS) and run it.
2. On the **Mac**, open **Migration Assistant** (⌘Space → "Migration Assistant").
3. Both machines on the same network → follow the pairing prompts.
4. It transfers documents, photos, email, contacts, calendars, and browser bookmarks.

> ⚠️ Trade-off: this **drags your personal data onto the work machine**, which works against
> the clean separation. Only choose this if convenience beats separation for you. If you do,
> plan to delete the personal stuff afterward.

---

## Finishing the Google Drive / Photos consolidation

From [doc 02](02-account-migration.md), to get personal Drive content onto the work account:

- **Small number of files:** Share → work account → **Make a copy** in work Drive.
- **Bulk:** use the **Google Takeout** archive (requested in doc 00) and **re-upload** the
  folders to work Drive via [drive.google.com](https://drive.google.com) in your Work
  browser profile.
- **Photos:** Google Photos **partner sharing** to mirror to work, or Takeout → re-upload.
  Often simplest to **leave personal photos on the personal account**.

---

## Don't forget these easy-to-miss items

- [ ] **Browser bookmarks** — export from the Surface browser (Bookmarks → Export to HTML) and
      import into Chrome on the Mac (into the right profile).
- [ ] **Desktop + Downloads folders** — people forget these on the old machine.
- [ ] **Documents you keep only locally** (not in any cloud) — these exist only on the Surface
      until you move them.
- [ ] **Software license keys / app configs** — store keys in the password manager.
- [ ] **Anything in the Surface's "Downloads"** you actually need.

---

## ✅ Exit criteria for this page

- [ ] All needed **work files** are on the Mac (and backed up to work Drive)
- [ ] Personal Drive/Photos handled per your choice (moved or intentionally left)
- [ ] Bookmarks, Desktop, Downloads, and local-only docs accounted for
- [ ] Nothing work-critical remains *only* on the Surface

Next: **[04 — Phone, Apple ID & 2FA](04-phone-apple-id-2fa.md)**.
