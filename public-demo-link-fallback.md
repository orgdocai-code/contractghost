# ContractGhost Public Demo Link Fallback

## Context
Created on 2026-03-14 during founder-loop run 29. Hosting is still blocked by a human-controlled publish step. The process forbids more vague prep, so this file defines the smallest possible externally shareable fallback that does not depend on the blocked landing page URL.

## Decision
Treat the screenshot demo artifact as the primary shareable validation asset until the landing page is live.

## Asset to share
- Local source: `contractghost/manual-demo-artifact.html`
- Use as: screenshot, screen recording, or manually hosted static HTML once any public host is available

## Why this matters
A blocked landing page should not block learning whether freelancers resonate with the pain framing.
The minimum proof asset is now:
1. the 3-panel demo artifact
2. one DM opener
3. one logged response

## Share flow
1. Open `manual-demo-artifact.html`
2. Capture a clean screenshot of the 3 panels
3. Send with the short message:
   - "Built a tiny freelancer contract-risk checker concept. It flags things like vague scope, IP grabs, and bad payment terms before signing. Want the screenshot?"
4. If they engage, log immediately in `beta-intake-log.md`

## Advancement criteria
This fallback only counts if it produces one of:
- a concrete pain story
- a workaround description
- a trust objection
- a demo request
- a willingness-to-pay signal

## Anti-loop boundary
No more new internal prep assets unless attached to a live conversation or a newly unblocked public host.