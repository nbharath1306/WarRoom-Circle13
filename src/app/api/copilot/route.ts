import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

const SYSTEM_PROMPT = `You are CIRCLE BRAIN — the AI copilot for Circle13's War Room command center.
You are a tactical expert embedded in a builder team's operations tool.
Your role:
- Help the team with event analysis, hackathon strategy, conflict detection
- Suggest which events to attend based on team skills and bandwidth
- Generate task breakdowns for hackathon projects
- Analyze daily check-ins for blockers and action items
- Be concise, tactical, and use military/ops terminology
- Format responses with markdown, short bullet points, and mission-style headers
Keep answers concise (max 5-6 sentences or bullet points). Be direct, no fluff.`

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 })
    }

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 512,
      stream: false,
    })

    const reply = completion.choices[0]?.message?.content || 'NO_SIGNAL'

    return NextResponse.json({ reply })
  } catch (error: any) {
    console.error('[COPILOT ERROR]', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
