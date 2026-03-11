'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface TimetableBlock {
  id?: string
  day: number
  start: string
  end: string
  course: string
}

export function useTimetable() {
  const [blocks, setBlocks] = useState<TimetableBlock[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) return

    const fetchTimetable = async () => {
      const { data: userData } = await supabase.auth.getUser()
      if (!userData?.user) {
         setLoading(false)
         return
      }

      const { data, error } = await supabase
        .from('timetable_blocks')
        .select('*')
        .eq('user_id', userData.user.id)
        .eq('is_active', true)

      if (data && !error) {
        setBlocks(data.map((b: any) => ({
          id: b.id,
          day: b.day_of_week,
          start: b.start_time.substring(0, 5),
          end: b.end_time.substring(0, 5),
          course: b.course_name
        })))
      }
      setLoading(false)
    }

    fetchTimetable()
  }, [])

  const saveSchedule = async (newBlocks: TimetableBlock[]) => {
    if (!supabase) return
    
    const { data: userData } = await supabase.auth.getUser()
    if (!userData?.user) return

    // Simply overwrite for now (cleanup old and insert new)
    // In a real app, you'd do a more sophisticated sync/upsert
    await supabase.from('timetable_blocks').update({ is_active: false }).eq('user_id', userData.user.id)

    const insertData = newBlocks.map(b => ({
      user_id: userData.user.id,
      day_of_week: b.day,
      start_time: b.start,
      end_time: b.end,
      course_name: b.course,
      semester: 'MARCH_2026',
      is_active: true
    }))

    const { error } = await supabase.from('timetable_blocks').insert(insertData)
    
    if (error) {
      console.error('TIMETABLE_COMMIT_FAILED:', error)
    } else {
      console.log('TIMETABLE_COMMIT_SUCCESS')
      setBlocks(newBlocks)
    }
  }

  return { blocks, setBlocks, loading, saveSchedule }
}
