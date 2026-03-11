'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface Task {
  id: string
  title: string
  status: string
  priority: string
  owner: string
  sub: string
}

export function useTaskEngine() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) return

    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from('tasks')
        .select('*, task_assignees(users(full_name))')
        .order('position', { ascending: true })

      if (data && !error) {
        const formattedTasks: Task[] = data.map((task: any) => ({
          id: task.id,
          title: task.title,
          status: task.status,
          priority: task.priority.toUpperCase(),
          owner: task.task_assignees?.[0]?.users?.full_name?.charAt(0) || 'U',
          sub: task.tags?.[0] || 'GENERAL'
        }))
        setTasks(formattedTasks)
      }
      setLoading(false)
    }

    fetchTasks()

    const channel = supabase
      .channel('public:tasks')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tasks' }, () => {
        fetchTasks()
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const updateTaskStatus = async (taskId: string, newStatus: string) => {
    if (!supabase) return
    
    // Optimistic update
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t))

    const { error } = await supabase
      .from('tasks')
      .update({ status: newStatus })
      .eq('id', taskId)

    if (error) {
      console.error('Task update failed:', error)
      // Re-fetch to sync state on error
      const { data } = await supabase.from('tasks').select('*').eq('id', taskId).single()
      if (data) {
          setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: data.status } : t))
      }
    }
  }

  return { tasks, loading, updateTaskStatus, setTasks }
}
