import { supabase } from '@/lib/supabase'
import { scrapeDevpost } from '@/lib/radar/scanners'
import { fetchLumaEvents } from '@/lib/radar/luma'

async function runScan() {
  console.log('--- Starting Event Scan ---')
  
  // 1. Scrape Devpost
  try {
    const devpostEvents = await scrapeDevpost()
    console.log(`Discovered ${devpostEvents.length} events from Devpost`)
    // Logic to save to Supabase would go here
  } catch (e) {
    console.error('Error scanning Devpost:', e)
  }

  // 2. Fetch Luma Events (Scraping Pivot)
  try {
    const lumaEvents = await fetchLumaEvents()
    console.log(`Discovered ${lumaEvents.length} events from Luma`)
  } catch (e) {
    console.error('Error scanning Luma:', e)
  }

  console.log('--- Scan Complete ---')
}

runScan()
