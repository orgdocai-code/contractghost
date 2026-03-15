# ContractGhost Validation Signal Capture — 2026-03-15

## What changed
Added a lightweight on-page 3-question validation intake to the live landing page.

## Why
The founder loop is at risk of internal-prep churn. Direct posting/outreach execution is not available from this environment, so the next best forced move is to turn the live page into a stronger signal collector instead of only a passive waitlist.

## New capture block
Section: `#survey`
Questions:
1. What kind of freelance work do you do?
2. What contract clause or client term has burned you hardest?
3. How do you handle contracts today?
4. Would you pay $19-$29/month for a pre-sign contract risk check? Why or why not?

## Why this matters
This captures the exact evidence the founder process asks for:
- pain story
- current workaround
- trust / substitution objection
- willingness-to-pay signal

## Constraints
- Still local-browser storage only in validation mode
- Not durable until Formspree or another backend is activated
- Better than another copy pass because it can convert live traffic into structured feedback

## Next move
1. Redeploy / confirm live page includes the survey block
2. Use the new survey link in outreach alongside the waitlist
3. When responses arrive, log them into `beta-intake-log.md` using `response-classifier.md`
4. Activate durable capture via Formspree when available
