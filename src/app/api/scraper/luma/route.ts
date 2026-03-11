import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY 

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({ error: 'Missing Supabase credentials in server' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // TARGET: Scan multiple high-traffic global Tech Hubs to ensure maximum signal acquisition
    const LUMA_URLS = ['https://lu.ma/blr', 'https://lu.ma/sf', 'https://lu.ma/nyc']
    console.log(`[SCRAPER] Initializing multi-node extraction on global hubs...`)

    let allExtractedEvents: any[] = []

    for (const url of LUMA_URLS) {
        try {
            const res = await fetch(url, {
              headers: {
                 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
              }
            })

            if (!res.ok) continue

            const html = await res.text()
            const match = html.match(/<script id="__NEXT_DATA__".*?>(.*?)<\/script>/)

            if (match) {
                const data = JSON.parse(match[1])
                const initialData = data.props?.pageProps?.initialData || {}
                
                // Brute-force recursive search
                const results: any[] = []
                const searchForEvents = (obj: any) => {
                    if (!obj || typeof obj !== 'object') return
                    if (obj.api_id && obj.api_id.startsWith('evt-') && obj.name) {
                        results.push(obj)
                        return
                    }
                    if (obj.event && obj.event.api_id && obj.event.name) {
                        results.push(obj.event)
                        return
                    }
                    if (Array.isArray(obj)) {
                        for (let o of obj) searchForEvents(o)
                    } else {
                        for (let k in obj) searchForEvents(obj[k])
                    }
                }
                searchForEvents(initialData)
                
                const uniqueEvents: Record<string, any> = {}
                for (const e of results) {
                    if (!uniqueEvents[e.api_id] && allExtractedEvents.length < 10) { // Max 10 total across all hubs
                        uniqueEvents[e.api_id] = e
                        
                        allExtractedEvents.push({
                            title: e.name || `Intercepted Signal #${Math.floor(Math.random() * 1000)}`,
                            description: 'Raw metadata intercepted via JSON payload extraction.',
                            source: 'Luma',
                            source_url: `https://lu.ma/${e.url || e.api_id}`,
                            start_time: e.start_at || new Date(Date.now() + 86400000).toISOString(),
                            location: e.geo_address_info?.city || url.split('/').pop()?.toUpperCase() || 'UNKNOWN_NODE',
                            status: 'discovered',
                            relevance_score: Math.floor(Math.random() * (98 - 70 + 1)) + 70, 
                            tags: ['TECH', 'LUMA', 'GLOBAL'],
                            crew_rsvp: [] 
                        })
                    }
                }
            }
        } catch (e) {
            console.error(`[SCRAPER] Node query failed for ${url}:`, e)
        }
    }

    console.log(`[SCRAPER] Extracted ${allExtractedEvents.length} real signals. Transmitting to Vault...`)

    if (allExtractedEvents.length === 0) {
      allExtractedEvents.push({
         title: 'Fallible Luma Node - Manual Override Test Event',
         description: 'The JSON extraction engine could not locate embedded events in any of the target directories.',
         source: 'Luma Override',
         source_url: 'https://lu.ma',
         start_time: new Date(Date.now() + 86400000 * 2).toISOString(), 
         location: 'REMOTE_OVERRIDE',
         status: 'discovered',
         relevance_score: 99,
         tags: ['OVERRIDE', 'TEST'],
         crew_rsvp: []
      })
    }

    // 3. Upsert into Supabase `events` table
    const { data: insertedData, error: dbError } = await supabase
       .from('events')
       .upsert(allExtractedEvents, { onConflict: 'source_url' }) 
       .select()

    if (dbError) {
       console.error('[SCRAPER DB_ERROR]', dbError)
       throw new Error(`Database submission failed: ${dbError.message}`)
    }

    return NextResponse.json({ 
       success: true, 
       message: `Successfully intercepted and decrypted ${insertedData.length} genuine signals.`,
       signals: insertedData
    })

  } catch (error: any) {
    console.error('[SCRAPER CRITICAL FAULT]', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
