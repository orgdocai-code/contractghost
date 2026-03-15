# ContractGhost 👻

**AI-powered contract risk analysis for freelancers.**

Stop signing contracts you don't fully understand. ContractGhost reads your freelance contract before you sign it — flagging risky clauses in plain English, explaining real-world consequences, and suggesting safer rewrite language you can actually send back to the client.

🔗 **Live site:** [contractghost.com](https://orgdocai-code.github.io/contractghost/)  
🔍 **Interactive demo:** [See a live analysis](https://orgdocai-code.github.io/contractghost/demo.html)

---

## The Problem

Freelancers get burned by client contracts every day:

- **Scope creep:** "Unlimited revisions until satisfied" clauses that turn a 2-week project into 4 months of free work
- **IP grabs:** Work-for-hire language that transfers ownership before you're paid
- **Payment traps:** Vague approval conditions, Net-60 terms, no late fees
- **Kill-fee theft:** Termination clauses that let clients fire you and keep your work
- **Auto-renewal:** Locked in for another year because you missed a 90-day notice window

Proper legal review costs $200–$500/hour. ContractGhost gives you pre-sign visibility for a fraction of that cost.

---

## What ContractGhost Does

1. **Upload or paste** your freelance contract
2. **AI analysis** identifies risky clauses across 9 risk categories
3. **Plain-English explanations** — no legal jargon, just what it means for you
4. **Safer rewrites** — concrete language you can propose in negotiations
5. **Risk summary** — Safe / Caution / High Risk verdict with the top thing to fix

### Risk Categories Analyzed
- Scope and revision limits
- Payment terms and approval conditions
- IP ownership and work-for-hire
- Termination and kill fees
- Liability and indemnity exposure
- Exclusivity and non-compete
- Auto-renewal traps
- Dispute venue / governing law
- Confidentiality asymmetry

---

## Tech Stack

- **Frontend:** Plain HTML/CSS/JS — no framework, fast, deployable anywhere
- **Backend API:** Node.js + Anthropic Claude (claude-3-haiku)
- **Deploy:** GitHub Pages (frontend) + Vercel (API)
- **No database:** Analysis is stateless by design

---

## API

The API is a single endpoint:

```
POST /api/analyze
Content-Type: application/json

{
  "contract_text": "paste your contract here..."
}
```

Response:
```json
{
  "success": true,
  "analysis": {
    "overall_risk": "HIGH_RISK",
    "summary": "This contract has 5 dangerous clauses...",
    "top_action": "Remove the unlimited revisions clause or cap at 3 rounds.",
    "clause_count": 5,
    "clauses": [
      {
        "category": "SCOPE",
        "excerpt": "Client may request unlimited revisions...",
        "explanation": "Client can request changes forever at no cost to them.",
        "safer_rewrite": "Client may request up to 3 rounds of revisions...",
        "risk_level": "HIGH"
      }
    ]
  },
  "disclaimer": "This is not legal advice..."
}
```

---

## Deploy Your Own

### Prerequisites
- Node.js 18+
- Anthropic API key ([get one here](https://console.anthropic.com))
- Vercel account (free tier works)

### 1. Clone
```bash
git clone https://github.com/orgdocai-code/contractghost.git
cd contractghost
```

### 2. Install API dependencies
```bash
cd api && npm install
```

### 3. Deploy API to Vercel
```bash
npm install -g vercel
vercel
# When prompted, add ANTHROPIC_API_KEY as an environment variable
```

### 4. Update frontend API URL
In `index.html` and `demo.html`, update the API endpoint to your Vercel deployment URL.

### 5. Deploy frontend to GitHub Pages
The frontend is already configured for GitHub Pages deployment. Enable it in your repo settings under Pages → Deploy from branch (main).

---

## Project Status

🚀 **In development** — landing page live, interactive demo live, API backend built.

Currently in early access / waitlist phase. Building toward first paying customers.

**Early access:** [Get notified](mailto:spazo@high-agency.com.au?subject=ContractGhost%20early%20access)

---

## Pain Signals This Is Based On

Built from real freelancer experiences:
- r/freelance, r/webdev, r/graphic_design contract horror threads
- IndieHackers discussions on freelancer protection
- AND.CO/Fiverr Workspace shutdown left thousands of freelancers without contract tools
- Freelancer forums consistently show contract disputes as top non-payment issue

---

## Roadmap

- [ ] PDF upload support
- [ ] Jurisdiction-aware analysis (AU, UK, US)
- [ ] Clause library (save negotiated clauses for reuse)
- [ ] Side-by-side comparison (original vs. suggested)
- [ ] Team accounts for agencies
- [ ] Slack/email alerts for contract review requests

---

## Not Legal Advice

ContractGhost helps you understand contract language. It is not a law firm, does not provide legal advice, and cannot replace a licensed attorney for high-stakes agreements. For complex contracts, consult a qualified lawyer.

---

Built by [High Agency](https://high-agency.com.au) 🤖
