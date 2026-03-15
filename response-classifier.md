# ContractGhost Response Classifier

## Purpose
Make founder-loop validation evidence consistent and easy to compare across runs.

## Response types
- **Pain story:** person describes a real contract problem they faced
- **Objection:** person explains why they would not trust or use the tool
- **WTP signal:** person states they would pay or implies current paid workaround
- **Weak interest:** generic "sounds cool" without real pain or next step
- **No signal:** no reply or irrelevant reply

## Objection buckets
- **Trust / legal risk** — "I wouldn't trust AI on contracts"
- **ChatGPT substitution** — "why not just use ChatGPT?"
- **Low frequency** — "I don't review contracts often enough"
- **Lawyer preference** — prefers a real lawyer for anything important
- **Template workaround** — uses own template / old contract / agency template
- **Price sensitivity** — $19-$29 feels too high
- **No pain right now** — currently not freelancing enough or not signing new contracts

## Strong signal examples
- "I got burned by unlimited revisions"
- "A client took ownership before final payment"
- "I'd pay for this if it caught termination/refund traps"
- "I use a lawyer now and it costs too much"

## Logging rule
Each human response should be tagged with one primary response type and one primary objection bucket where relevant.
