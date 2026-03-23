# ContractGhost Results Ledger Ops

## Context
This file defines how to turn the first real manual review into public proof without inventing traction.

## Goal
Update `results-ledger.html` within minutes of the first real useful review so the site gains honest proof instead of another internal note.

## Trigger
A manual review request reaches `SENT` status and there is at least one publishable learning or outcome.

## Publish rules
Only publish if all are true:
- user identity can be anonymized
- no private contract text is exposed beyond safe summary
- the lesson is concrete, not vague praise
- the entry teaches trust, pricing, speed, or workflow

## Entry format
For each public result, capture:
- date
- anonymized contract type
- main concern
- top risks surfaced
- negotiation direction suggested
- outcome if known
- product learning

## Update flow
1. Log request in `manual-review-request-tracker.md`
2. Capture qualitative details in `beta-intake-log.md`
3. If publishable, add one entry block to `results-ledger.html`
4. Increment visible stats only when justified
5. Mirror key lesson into workspace memory if it changes positioning

## Guardrails
- No fake testimonials
- No invented before/after claims
- No vanity metrics
- Zero stays zero until a real review exists
- If outcome is unknown, say unknown
