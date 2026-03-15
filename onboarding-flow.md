# ContractGhost Onboarding Flow

## Goal
Draft the onboarding flow while waiting on external unblock.

## MVP user journey
1. User lands on page
2. User understands the promise in 5 seconds
3. User uploads a client contract
4. System extracts text and analyzes the contract
5. User receives a risk summary in plain English
6. User sees suggested pushback language
7. User is prompted to save/share/export notes before sending back to client

## Screen-by-screen

### 1. Landing page
User needs to understand:
- this is for freelancers and consultants
- it is for client-provided contracts before signing
- the outcome is risk visibility, not legal advice

Primary CTA:
- "Check my contract"

Secondary CTA during validation:
- "Join beta"

### 2. Upload screen
Inputs:
- Drag-and-drop PDF / DOCX
- Optional context field: "What kind of work is this for?"
- Optional region selector later (not MVP-critical)

Trust copy:
- "Built for freelancers"
- "Plain-English risk summary"
- "Not legal advice"

### 3. Analysis state
Show visible categories while processing:
- Scope & revisions
- Payment terms
- IP & ownership
- Termination
- Liability & indemnity
- Renewal / exclusivity / non-compete

This makes the system feel targeted, not generic.

### 4. Results screen
Top section:
- Contract risk score or simple label: Low / Medium / High
- 3 biggest risks first

Then grouped cards:
- Risky clause
- Why it matters in practice
- Suggested wording to negotiate back
- Severity tag

### 5. Action screen
Allow user to:
- Copy suggested negotiation language
- Export summary PDF
- Save as project note
- Ask a follow-up question about a clause

## MVP exclusions
- Full redline inside document
- Jurisdiction-specific legal guarantees
- Team collaboration
- Billing / contract sending workflow

## Key design principle
Organize results by freelancer outcomes, not lawyer taxonomy.
