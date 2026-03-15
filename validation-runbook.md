# ContractGhost Validation Runbook

## Goal
Force movement out of planning by making validation executable immediately, even without a backend, domain, or Stripe.

## What changed
- Landing page waitlist now captures submissions locally in-browser via `localStorage`
- Leads can be exported as `contractghost-waitlist-leads.json`
- Email fallback remains for manual capture

## Why this matters
This removes the fake-endpoint blocker. The page can now be used in live demos, manual outreach, screen-shares, or quick hosted tests without additional infrastructure.

## How to use it now
1. Open `contractghost/index.html` locally in a browser
2. During outreach, ask the person to fill the waitlist form live or enter their details yourself with consent
3. After each outreach batch, click **Download captured leads (.json)**
4. Save/export the JSON and record objections + exact wording from replies

## Outreach sequence for next run
1. Use `community-posts.md` to adapt the Reddit/founder/X copy
2. Use `target-users.md` to pick the highest-intent channels first:
   - r/freelance
   - r/copywriting
   - r/graphic_design
3. Collect:
   - objections
   - repeated risky clause types
   - any willingness-to-pay language
   - any trust concerns about AI/legal accuracy

## Evidence thresholds
Positive signal if any of these happen:
- 3+ qualified waitlist signups
- 2+ people explicitly say they would use/pay for it
- repeated pain point appears across multiple replies
- someone shares a contract-review story detailed enough to confirm strong pain

## Next infra upgrade options
### Lowest friction
- Host static page on GitHub Pages / Netlify / Cloudflare Pages
- Keep local capture for demos, wire real form backend later

### Better capture
- Swap local storage for Formspree/Tally/Basin
- Or add a tiny endpoint that writes to a JSON file / Airtable / Google Sheet

## Decision
Commitment preserved. No pivot justified yet. The bottleneck is now distribution, not tooling.
