import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

export const getSupabase = () => createBrowserClient(supabaseUrl, supabaseAnonKey)
export const supabase = typeof window !== 'undefined' ? getSupabase() : null as any
