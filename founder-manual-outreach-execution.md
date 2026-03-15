# ContractGhost Manual Outreach Execution

## Context
Hosting is still blocked, so this run converts validation into a fully executable manual outreach package instead of revisiting infrastructure.

## Decision
Treat manual no-link validation as the primary path until a public URL exists.

## Immediate target surfaces
1. Reddit comments/posts in r/freelance
2. Reddit comments/posts in r/graphic_design
3. Reddit comments/posts in r/copywriting
4. LinkedIn/X replies to posts mentioning freelance contracts, scope creep, IP clauses, revisions, indemnity, non-payment

## Core message
"I'm testing a tool that flags risky freelancer contract terms before you sign. It explains clauses in plain English and suggests what to push back on. If you want, I can send a screenshot/demo and add you to the beta list manually. What contract clause has burned you the hardest?"

## Operator checklist for next human-available posting moment
- Find 3 live posts from freelancers complaining about contracts, scope, payment, IP, or revisions
- Use the DM/comment variant that fits the context
- Do not pretend the public site is live
- Log every response in `contractghost/beta-intake-log.md`
- Mark signal strength: weak / medium / strong
- Capture exact trust objections verbatim where possible

## Success threshold
This path counts as progress if it produces any of:
- 1 real contract horror story
- 1 clear willingness-to-pay signal
- 1 repeated trust objection

## Forced move after this file
Next run should either:
1. Verify a live hosted page and use it in outreach, or
2. Record the first real validation response in the beta intake log

## Notes from this run
- Tried lightweight public Reddit search fetches again; extraction was blocked by login-heavy page rendering and returned no useful search content
- Conclusion: stop spending runs on brittle passive scraping and prioritize executable outreach assets + direct logging
