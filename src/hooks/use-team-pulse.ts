'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Hammer, GraduationCap, MapPin, Circle, MinusCircle } from 'lucide-react'

export interface TeamMember {
  id: string;
  name: string;
  status: string;
  icon: any;
  color: string;
}

const getStatusConfig = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'building': return { icon: Hammer, color: 'text-status-active' }
    case 'in_class': return { icon: GraduationCap, color: 'text-status-warning' }
    case 'at_event': return { icon: MapPin, color: 'text-status-purple' }
    case 'available': return { icon: Circle, color: 'text-status-active' }
    case 'away': return { icon: MinusCircle, color: 'text-status-error' }
    default: return { icon: Circle, color: 'text-text-tertiary' }
  }
}

export function useTeamPulse() {
  const [team, setTeam] = useState<TeamMember[]>([])

  useEffect(() => {
    if (!supabase) return

    const fetchTeam = async () => {
      const { data } = await supabase.from('users').select('id, full_name, status')
      if (data) {
        setTeam(data.map((u: { id: string; full_name: string; status: string }) => ({
          id: u.id,
          name: u.full_name?.toUpperCase() || 'UNKNOWN',
          status: u.status,
          ...getStatusConfig(u.status)
        })))
      }
    }

    fetchTeam()

    const channel = supabase.channel('public:users')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'users' }, (payload: any) => {
        setTeam(prev => prev.map(member => {
          if (member.id === payload.new.id) {
            return {
              ...member,
              name: payload.new.full_name?.toUpperCase() || 'UNKNOWN',
              status: payload.new.status,
              ...getStatusConfig(payload.new.status)
            }
          }
          return member
        }))
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return { team }
}
