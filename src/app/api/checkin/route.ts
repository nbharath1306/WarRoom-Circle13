import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const { yesterday, today, blockers, user_id } = await request.json()

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Insert check-in
    const { data: checkIn, error } = await supabase
      .from('check_ins')
      .insert({ yesterday, today, blockers: blockers || 'NONE', user_id })
      .select()
      .single()

    if (error) throw error

    // Send Telegram notification if configured
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (token && chatId) {
      const hasBlockers = blockers && blockers.trim() !== '' && blockers.toUpperCase() !== 'NONE'
      const blockerAlert = hasBlockers ? `\n⚠️ *BLOCKER:* ${blockers}` : ''
      const message = `📡 *DAILY_SYNC_LOG*\n\n` +
        `✅ *YESTERDAY:* ${yesterday}\n` +
        `🎯 *TODAY:* ${today}${blockerAlert}\n\n` +
        `_Transmitted from Circle13 War Room_`

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      })
    }

    return NextResponse.json({ success: true, checkIn })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
