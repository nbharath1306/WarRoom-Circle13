import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY // VERY IMPORTANT: We use the service key to bypass RLS for inserting from our own secure backend.

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({ error: 'Missing Supabase credentials in server' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // TARGET: A public Luma calendar or search URL. 
    // Example: Luma's search page for generic tech events.
    const LUMA_URL = 'https://lu.ma/events'

    console.log(`[SCRAPER] Initializing scan on: ${LUMA_URL}`)

    // 1. Fetch the raw HTML
    // We send a user-agent to pretend to be a normal browser so Luma doesn't block us.
    const res = await fetch(LUMA_URL, {
      headers: {
         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    })

    if (!res.ok) {
       throw new Error(`Failed to fetch Luma: ${res.statusText}`)
    }

    const html = await res.text()
    const $ = cheerio.load(html)
    
    const events: any[] = []

    // 2. Parse the Luma HTML structure (This is highly specific to Luma's DOM format)
    // NOTE: Luma often changes their class names. We are targeting common wrapper elements.
    $('a[href^="/event/"]').each((i, el) => {
       // Limit to scraping 5 events to prevent spamming the database
       if (i >= 5) return

       const eventLink = `https://lu.ma${$(el).attr('href')}`
       const titleText = $(el).find('h3').text().trim() || $(el).find('.text-lg').text().trim() || `Intercepted Signal #${Math.floor(Math.random() * 1000)}`
       
       // Calculate a random start time within the next 7 days for the mockup live feel
       const nextDays = Math.floor(Math.random() * 7) + 1
       const mockStartTime = new Date()
       mockStartTime.setDate(mockStartTime.getDate() + nextDays)

       if (titleText) {
          events.push({
             title: titleText,
             description: 'Signal intercepted via Luma.com. Full payload encrypted.',
             source: 'Luma',
             source_url: eventLink,
             start_time: mockStartTime.toISOString(),
             location: 'UNKNOWN_OR_VIRTUAL',
             status: 'discovered',
             relevance_score: Math.floor(Math.random() * (98 - 60 + 1)) + 60, // Random score between 60 and 98
             tags: ['TECH', 'MEETUP', 'LUMA'],
             crew_rsvp: [] // Empty array for Postgres
          })
       }
    })

    console.log(`[SCRAPER] Discovered ${events.length} signals. Transmitting to Vault...`)

    if (events.length === 0) {
      // Fallback if the Luma DOM changed or the page didn't load events:
      // We will inject a test signal so the user has something to verify.
      events.push({
         title: 'Fallible Luma Node - Manual Override Test Event',
         description: 'The scraper could not find standard DOM elements on Luma (they may be using React Server Components or changed their HTML). We have injected a test payload instead.',
         source: 'Luma Override',
         source_url: 'https://lu.ma',
         start_time: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days from now
         location: 'REMOTE_OVERRIDE',
         status: 'discovered',
         relevance_score: 99,
         tags: ['OVERRIDE', 'TEST'],
         crew_rsvp: []
      })
    }

    // 3. Upsert into Supabase `events` table
    // We use service role to bypass RLS policies for this automated system entry
    const { data: insertedData, error: dbError } = await supabase
       .from('events')
       .upsert(events, { onConflict: 'source_url' }) // Prevent duplicates if the same link is scraped twice
       .select()

    if (dbError) {
       console.error('[SCRAPER DB_ERROR]', dbError)
       throw new Error(`Database submission failed: ${dbError.message}`)
    }

    return NextResponse.json({ 
       success: true, 
       message: `Successfully intercepted and decrypted ${insertedData.length} signals.`,
       signals: insertedData
    })

  } catch (error: any) {
    console.error('[SCRAPER CRITICAL FAULT]', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
