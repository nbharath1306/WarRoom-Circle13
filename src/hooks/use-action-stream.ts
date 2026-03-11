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
    { user: 'SYSTEM', action: 'OFFLINE', target: 'WAITING_FOR_SIGNAL', time: 'NOW', sub: 'SYNC_PENDING' }
  ])

  useEffect(() => {
    if (!supabase) return

    setActions([{ user: 'SYSTEM', action: 'ONLINE', target: 'UPLINK_ESTABLISHED', time: 'NOW', sub: 'SYNC_ACTIVE' }])

    // Subscribe to new check-ins
    const checkInChannel = supabase.channel('public:check_ins')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'check_ins' }, async (payload: any) => {
        const { data: userData } = await supabase.from('users').select('full_name').eq('id', payload.new.user_id).single()
        const newAction: ActionItem = {
          user: userData?.full_name || 'UNKNOWN',
          action: 'LOGGED_CHECKIN',
          target: payload.new.today.substring(0, 30),
          time: 'JUST_NOW',
          sub: payload.new.blockers === 'NONE' ? 'NO_BLOCKERS' : 'THREAT_DETECTED'
        }
        setActions(prev => [newAction, ...prev].slice(0, 10))
      })

    // Subscribe to events
    const eventChannel = supabase.channel('public:events')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'events' }, (payload: any) => {
        const newAction: ActionItem = {
          user: 'RADAR',
          action: 'DETECTED',
          target: payload.new.title.substring(0, 30),
          time: 'JUST_NOW',
          sub: `ID_${payload.new.id.substring(0, 5)}`
        }
        setActions(prev => [newAction, ...prev].slice(0, 10))
      })

    // Subscribe to tasks
    const taskChannel = supabase.channel('public:tasks')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'tasks' }, async (payload: any) => {
        let user = 'UNKNOWN'
        if (payload.new.assignee_id) {
          const { data: userData } = await supabase.from('users').select('full_name').eq('id', payload.new.assignee_id).single()
          user = userData?.full_name || 'UNKNOWN'
        }
        const newAction: ActionItem = {
          user,
          action: 'ASSIGNED_TASK',
          target: payload.new.title.substring(0, 30),
          time: 'JUST_NOW',
          sub: `PRIORITY_${payload.new.priority?.toUpperCase() ?? 'MEDIUM'}`
        }
        setActions(prev => [newAction, ...prev].slice(0, 10))
      })

    checkInChannel.subscribe()
    eventChannel.subscribe()
    taskChannel.subscribe()

    return () => {
      supabase.removeChannel(checkInChannel)
      supabase.removeChannel(eventChannel)
      supabase.removeChannel(taskChannel)
    }
  }, [])

  return { actions }
}
