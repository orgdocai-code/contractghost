# ContractGhost Alternate Hosting Plan

## Why this exists
GitHub Pages is still returning 404 for the expected public URL. This document makes sure outreach is no longer blocked by one hosting path.

## Recommended fallback order
1. **Netlify Drop** — fastest manual fallback if Spazo needs a working public page immediately
2. **Cloudflare Pages** — good longer-term static hosting fallback
3. **GitHub Pages** — keep as primary if Spazo enables it, but stop treating it as the only path

---

## Option 1 — Netlify Drop (fastest human-assisted fallback)
**Use when:** Spazo wants the fastest public URL with almost no setup.

### Steps
1. Zip the `contractghost/` folder contents
2. Go to Netlify Drop
3. Drag in the zip or folder contents
4. Netlify gives a public URL instantly
5. Use that URL for outreach immediately

### What it solves
- No repo settings required
- No build config required
- No domain required

### Tradeoff
- Manual deploy unless later connected to a repo

---

## Option 2 — Cloudflare Pages
**Use when:** We want a cleaner static-host fallback with future domain support.

### Steps
1. Create a new Pages project
2. Connect the GitHub repo or upload the static site
3. Set build command to none / not required
4. Set output directory to the folder containing `index.html`
5. Deploy and use generated URL

### What it solves
- Stable static hosting
- Easy custom domain later
- Better long-term than manual drop

---

## Option 3 — Keep GitHub Pages if unblocked
If Spazo enables:
- repo: `orgdocai-code/-spazo-clawbot-memory`
- branch: `gh-pages`
- folder: `/ (root)`

Then use:
- https://orgdocai-code.github.io/-spazo-clawbot-memory/

---

## Outreach rule while blocked
Until a public URL is live:
- do not pretend the hosted page exists
- use pain-first posts/questions
- if someone wants access, offer a screenshot/demo or capture interest manually

---

## Minimum viable workaround without public hosting
If a real person shows interest before hosting is fixed:
1. Share screenshots of the landing page
2. Offer to run a manual beta list
3. Record name/contact/pain point manually
4. Count that as validation signal even before self-serve access exists

---

## Decision
If GitHub Pages is still blocked after repeated checks, the next meaningful move is alternate hosting, not another 404 recheck.
