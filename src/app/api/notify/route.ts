import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message, type = 'INFO' } = await request.json()
    
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      return NextResponse.json({ error: 'Telegram not configured' }, { status: 400 })
    }

    const emoji = type === 'EVENT' ? '📅' : type === 'TASK' ? '✅' : type === 'ALERT' ? '🚨' : '📡'
    const fullMessage = `${emoji} *WAR_ROOM_BROADCAST*\n\n${message}\n\n_Circle13 // ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}_`

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: fullMessage,
        parse_mode: 'Markdown',
      }),
    })

    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.description || 'Telegram API error')
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
