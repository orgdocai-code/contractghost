// ContractGhost — Contract Analysis API
// Deploy to Vercel (free tier) or any Node.js host
// Uses Anthropic Claude to analyze freelance contracts

const Anthropic = require("@anthropic-ai/sdk");

const SYSTEM_PROMPT = `You are ContractGhost, a contract risk analyzer for freelancers and independent contractors.

Your job is to analyze contract text and identify risky clauses in plain English. You are NOT a lawyer and cannot give legal advice. You help freelancers understand what they're signing before they sign it.

For each risky clause you find, return:
1. The clause category (from the list below)
2. The exact excerpt or summary of the problematic text
3. Plain-English explanation of why it's risky (1-2 sentences, no jargon)
4. Suggested safer rewrite (concrete, usable language)
5. Risk level: LOW / MEDIUM / HIGH

Risk categories to check:
- SCOPE: Unlimited revisions, "satisfaction" clauses, vague deliverables
- PAYMENT: Net-60+ terms, "upon approval" payments, chargeback exposure, no late fees
- IP: Full IP transfer before payment, work-for-hire without fair consideration, license vs. ownership confusion
- TERMINATION: No kill fee, one-sided cancellation, work ownership after termination
- LIABILITY: Unlimited liability, one-sided indemnity, consequential damages exposure
- EXCLUSIVITY: Non-compete, non-solicitation, exclusivity without premium
- RENEWAL: Auto-renewal with short notice window, penalty for early exit
- DISPUTE: Unfavorable venue (client's city/country), mandatory arbitration, waived jury trial
- CONFIDENTIALITY: Asymmetric NDA, overly broad definition, restricts future work

After listing clauses, give:
- OVERALL_RISK: SAFE / CAUTION / HIGH_RISK
- SUMMARY: 1-2 sentence plain English verdict
- TOP_ACTION: The single most important thing to negotiate or fix

Respond ONLY in valid JSON. No markdown, no explanation outside the JSON.

JSON format:
{
  "overall_risk": "SAFE|CAUTION|HIGH_RISK",
  "summary": "string",
  "top_action": "string",
  "clause_count": number,
  "clauses": [
    {
      "category": "string",
      "excerpt": "string",
      "explanation": "string",
      "safer_rewrite": "string",
      "risk_level": "LOW|MEDIUM|HIGH"
    }
  ]
}`;

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { contract_text } = req.body;

  if (!contract_text || contract_text.trim().length < 50) {
    return res.status(400).json({ error: "Contract text too short or missing" });
  }

  if (contract_text.length > 50000) {
    return res
      .status(400)
      .json({ error: "Contract too long (50,000 character limit)" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API not configured" });
  }

  try {
    const client = new Anthropic({ apiKey });

    const message = await client.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Please analyze this freelance contract for risky clauses:\n\n${contract_text}`,
        },
      ],
    });

    const rawText = message.content[0].text;

    // Parse JSON response
    let analysis;
    try {
      analysis = JSON.parse(rawText);
    } catch {
      // Try to extract JSON if there's surrounding text
      const match = rawText.match(/\{[\s\S]*\}/);
      if (match) {
        analysis = JSON.parse(match[0]);
      } else {
        throw new Error("Invalid response format from AI");
      }
    }

    return res.status(200).json({
      success: true,
      analysis,
      disclaimer:
        "This is not legal advice. ContractGhost helps you understand contract language, not replace a lawyer. For high-stakes contracts, consult a licensed attorney.",
    });
  } catch (err) {
    console.error("Analysis error:", err.message);
    return res.status(500).json({
      error: "Analysis failed",
      message: err.message,
    });
  }
};
