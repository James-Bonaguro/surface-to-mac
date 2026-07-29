# GitHub Inventory

Every repo in `James-Bonaguro`, sorted. Written 2026-07-29 during the Surface to Mac move.

71 repos, 70 private, 1 public. Nothing here is lost. Nothing needs to move by hand.
If you want something later, clone it. That is the whole point of this file.

---

## READ THIS FIRST: how your two live sites actually deploy

Both sites deploy by running `vercel deploy --prod` from a local folder. **Pushing to
GitHub does not update either one.** There is no git connection on either Vercel project.

| Domain | Vercel project | Source repo |
|---|---|---|
| intersectionstrategies.co | `intersection-strategies-site` | `intersection-strategies-site` |
| portfolio.intersectionstrategies.co | `intersectionstrategies` | `henry-portfolio` |

On the Mac, to publish a change to either site:

```
git clone <repo>
cd <repo>
vercel link          # pick the matching project from the table above
vercel deploy --prod
```

**Outstanding:** the `og:url` and `canonical` fix pushed to `henry-portfolio` on 2026-07-29
is on GitHub but is **not live**. It goes live on the next manual deploy. Not urgent.

You do not need a new Vercel account. You have one account, 14 projects, all running in
the cloud. Your laptop is not part of the hosting path.

---

## Clone these on day one (3)

| Repo | Why |
|---|---|
| `claude-code-config` | Your Claude Code backup: CLAUDE.md, skills, marketplaces, restore guide. Exists because an update wiped your config once already. |
| `the-bench` | Claude Code toolkit: custom skills, subagent workflows, slash commands, MCP configs. |
| `surface-to-mac` | The migration checklist app you wrote on 7/28. Use it, then it's done. |

That's it. Everything else is clone-on-demand.

---

## Live right now (5)

| Repo | What it is |
|---|---|
| `intersection-strategies-site` | intersectionstrategies.co. Your business site. Static HTML, manual deploy. |
| `henry-portfolio` | portfolio.intersectionstrategies.co. Internal capability map of your work. Manual deploy. |
| `James-Bonaguro` | Your only public repo. GitHub profile page. |
| `Broker` | P&C brokerage intelligence briefing, live at james-bonaguro.github.io/Broker/briefing-hub.html. The Wave 1 outreach asset. |
| `apps-script-mobile-data-ingestion` | The voice/field-note ingestion PWA. Vercel, feeding a Google Doc. |

---

## Proof of work worth showing a client (6)

Your site has no proof of work on it. That's the real gap. These six are the ones that
hold up in front of someone deciding whether to pay you. Pick from here, not from the
full pile.

| Repo | Why it works as proof |
|---|---|
| `Broker` | A complete, structured work product for a specific industry. Shows the output, not the process. |
| `collision-intelligence` + `auto-collision-intelligence` | v1 internal briefing and v2 mobile field edition. Shows you can take one artifact and remake it for a different reader. Note: CCC adjacency, be careful where you market it. |
| `carbon-lite` | The core loop of a carbon accounting product, built in an evening. The speed is the story. |
| `ai-onboarding` | Private credit AI curriculum. Deployed, real product shape, six-week program. |
| `slack-agent-hackathon` | Grounded team Q&A with citations, no hallucinated answers. The most technically credible thing you have. |
| `hermes` | Telegram assistant on Claude with memory and reminders. Shows you ship working agents, not decks. |

Runners up if you need more: `signal-speak`, `chatgpt-operator-trainer`,
`gemini-prompt-optimizer`, `anthropic-reports`, `agentic-commerce`.

---

## Real work, not portfolio material (9)

Genuine effort, but either narrow, dated, or internal.

| Repo | What it is |
|---|---|
| `servpro-ai-workflow-pilot-brief` | Discovery brief from the Travis conversation. Closest thing you have to real client work. |
| `intersection-ops` | Opportunity pipeline. Has a full Clearsulting Claude-enablement workup: intake, scorecard, discovery plan, pilot offer, messages. |
| `ai-onboarding-insurance-brokers` | Insurance CE/AM curriculum, energy/renewables, Lenn.AI. |
| `ai-onboarding-physicians` | Physician AI setup guide. |
| `anthropic-reports` | Practitioner summaries of Anthropic research. |
| `agentic-commerce` | Sellability Audit Engine. Silver-tsunami GTM research. |
| `signal-speak` | Speaking practice app with AI scoring. Deployed. |
| `workout-log` | JB Lifts. iPhone-first workout logger. Personal, but a real shipped app. |
| `your-plus-one` | Full React/TS app, 106 files, wedding speech tool. Built and reviewed, never deployed. |

