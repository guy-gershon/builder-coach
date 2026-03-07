# Builder Journey — Guy Gershon
> Paste this at the start of any new Claude conversation to restore full context.
> Last updated: March 7, 2026 (Session 1)

---

## Who I Am
- **Role:** Principal PMT at Amazon (current)
- **PM strengths:** Working backwards, user research, metrics, systems thinking, shipping complex products, aligning cross-functional teams
- **Goal:** Become a "power builder" — leverage AI to close the technical gap and build real software products independently
- **Mindset:** Smart, determined, disciplined. The generative AI revolution has collapsed the barrier to coding for people who think in systems and user needs. That's me.

---

## Technical Starting Point
- Complete beginner to code when this journey started
- No prior programming experience
- Fast learner, high discipline, senior professional mindset
- Already understands conceptually: frontend vs backend, APIs, how web apps work

---

## What I've Built & Shipped

### App 1: Builder Coach (v2)
- **What:** An AI-powered personal learning agent and dashboard
- **Stack:** Single-file HTML/CSS/JavaScript, Claude API (claude-sonnet-4-20250514)
- **Features:**
  - Dashboard with XP/skill tracking and milestone completion
  - Daily Brief — live web search powered, refreshable, 4 cards (AI / TOOLS / BUILD / PM→DEV)
  - Coach Chat — Claude-powered mentor with full context of my background
  - Curriculum tracker — 5-phase learning path
  - Projects log — build portfolio
  - localStorage persistence — XP, streak, milestones survive between sessions
  - Streak tracking — consecutive days active
  - XP toast notifications on milestone completion
- **Live at:** Deployed on Vercel
- **Repo:** github.com/guy-gershon/builder-coach
- **Files in repo:** index.html, CONTEXT.md

---

## Session 1 — What We Covered (March 7, 2026)

### Built
- Builder Coach v1 (initial app)
- Builder Coach v2 (persistent XP, Daily Brief with live web search, streak tracking, milestone XP awards)
- This CONTEXT.md file

### Concepts Learned
- **What Vercel is** — hosting platform, auto-deploys on every GitHub push. GitHub = file cabinet, Vercel = storefront.
- **What a GitHub repo is** — a folder with full version history of every change ever made
- **Main branch** — the live/production version of your code. Committing to main = site updates. Other branches = features in development (like staging vs prod)
- **Commits** — saving a version with a message. Like a changelog entry.
- **How the deploy loop works** — edit code → commit to GitHub → Vercel detects → rebuilds → live in ~30 seconds
- **localStorage** — persisting data in the browser without a backend
- **Claude Projects** — persistent workspaces in Claude.ai that maintain context across sessions
- **CONTEXT.md pattern** — keeping a file that captures journey state, pasteable into any new conversation

### Actions Taken
- Created GitHub account: **guy-gershon**
- Created repo: **builder-coach**
- Deployed to Vercel — first live app on the internet
- Uploaded Builder Coach v2 to GitHub
- Established end-of-session ritual: ask Claude to update CONTEXT.md, commit to GitHub

---

## Technical Skills Acquired

| Skill | Level | Notes |
|-------|-------|-------|
| HTML | Beginner | Understands structure and semantics |
| CSS | Just starting | Conceptual understanding |
| JavaScript | Just starting | No hands-on yet |
| Git/GitHub | Beginner | Repo created, files committed, branches understood |
| Deployment | Vercel ✓ | Successfully deployed, understands auto-deploy loop |
| APIs/REST | Conceptual | Understands what they are |
| React | Locked | Next major milestone |
| AI/LLMs | PM edge | Strong conceptual grasp, using Claude API |

---

## Curriculum Progress

### ✅ Phase 1: How the Web Works (IN PROGRESS)
- [x] Frontend vs Backend
- [x] HTML basics
- [ ] CSS — currently here
- [ ] JavaScript
- [ ] How browsers render pages

### ⏳ Phase 2: Developer Tools & Git (UP NEXT)
- [ ] Terminal basics
- [ ] Git commands
- [ ] VS Code setup

### 🔒 Phase 3: React & Shipping
### 🔒 Phase 4: APIs, Data & Auth
### 🔒 Phase 5: AI-Powered Products

---

## Milestones

### Completed
- [x] Set up Builder Coach (+50 XP)
- [x] Described first app idea (+70 XP)
- [x] Created GitHub repo: guy-gershon (+100 XP)
- [x] Deployed first app to Vercel (+200 XP)

### Remaining
- [ ] Write first CSS (+80 XP)
- [ ] Write first JavaScript (+100 XP)
- [ ] Build a React component (+150 XP)
- [ ] Call an external API (+200 XP)
- [ ] Ship something real users use (+500 XP)

**Current XP:** 420 / 500 (Level 1 — Curious PM)
**Streak:** 1 day

---

## Setup & Tools

| Tool | Status | Notes |
|------|--------|-------|
| GitHub | ✅ Active | username: guy-gershon |
| Vercel | ✅ Active | Connected to GitHub, auto-deploy on |
| Claude.ai | ✅ Active | Projects to be set up next session |
| VS Code | ⏳ Not yet | Coming in Phase 2 |
| Terminal | ⏳ Not yet | Coming in Phase 2 |

---

## Workflow & Rituals
- **End of every session:** Ask Claude "Update my CONTEXT.md" → paste into GitHub → commit
- **Commit message format:** `feat: description` for new features, `fix: description` for bug fixes
- **Deploy check:** Vercel dashboard → project → deployments → "Ready" = live

---

## Teaching Preferences
- Always connect coding concepts to PM equivalents
- Skip theory, bias toward building
- Peer-level respect — senior professional, not a student
- Show working code snippets with brief explanations
- Flag new AI tools and techniques proactively
- Dense signal, no padding

---

## Next Session Priorities
1. Set up Claude Project "Builder Journey" and upload this file
2. Continue with CSS — write first real CSS
3. Start thinking about App #2 idea

---

## Coach Instructions
You are "Builder Coach" — Guy's personal technical mentor. Use this context to pick up exactly where we left off. Reference his PM background when explaining technical concepts. He's moving fast, ships things, and wants to keep the momentum. Don't over-explain. Keep building.
