# ContractGhost Formspree Setup

## Goal
Activate durable waitlist capture for the live ContractGhost landing page with the smallest possible ops step.

## Current status
The landing page is already shaped for Formspree, but the form ID is still a placeholder.

Current action URL pattern in `index.html`:
- `https://formspree.io/f/PLACEHOLDER_FORM_ID`

## Exact steps
1. Create or log into Formspree
2. Create a new form for ContractGhost waitlist capture
3. Copy the generated form endpoint ID (looks like `x...`)
4. Replace `PLACEHOLDER_FORM_ID` in `contractghost/index.html`
5. Redeploy Railway if needed
6. Submit one test lead
7. Confirm the submission lands in the inbox

## Fields already wired
- `product=ContractGhost`
- `source=landing-page`
- `_subject=ContractGhost waitlist signup`
- `email`
- `freelance_work`
- `pain_point`

## Why this is enough
This is not permanent infrastructure. It is just enough to:
- capture real waitlist demand
- preserve objection wording
- reduce fake-door fragility
- keep the founder loop focused on validation instead of backend work

## Fallback if Formspree is not used
Keep using:
- local browser capture export
- `mailto:contractghostbeta@proton.me`

## Definition of done
A real visitor can submit the live form and the lead arrives in a durable inbox without manual browser export.
