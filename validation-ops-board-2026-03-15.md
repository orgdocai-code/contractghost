# ContractGhost Validation Ops Board — 2026-03-15

## Purpose
Collapse the next validation step into the smallest possible executable surface.
No more page tweaks. No more generic research. Next action is send -> log -> decide.

Exception already discovered: if a real capture-path bug blocks evidence logging, fix the bug once and then resume send -> log -> decide.

## Live asset
- Landing page: https://contractghost-production.up.railway.app
- Fast feedback path: https://contractghost-production.up.railway.app/#survey
- Standard waitlist path: https://contractghost-production.up.railway.app/#waitlist

## Primary objective
Capture the first real external validation signal in one of these forms:
1. Pain story
2. Objection
3. Current workaround
4. Willingness-to-pay signal
5. Waitlist signup

## Three-message batch

### 1) Scope creep angle
Question-first opener:
> What's the one line you wish had been in the contract before the scope started expanding?

Follow-up if conversation opens:
> I'm testing ContractGhost for freelancers — it flags risky contract terms before signing, especially scope traps, payment terms, IP grabs, and one-sided termination language. Curious whether a tool like this would've helped in your case: https://contractghost-production.up.railway.app/#survey

### 2) Payment protection angle
Question-first opener:
> When a client didn't pay or paid late, was the real issue the client — or that the payment terms gave you nothing to enforce?

Follow-up if conversation opens:
> I'm testing a pre-sign contract checker for freelancers. It explains risky clauses in plain English and helps spot weak payment language before the job starts: https://contractghost-production.up.railway.app/#survey

### 3) IP / proposal misuse angle
Question-first opener:
> If you'd seen the ownership/payment clause more clearly before signing, would you have changed anything?

Follow-up if conversation opens:
> That's exactly the problem I'm testing around. ContractGhost is meant to flag IP transfer, revision scope, payment, termination, and liability traps before signing: https://contractghost-production.up.railway.app/#survey

## Logging rule
After each real conversation attempt, log one line outcome into `contractghost/beta-intake-log.md`.
Even a no-response batch should be logged as channel/timing evidence if it was genuinely attempted.

## Decision rule after first signals
- If people describe pain but won't trust AI -> build stronger proof/demo
- If people trust it but won't pay monthly -> test pay-per-review framing
- If no one engages across multiple real attempts -> reassess channel or urgency, not just copy
- If one pain angle clearly outperforms -> narrow positioning around that pain

## Hard anti-loop rule
The next founder run should NOT edit the landing page again unless a real human signal explicitly points to a specific page problem.

## Definition of progress
Progress on the next run is any one of:
- first real reply logged
- first explicit objection logged
- first real workaround logged
- first WTP signal logged
- first durable waitlist submission captured

Anything else is prep, not progress.
