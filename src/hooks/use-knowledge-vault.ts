'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface KnowledgeDoc {
  id: string
  title: string
  category: string
  tags: string[]
  security_level: string
  created_at: string
  content?: string
}

export function useKnowledgeVault() {
  const [docs, setDocs] = useState<KnowledgeDoc[]>([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState<{name: string, count: number}[]>([])

  useEffect(() => {
    if (!supabase) return

    const fetchDocs = async () => {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false })

      if (data && !error) {
        setDocs(data.map((d: any) => ({
          id: d.id,
          title: d.title,
          category: d.category || 'GENERAL',
          tags: d.tags || [],
          security_level: d.security_level || 'UNCLASSIFIED',
          created_at: new Date(d.created_at).toISOString().split('T')[0],
          content: d.content
        })))

        // Calculate categories
        const catMap: Record<string, number> = {}
        data.forEach((d: any) => {
          const cat = d.category || 'GENERAL'
          catMap[cat] = (catMap[cat] || 0) + 1
        })
        setCategories(Object.entries(catMap).map(([name, count]) => ({ name, count })))
      }
      setLoading(false)
    }

    fetchDocs()

    const channel = supabase
      .channel('public:documents')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'documents' }, () => {
        fetchDocs()
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return { docs, loading, categories }
}
