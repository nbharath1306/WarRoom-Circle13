'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { TEAM_MEMBERS, TeamMember } from '@/lib/team'

export function useTeamStatus() {
  const [members, setMembers] = useState<TeamMember[]>(TEAM_MEMBERS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) return

    // Fetch initial status
    const fetchStatus = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*')

      if (data && !error) {
        // Map DB users to our TeamMember interface
        const updatedMembers = TEAM_MEMBERS.map(m => {
          const dbUser = data.find((u: any) => u.full_name.includes(m.name) || m.name.includes(u.full_name))
          if (dbUser) {
            return {
              ...m,
              status: dbUser.status,
              statusMessage: dbUser.status_message || m.statusMessage,
              lastActive: dbUser.last_active_at ? 'JUST_NOW' : m.lastActive
            }
          }
          return m
        })
        setMembers(updatedMembers)
      }
      setLoading(false)
    }

    fetchStatus()

    // Subscribe to changes
    const channel = supabase
      .channel('public:users')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'users' }, (payload: any) => {
        setMembers(current => current.map(m => {
          if (payload.new.full_name.includes(m.name) || m.name.includes(payload.new.full_name)) {
            return {
              ...m,
              status: payload.new.status,
              statusMessage: payload.new.status_message || m.statusMessage,
              lastActive: 'JUST_NOW'
            }
          }
          return m
        }))
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return { members, loading }
}
