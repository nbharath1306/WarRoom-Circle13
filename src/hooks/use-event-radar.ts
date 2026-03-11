'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface EventSignal {
  id: string
  title: string
  description: string
  source: string
  source_url: string
  start_time: string
  location: string
  status: 'discovered' | 'pending' | 'registered' | 'attended' | 'skipped'
  relevance_score: number
  tags: string[]
  crew_rsvp: string[]
}

export function useEventRadar() {
  const [signals, setSignals] = useState<EventSignal[]>([])
  const [loading, setLoading] = useState(true)

  const fetchSignals = async () => {
    if (!supabase) return
    
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false })

    if (data && !error) {
      setSignals(data.map((s: any) => ({
        id: s.id,
        title: s.title,
        description: s.description || '',
        source: s.source?.toUpperCase() || 'UNKNOWN',
        source_url: s.source_url || '#',
        start_time: new Date(s.start_time).toLocaleString(),
        location: s.location || 'REMOTE',
        status: s.status || 'discovered',
        relevance_score: s.relevance_score || 0,
        tags: s.tags || [],
        crew_rsvp: s.crew_rsvp || []
      })))
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSignals()

    if (!supabase) return

    const channel = supabase
      .channel('public:events')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'events' }, () => {
        fetchSignals()
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const [scanning, setScanning] = useState(false)
  const [scanResult, setScanResult] = useState<{message?: string, error?: string} | null>(null)

  const initiateScan = async () => {
    setScanning(true)
    setScanResult(null)
    console.log('INITIATING_TACTICAL_SCAN_VIA_API...')
    
    try {
      const response = await fetch('/api/scraper/luma', {
        method: 'POST',
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Unknown error occurred during scan')
      }
      
      setScanResult({ message: result.message })
      // We don't need to manually update state here because our Supabase real-time subscription
      // will automatically pick up the new database rows and trigger `fetchSignals()` again!
    } catch (err: any) {
      console.error('Scan Failed:', err)
      setScanResult({ error: err.message })
    } finally {
      setScanning(false)
    }
  }

  return { signals, loading, initiateScan, scanning, scanResult }
}
