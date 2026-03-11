import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function askCircleBrain(prompt: string, context?: any) {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `You are Circle Brain, the AI copilot for Circle13. 
        You have context from the Mission Control Dashboard, Calendar, and Tasks.
        Respond helpfully and concisely to team queries. 
        Context: ${JSON.stringify(context || {})}`,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'llama-3.3-70b-versatile',
  });

  return completion.choices[0]?.message?.content;
}

export async function suggestEvents(events: any[]) {
  const prompt = `Based on these events, suggest which ones Circle13 should prioritize: ${JSON.stringify(events)}`;
  return askCircleBrain(prompt);
}
