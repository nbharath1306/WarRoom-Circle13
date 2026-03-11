'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface ActionItem {
  user: string;
  action: string;
  target: string;
  time: string;
  sub: string;
}

export function useActionStream() {
  const [actions, setActions] = useState<ActionItem[]>([
    { user: 'N. BHARATH', action: 'OFFLINE', target: 'WAITING_FOR_SIGNAL', time: 'NOW', sub: 'SYNC_PENDING' }
  ])

  useEffect(() => {
    if (!supabase) return

    // Subscribe to new check-ins
    const checkInChannel = supabase
      .channel('public:check_ins')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'check_ins' }, async (payload: any) => {
        // Fetch user name
        const { data: userData } = await supabase
          .from('users')
          .select('full_name')
          .eq('id', payload.new.user_id)
          .single()

        const newAction: ActionItem = {
          user: userData?.full_name || 'UNKNOWN',
          action: 'LOGGED_CHECKIN',
          target: payload.new.today.substring(0, 30),
          time: 'JUST_NOW',
          sub: payload.new.blockers === 'NONE' ? 'NO_BLOCKERS' : 'THREAT_DETECTED'
        }
        setActions(prev => [newAction, ...prev].slice(0, 10))
      })
      .subscribe()

    return () => {
      supabase.removeChannel(checkInChannel)
    }
  }, [])

  return { actions }
}
