# ContractGhost Concierge Review Ops

## Context
Run 34 forced move. This is the manual service path that lets ContractGhost deliver value before public backend deployment or broad distribution is unlocked.

## Goal
Accept one-off manual contract review requests and return a structured ContractGhost-style response fast enough to create real user learning.

## Trigger
A person emails `spazo@high-agency.com.au` from the concierge page, a launch comment, or a direct reply asking for help with a contract before signing.

## Intake requirements
Capture these first:
- date/time received
- source (homepage / concierge page / Indie Hackers / HN / Reddit / Product Hunt / email forward)
- sender name or handle
- contract type
- deadline to sign
- whether they sent full contract or clause only
- main fear: scope / payment / IP / termination / liability / other

## Triage rules
### Green light — proceed manually
- routine freelance or contractor agreement
- clear pre-sign risk question
- sender mainly wants practical risk spotting and negotiation help

### Caution — reply with limits
- contract is long, unclear, or time-sensitive
- sender expects legal advice or certainty
- privacy concerns are high

### Red light — escalate out
- employment dispute, litigation, regulatory issue, equity, acquisition, major licensing, or anything clearly outside routine freelance work
- user explicitly needs legal advice or jurisdiction-specific formal guidance

## Target turnaround
- Aim: same day when practical
- If urgent and small (single clause), reply fast with the top risk and one suggested pushback
- If broad/long, acknowledge first and set expectation honestly

## Response structure
Use this shape:
1. Quick disclaimer: not legal advice
2. Overall risk level: low / medium / medium-high / high
3. Top 3-5 risks ranked
4. Why each risk matters in plain English
5. Suggested pushback / rewrite direction
6. What to negotiate before signing
7. When to escalate to a real lawyer

## Founder reply skeleton
Subject: Re: ContractGhost Concierge Review

Thanks — got it.

Quick note first: this is a practical pre-sign risk check, not legal advice.

## Overall risk
[Low / Medium / Medium-High / High]

## Top issues I would not ignore
1. [Issue]
   - Why it matters: [plain English]
   - Suggested pushback: [rewrite / negotiation point]
2. [Issue]
3. [Issue]

## Best next move before signing
[short practical summary]

If the contract is high-value, unusual, or heavily jurisdiction-specific, the right next step is still a qualified lawyer.

## Logging rule
After every concierge interaction:
1. Add it to `contractghost/beta-intake-log.md`
2. Add the signal to `memory/contractghost-feedback-tracker.md`
3. Note whether the person cared most about trust, price, speed, output quality, or legal-risk boundaries
4. If the same request pattern repeats 3+ times, update homepage/FAQ/offer before writing more broad content

## Offer evolution questions
Track these specifically:
- Did they want clause-only review or full-contract review?
- Did they care more about speed or confidence?
- Did they expect pay-per-use or monthly?
- Did they want negotiation wording or just explanation?
- Were they willing to redact and email the document?
