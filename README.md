# Surface → Mac

Four steps. Then stop.

The accounts are already on `@intersectionstrategies.co` — that work is done. The Mac is a
fresh install. What's left is smaller than it feels.

---

## Read this first

Seeing all 66 repos after logging into GitHub on the Mac does **not** mean they transferred.
Those repos live on GitHub's servers — the same list appears from any computer. The Mac's disk
holds none of them until `git clone` runs.

That's the good news: **the repos are safe, and always were.** But it also means that list says
nothing about whether something on the Surface was never pushed. That gap is the only real risk
left, and Step 1 closes it in about five minutes.

**Nothing on the Surface gets deleted until Step 1 passes.**

---

## 1. Find local-only code

The one step where waiting is actually risky. Run in **PowerShell** on the Surface:

```powershell
Get-ChildItem -Path $HOME -Filter .git -Recurse -Force -Directory -ErrorAction SilentlyContinue |
  ForEach-Object {
    $repo = $_.Parent.FullName
    Push-Location $repo
    $remote = git remote -v 2>$null
    $dirty  = git status --porcelain 2>$null
    $ahead  = git log --branches --not --remotes --oneline 2>$null
    if (-not $remote)      { "NO REMOTE   -> $repo" }
    elseif ($ahead)        { "UNPUSHED    -> $repo" }
    elseif ($dirty)        { "UNCOMMITTED -> $repo" }
    Pop-Location
  }
```

| Result | What it means | Do |
|---|---|---|
| `NO REMOTE` | Never on GitHub at all | Create a private repo, push it |
| `UNPUSHED` / `UNCOMMITTED` | Partly saved | Commit and push |
| **Nothing printed** | Every repo is fully on GitHub | Move on — that's the real answer |

## 2. Archive everything else — sort nothing

Step 1 covers code. Documents, PDFs, notes, downloads, screenshots have no GitHub equivalent.
Don't sort them. Don't decide what matters. Copy the whole user folder to an external drive:

```powershell
robocopy $HOME E:\Surface-Archive-2026-07 /E /XJ /R:1 /W:1 /TEE /LOG:E:\archive-log.txt
```

Some skipped system files is normal.

**This archive never touches the Mac.** It sits on the drive. The Mac only gets what you
deliberately pull down later. That's what makes the mess safe to walk away from — nothing you
decide today can turn out to be wrong.

> No external drive? Use [LocalSend](https://localsend.org) over Wi-Fi into one folder on the
> Mac called `Surface-Archive`. Same idea — one folder, still unsorted.

## 3. Point GitHub at the business email

The last account on personal Gmail.

1. [github.com/settings/emails](https://github.com/settings/emails) → add
   `james@intersectionstrategies.co` → verify from the work inbox
2. Set it **Primary**
3. Check **"Keep my email addresses private"**
4. On the Mac: `git config --global user.email "<noreply or work address>"`

Personal Gmail stays on as a backup address. Nothing breaks, no repos move, no re-auth.

## 4. Clone only what's live

Install what you actually use — not a full rebuild:

- Chrome, Keeper, Claude desktop, Cursor, Obsidian, Wispr Flow
- Homebrew → `git`, `node`, `gh`
- `npm i -g @anthropic-ai/claude-code`

Then clone **only the active repos** — not all 66:

```
claude-code-config    the-bench    carbon-lite    your-plus-one    surface-to-mac
```

`claude-code-config` already contains your CLAUDE.md, `.claude.json`, skills, and a restore
guide. Past-you left present-you a restore path — follow it.

The other ~60 stay on GitHub, untouched. **Leaving them uncloned is the point.** That's the
clean reset.

---

## Deliberately not doing

- **No drive cleanup.** Archived, not sorted.
- **No repo triage.** 66 repos stay as-is. Outdated is fine — nobody's looking for weeks.
- **No archiving or deleting old repos.** No benefit right now.
- **No Migration Assistant.** It would drag the mess onto a clean machine.
- **No browser-profile or app-settings migration.** Signing in fresh is faster than debugging.
- **No new accounts anywhere.**

---

## Done when

- [ ] Scan run; everything flagged is pushed (or nothing was flagged)
- [ ] `Surface-Archive-2026-07` exists on the drive and opens
- [ ] GitHub primary email is `@intersectionstrategies.co`
- [ ] Mac: Claude Code runs, config restored, ~5 repos cloned

**Then stop.** The Surface still boots — it's the backup now, not a machine left half-finished.
