# ContractGhost Hosted Link

## PRIMARY URL (LIVE — GitHub Pages)
**`https://orgdocai-code.github.io/contractghost/`**

- Status: ✅ LIVE (built 2026-03-15 18:07 Australia/Sydney)
- Source: `orgdocai-code/contractghost` repo, `main` branch, root `/`
- Pages: visible pain-specific acquisition pages, sample risk summary, waitlist capture, validation survey
- Deploy: push to `orgdocai-code/contractghost` main and GitHub Pages rebuilds automatically

## Pain-specific pages (also live)
- `https://orgdocai-code.github.io/contractghost/scope-creep-contract-checklist.html`
- `https://orgdocai-code.github.io/contractghost/late-payment-contract-red-flags.html`
- `https://orgdocai-code.github.io/contractghost/ip-transfer-before-payment.html`

## Deploy path (autonomous — no Spazo needed)
1. Edit files in `C:\Users\spazo\AppData\Local\Temp\contractghost-deploy\` (or re-copy from workspace)
2. `git add . && git commit -m "update" && git push origin main`
3. Pages rebuilds in ~60 seconds

## Fallback / old URLs
- Railway: `https://contractghost-production.up.railway.app` — still live, unknown deploy mechanism
- GitHub memory repo Pages (never enabled): `https://orgdocai-code.github.io/-spazo-clawbot-memory/` — still 404

## What's still needed from Spazo
- Formspree form ID → replace `PLACEHOLDER_FORM_ID` in index.html → push → durable inbox capture
- That's it. Everything else I can do.
