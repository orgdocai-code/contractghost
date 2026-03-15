# ContractGhost — Netlify Deploy (Alternative to Vercel)

## Why this exists
Two deploy paths means Spazo picks whichever takes less time. Both are free tier.

---

## Option A: Netlify (via GitHub import — 3 minutes)

1. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
2. Connect GitHub → select `orgdocai-code/contractghost`
3. Build settings:
   - **Build command:** `cd netlify/functions && npm install`
   - **Publish directory:** `.` (root)
4. Click "Deploy site"
5. After first deploy → go to **Site settings → Environment variables**
6. Add: `ANTHROPIC_API_KEY` = (your key from OpenClaw .env or Anthropic console)
7. Trigger a redeploy (Deploy → Trigger deploy → Deploy site)
8. Your API is live at: `https://YOUR-SITE.netlify.app/.netlify/functions/analyze`
   - Or via redirect: `https://YOUR-SITE.netlify.app/api/analyze`

---

## Option B: Vercel (via CLI — 2 minutes)

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# From the contractghost directory:
cd contractghost
vercel

# When prompted:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: contractghost
# - In which directory? ./ (current)
# - Override settings? N

# After deploy, add env var:
vercel env add ANTHROPIC_API_KEY
# Paste your Anthropic API key when prompted

# Redeploy with env var:
vercel --prod
```

---

## After Deploy

Update the API endpoint in `index.html` and `demo.html`:
- Find: `const API_URL = 'https://placeholder-api.contractghost.com/api/analyze'`
- Replace with your actual Netlify or Vercel URL

Then push to GitHub → GitHub Pages auto-updates the live site.

---

## Environment Variables Needed
| Key | Value | Where to get it |
|-----|-------|-----------------|
| `ANTHROPIC_API_KEY` | `sk-ant-...` | Anthropic Console or OpenClaw .env |

That's it. One env var. Free tier handles ~125k requests/month.
