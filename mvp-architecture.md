# ContractGhost MVP Architecture

> Written: 2026-03-19
> Purpose: turn ContractGhost from a research-heavy concept into a build-ready implementation plan for the ProposalKit Pro bundle.

## Goal
Ship the smallest useful ContractGhost that helps a freelancer paste a client contract, see the main risks, and leave with concrete negotiation language.

## Product Role Inside The Bundle
ContractGhost is not a standalone enterprise legal platform.
It is the defensive half of the ProposalKit workflow:

1. ProposalKit helps the freelancer scope and price before the deal
2. ContractGhost helps the freelancer avoid signing bad terms after the deal

That means the MVP should optimize for:
- speed
- clarity
- freelancer-specific risk flags
- low operational complexity

Not for:
- deep document management
- multi-user legal workflows
- enterprise clause libraries
- jurisdiction-wide coverage

## MVP User Promise
"Paste your client contract and get the 5-8 biggest freelancer risk points, explained in plain English, with safer pushback language in under a minute."

## Primary User
Freelance copywriters first.
Secondary later: other solo service freelancers with similar contract pain.

## Core MVP Flow
1. User opens ContractGhost from ProposalKit Pro or a standalone landing route.
2. User pastes contract text into a textarea.
3. User optionally selects jurisdiction context:
   - Australia
   - UK
   - US
   - Other / not sure
4. User optionally selects contract type:
   - client services agreement
   - SOW / proposal terms
   - subcontractor agreement
   - NDA + services combo
   - other
5. User submits for review.
6. API runs a structured LLM analysis.
7. User receives:
   - overall risk level
   - top flagged clauses
   - why each clause matters
   - suggested negotiation language
   - "safe to sign / ask questions / high caution" summary
8. User can copy all negotiation asks or copy each issue individually.

## Output Shape
### A. Header summary
- Overall rating: Low / Medium / High risk
- Contract type detected
- Best next action: sign / negotiate / get lawyer review
- Reminder: informational tool, not legal advice

### B. Clause cards
Each card includes:
- Risk category
- Severity: low / medium / high
- Problematic clause excerpt
- Plain-English explanation
- Why it matters for a freelancer
- Suggested pushback text
- Suggested fallback compromise

### C. Bottom summary
- Top 3 things to negotiate first
- Copyable "reply to client" block
- Escalation note: when to get a real lawyer

## MVP Feature Set
### Must have
- Paste-only input
- LLM analysis via API route
- Structured JSON output
- Risk categories tuned for freelancer contracts
- Copy buttons for negotiation language
- Clear disclaimer

### Nice to have if cheap
- Sample contract autofill
- URL param presets from ProposalKit
- "copy all asks" button
- Basic usage event logging

### Explicitly out of scope
- PDF upload in V1
- auth in V1
- saved history in V1
- Stripe gating in V1 if it slows launch
- side-by-side diff editor
- export to PDF/docx
- clause database / RAG pipeline

## Recommended Tech Stack
- Frontend: Next.js App Router
- UI: existing ProposalKit app styling or shared minimal component layer
- API: Next.js route handler
- Model: Anthropic first, OpenAI fallback
- Hosting: Vercel
- Analytics: lightweight event logging later
- Storage: none required for V1

## Suggested Routes
- `/contractghost` — main input page
- `/contractghost/result` — optional result page if using client-side state or tokenized payload
- `/api/contractghost/analyze` — POST route for contract analysis

## Suggested Request Schema
```json
{
  "contractText": "string",
  "jurisdiction": "au|uk|us|other",
  "contractType": "services|sow|subcontractor|nda_combo|other"
}
```

## Suggested Response Schema
```json
{
  "overallRisk": "low|medium|high",
  "contractTypeDetected": "string",
  "recommendedAction": "sign|negotiate|get_legal_review",
  "summary": "string",
  "issues": [
    {
      "category": "payment_terms",
      "severity": "high",
      "clauseExcerpt": "string",
      "explanation": "string",
      "freelancerImpact": "string",
      "pushbackText": "string",
      "fallbackCompromise": "string"
    }
  ],
  "topNegotiationPriorities": ["string"],
  "clientReplyDraft": "string",
  "disclaimer": "This is information, not legal advice."
}
```

## Core Risk Taxonomy For V1
Use a deliberately narrow taxonomy so output stays sharp:
- payment_terms
- revisions_scope
- ip_assignment
- termination_kill_fee
- indemnity_liability
- non_compete_exclusivity
- auto_renewal_notice
- confidentiality_asymmetry
- governing_law_dispute_venue

## Prompt Design Principles
### System behavior
The model should behave like a cautious freelancer contract reviewer, not a lawyer roleplay bot.

### Hard rules
- Never invent missing clauses
- Quote only from supplied text when citing excerpts
- Prefer fewer, stronger issues over exhaustive noise
- Keep explanations under 90 words each
- Use plain English
- Include a practical pushback suggestion, not abstract advice
- Escalate to lawyer review when indemnity, IP transfer, liability caps, or jurisdiction mismatch look severe

### Failure fallback
If model output fails JSON validation:
1. retry with stricter JSON-only prompt
2. fallback to a simpler issue list template
3. if still broken, return a human-readable structured fallback with 3 likely review zones and a warning

## UI Structure
### Main page layout
- Hero: "Check a freelance contract before you sign"
- Left column: input form
- Right column: trust bullets + sample issues + disclaimer

### Results layout
- Top summary band with risk color
- Issue cards sorted high → low severity
- Copyable negotiation section
- CTA: "Want this bundled with proposal generation? Upgrade to ProposalKit Pro"

## Integration With ProposalKit Pro
### Cross-sell logic
When a ProposalKit user finishes a proposal:
- show a lightweight nudge: "If the client sends their contract next, review it with ContractGhost"

When a ContractGhost user gets value:
- show a lightweight nudge: "Need cleaner scope and pricing before the contract stage? Use ProposalKit"

### Shared bundle narrative
"Protect the deal before it starts. Protect yourself before you sign."

## Build Order
### Run 1
- create page shell
- create textarea input
- create `/api/contractghost/analyze`
- return mocked structured JSON

### Run 2
- wire real Anthropic analysis
- add JSON validation + fallback
- render risk cards

### Run 3
- add copy buttons
- add sample contract preset
- tighten prompt against hallucinated legal claims

### Run 4
- integrate bundle upsell and polish
- add analytics hooks for submit / result / copy actions

## Success Criteria For MVP
The MVP is successful if a user can:
- paste a real contract
- get a readable result in under 60 seconds
- copy at least one useful negotiation message
- understand the top 3 risks without legal jargon

## Kill Criteria
Pause or kill if:
- outputs are too generic to beat ChatGPT prompts
- review latency is too slow for light usage
- users only want full legal certainty instead of practical risk triage
- the bundle dilutes ProposalKit instead of strengthening it

## Immediate Next Build Task
Implement a shared ContractGhost page inside `proposalkit/app/` or a parallel Next.js route using the existing ProposalKit app stack so the bundle can be shown as one coherent product instead of two disconnected artifacts.
