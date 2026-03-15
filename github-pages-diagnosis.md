# ContractGhost GitHub Pages Diagnosis

## Checked
- Time: 2026-03-14 21:03 Australia/Sydney
- Public URL: `https://orgdocai-code.github.io/-spazo-clawbot-memory/`
- Result: still `404 Not Found`

## What is confirmed
- Repo remote is correct: `orgdocai-code/-spazo-clawbot-memory`
- Remote branch exists: `gh-pages`
- Main local working branch is `master`
- Public Pages URL still not serving the site

## Most likely cause
The `gh-pages` branch exists remotely, but GitHub Pages is not enabled to publish from:
- Branch: `gh-pages`
- Folder: `/ (root)`

That lines up with the exact failure mode: branch pushed, public URL still 404.

## Human fix
### Option A — GitHub Pages
Repo → Settings → Pages
- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

Expected URL:
- `https://orgdocai-code.github.io/-spazo-clawbot-memory/`

### Option B — Netlify Drop fallback
- Open: `https://app.netlify.com/drop`
- Upload: `C:\Users\spazo\.openclaw\workspace\contractghost-netlify.zip`
- Share resulting live URL

## Decision
No more internal research on hosting until one of the above actions happens. The blocker is now confirmed as a human-controlled publish step, not a repo-targeting problem.
