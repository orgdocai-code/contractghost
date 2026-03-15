# ContractGhost Manual Validation Queue

## Context
Created on 2026-03-14 during founder-loop run 21. Public hosting is still blocked, so validation needs a concrete execution queue that can be used the moment there is a human-available posting window or an external conversation surface.

## Goal
Turn the first 10 conversations plan into an exact hit list so the next run does not re-plan outreach.

## Priority conversation targets

### Bucket A — Reddit active pain threads
1. r/freelance — posts/comments mentioning scope creep, unpaid revisions, vague milestones, non-payment
2. r/graphic_design — posts/comments about client contracts, ownership, portfolio usage, revisions
3. r/copywriting — posts/comments about retainers, scope changes, late payment, rights clauses
4. r/webdev or r/forhire adjacent contract complaints — especially custom client work

### Bucket B — Social/manual replies
5. LinkedIn posts from freelancers mentioning contracts, bad clients, scope, revisions, invoicing disputes
6. X posts/replies mentioning freelance contracts, contract templates, payment disputes, IP ownership

### Bucket C — Warm/manual reachable people
7. Any reachable freelancer contact who has previously complained about bad clients, scope creep, or messy agreements

## Per-target logging checklist
For each attempted conversation, capture:
- date/time
- surface
- persona
- trigger pain topic
- outreach variant used
- response status: no reply / replied / interested / skeptical
- strongest signal captured
- next step

## Outreach variants

### Variant 1 — pain-first
"Saw your post about [scope creep/payment/IP/contracts]. I'm testing a tool that flags risky freelancer contract terms before you sign — things like vague scope, unlimited revisions, IP grabs, bad payment terms, and one-sided termination. If useful, I can send a quick screenshot-style demo. What clause has burned you the hardest?"

### Variant 2 — workaround-first
"Quick question: when you get a client contract, how do you sanity-check risky terms today? I'm testing something for freelancers that spots scope, payment, IP, and termination red flags before signing. Happy to send a quick screenshot demo if useful."

### Variant 3 — ChatGPT-objection path
"I'm testing a freelancer contract risk checker. Not legal advice — more like structured pre-sign red-flag detection plus negotiation prep. Curious: if you use ChatGPT for contracts today, what's still annoying or unreliable about that workflow?"

## Success trigger for next phase move
Any one of these should be logged as meaningful evidence:
- a concrete horror story
- a repeated trust objection
- a workaround worth replacing
- a beta request or willingness-to-pay comment

## Forced next move
Do not create more outreach-prep docs next run. Either:
1. log the first real external response into `contractghost/beta-intake-log.md`, or
2. if a public URL is live, use it in at least 2 outreach attempts immediately.
