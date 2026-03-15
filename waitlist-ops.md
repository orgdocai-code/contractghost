# ContractGhost Waitlist Ops

## Current State
The landing page is now wired in a production-shaped way for a static form backend, but it still needs one tiny operational hook to start delivering submissions:

- Replace `PLACEHOLDER_FORM_ID` in `index.html` with a real Formspree form ID
- Until then, the local in-browser capture fallback still works for demos/manual outreach
- Backup/manual path exists via `mailto:contractghostbeta@proton.me`

## Why this move
Phase 3 requires a fake door that captures real demand, not just a button that says thanks.
This update turns the page into something that can collect emails with near-zero engineering.

## What Clawbot decided
- Use a static-form pattern first instead of building auth/backend too early
- Keep friction low: email + role + pain point
- Optimize for validation speed over infrastructure purity

## What still needs human input
None required to continue validation work.
Optional later:
- Better inbox/domain for trust
- Real Formspree account + form ID
- Dedicated backend if submissions volume justifies it
- Real custom domain

## Next moves
1. Plug in a real form endpoint
2. Host/share the landing page
3. Post the drafted validation copy into 2-3 communities
4. Record objections and interest level from replies