---

## Tools you built and stopped using (10)

| Repo | What it is |
|---|---|
| `chatgpt-operator-trainer` | Live Vercel app. Training tool for better AI outputs. |
| `gemini-prompt-optimizer` | Live Vercel app. Voice-dump to structured prompt. |
| `carbon-lite` | Next.js carbon accounting demo. |
| `hermes` | Telegram + Claude assistant. |
| `slack-agent-hackathon` | Slack agent, Gemini File Search, cited answers. |
| `market-radar` | Self-running snapshot-and-diff trend digest pipeline. |
| `niche-validator` | Niche validation tool for creators and consultants. |
| `portfolio-tools` | Same content as `niche-validator`. Duplicate. |
| `ai-coding-command-center` | PRD workflow app, rough intent to implementation prompt. |
| `notion-agent-hub` | Notion workspace automation via request files. Notion is dormant. |

---

## Archive: dead, superseded, or personal (38)

You do not need to look at these again. Listed so you know what they were.

**Old portfolio and resume iterations (7)** — all superseded by `henry-portfolio`
`portfolio`, `Career_Work`, `poc-sales-marketing-portfolio`, `OLD-internal-portfolio`,
`OLD-Resume--Intersection_Strategies`, `PL_Manager`, `James-Bonaguro.github.io`

**Old pitch and business plan iterations (5)** — superseded by the current site
`inter-strat-pitch`, `Intersection-strategies-business-plan`,
`landing-page-intersection-strategies`, `pitch` (notes from a Henry call), `IS-GTM`

**Abandoned idea validations (5)**
`digital-peace` (parenting market), `prediction_market_liquidity` (under construction,
never finished), `midwest-collision-strategy` (collision advisory GTM), `DFY-apps`
(bespoke tools infographic), `ai-auto` (one page)

**Automotive industry analysis (3)** — from the CCC and dealership years, dated
`cdk-digital-retail`, `cdk-cvr-dashboard`, `auto-saas`

**Inbox and ops one-offs (4)**
`gmail-filter-automation`, `outlook` (IMAP cleaner), `personal-ops` (weekly tracker),
`loop-engineering` (a stub pointing at another repo)

**Playbook stubs, nearly empty (3)**
`claude-code-playbook` (2 files, one misspelled), `codex-playbook` (working notes),
`claude-code-lab` (Claude Code learning project, decent but you know this now)

**Codex starter, duplicated (2)**
`codex-starter` is the real one. `codex-starter-kit` is a byte-identical copy I created
by mistake on 7/29. Delete the `-kit` one.

**Created 7/29 and not wanted (3)**
`rick-coaching`, `tull-manager`, `agency-agents`. I recovered these from stale git
bundles during the migration sweep. You said you don't need them. Delete.

**Personal (3)**
`Japan`, `Japan-Family`, `S-Corp`

**Client and misc (3)**
`panozzo-website` (small site, has notes-for-allen.html), `sdr-agent` (Google Maps lead
sourcing CLI, early MVP), `autoagent` (a clone of thirdlayer's repo, not your code),
`ai-business-ops-kit-ecomm` (Gumroad product experiment), `workout-prep` (empty),
`workout-notes` (workout tracker, superseded by `workout-log`)

---

## Cleanup, whenever you feel like it

Not urgent. Five repos of noise among 71 costs you nothing.

```
gh auth refresh -h github.com -s delete_repo
gh repo delete James-Bonaguro/codex-starter-kit --yes
gh repo delete James-Bonaguro/rick-coaching --yes
gh repo delete James-Bonaguro/tull-manager --yes
gh repo delete James-Bonaguro/agency-agents --yes
gh repo delete James-Bonaguro/workout-prep --yes
```

---

## What this list actually says

71 repos. One year. No revenue.

The problem was never that the work is bad. `Broker`, `carbon-lite`, `slack-agent-hackathon`,
and the collision work are genuinely good. The problem is that all of it is private, none of
it is on your website, and each one was built to completion and then left.

You do not need to organize any of this further. You need to put six of them on a page
where a prospect can see them.
