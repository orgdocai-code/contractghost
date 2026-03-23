# ContractGhost Distribution Strike Sheet — 2026-03-17

## Context
This file is the anti-loop execution layer for COMMITTED phase.
It exists because there are already enough strategy docs, target docs, and reply docs.
What was missing was one brutally simple sheet that says: send these exact messages first, use these exact assets, and log responses in these exact places.

## Rule
- Do not create another outreach planning doc before at least one real response is logged
- Use this sheet as the first distribution artifact in the next live posting window
- If a response arrives, log it immediately:
  - qualitative response -> `beta-intake-log.md`
  - real request -> `manual-review-request-tracker.md`

## Success definition
This sheet succeeds if it generates any of the following:
- one real pain story
- one trust objection in the user’s own words
- one pricing reaction
- one request for review
- one explicit statement that the product is not useful

## Default asset routing
- Lowest-friction first touch: `proof-card.html`
- Privacy objection: `three-clause-review.html`
- High intent: `concierge-review.html`
- Format proof: `sample-report.html`
- Honesty / traction question: `results-ledger.html`

## Strike sequence

### Strike 1 — Reddit / r/freelance / payment-term pain
**Use when:** thread mentions unpaid work, deposits, milestone issues, payment terms

**Message:**
Saw the payment-term comments here and that’s exactly the pattern I’m testing around. I built a freelancer-focused contract risk check that flags vague scope, weak payment language, IP grabs, and one-sided termination before signing. What contract term now feels like the clearest early red flag to you?

**If they engage:** send `proof-card.html`
**What to log:** clause named, current workaround, any trust reaction

---

### Strike 2 — Reddit / r/freelance / scope-creep pain
**Use when:** thread mentions endless revisions, vague deliverables, bad clients after kickoff

**Message:**
The scope-creep part is the one I keep seeing. I’m testing a freelancer contract review that tries to catch the trap before the job starts — especially vague scope and uncapped revisions. In your case, was the real failure vague wording, unlimited revisions, or no change-request language?

**If they engage:** send `proof-card.html`
**If they want specifics:** send `sample-report.html`
**What to log:** pain story, wording they use, whether they see this as worth paying for

---

### Strike 3 — Privacy-sensitive objection
**Use when:** someone says they wouldn’t upload a full contract or doesn’t trust AI with documents

**Message:**
Totally fair. I added a lighter path for exactly that — instead of sending the full contract, you can paste only the 1-3 clauses that worry you most and get a focused review on those: `three-clause-review.html`

**What to log:** privacy objection language, whether the lighter path reduces friction

---

### Strike 4 — Warm DM / direct interest
**Use when:** someone already showed curiosity or replied positively

**Message:**
Short version: ContractGhost flags the freelancer contract terms most likely to burn you later — scope, payment, IP, termination — then gives plain-English explanation plus safer wording to push back with. Quick proof card here: `proof-card.html`

If useful, I’m also testing a founder-led manual review path right now.

**If high intent:** send `concierge-review.html`
**What to log:** whether they want automation, manual review, or just educational content

---

### Strike 5 — Price test
**Use when:** rapport exists and they understand the use case

**Message:**
I’m testing the simplest possible paid version right now: $19 for one freelance contract review. Does that feel like an easy yes if the contract risk is real, or does trust matter more than price here?

**What to log:** exact price reaction, hesitation source, comparison to lawyer/ChatGPT/template

## Logging templates

### Copy into `beta-intake-log.md`
- Source:
- Persona:
- Pain story:
- Current workaround:
- Would use:
- Would pay:
- Main objection:
- Next step:

### Copy into `manual-review-request-tracker.md`
- Received:
- Channel:
- Contract type:
- Main concern:
- Urgency:
- Status:
- Price signal:
- Outcome / signal:

## Anti-loop note
This is the last internal distribution-compression artifact unless a real conversation exposes a missing objection, missing proof asset, or broken intake path.

## Next move
Use Strike 1 and Strike 2 first in the next available live window. If trust becomes the blocker, immediately route to Strike 3 instead of debating in abstract.