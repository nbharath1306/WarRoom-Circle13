'use client'

import { useState } from 'react'
import { getSupabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { Shield, Lock, Activity, ChevronRight, AlertTriangle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const [message, setMessage] = useState<string | null>(null)

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('OPERATIVE_EMAIL_REQUIRED')
      return
    }

    setLoading(true)
    setError(null)
    setMessage(null)

    const supabase = getSupabase()
    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      }
    })

    if (authError) {
      setError(authError.message)
    } else {
      setMessage('QUANTUM_LINK_TRANSMITTED // CHECK_INBOX')
    }
    setLoading(false)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    const supabase = getSupabase()
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      setError(authError.message)
    } else {
      router.push('/')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A1A] p-4 relative overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(233,69,96,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(233,69,96,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-c13-red/5 rounded-full blur-[120px]" />
      </div>

      <Card className="w-full max-w-[420px] border-border-default bg-bg-surface shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 relative overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        
        {/* TACTICAL HEADER DECO */}
        <div className="h-1 w-full bg-gradient-to-r from-c13-red via-transparent to-c13-blue opacity-50" />
        
        <CardHeader className="text-center space-y-4 pt-8 pb-4">
          <div className="mx-auto h-16 w-16 rounded border border-c13-red/30 bg-c13-red/5 flex items-center justify-center mb-2 animate-pulse">
            <Shield className="h-8 w-8 text-c13-red" />
          </div>
          <div className="space-y-1">
             <div className="flex items-center justify-center space-x-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-text-tertiary uppercase">ENCRYPTED_AUTH_BRIDGE</span>
             </div>
             <CardTitle className="text-4xl font-display font-bold text-text-primary tracking-tighter">WARDEN_V1</CardTitle>
          </div>
          <CardDescription className="text-[11px] font-mono text-text-tertiary uppercase tracking-tight">
             UNAUTHORIZED_ACCESS_IS_LOGGED_AND_TRACED
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 px-8 pb-4">
          <form className="space-y-6 mt-4">
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-text-secondary uppercase tracking-widest pl-1">OPERATIVE_ID (EMAIL)</label>
              <Input
                type="email"
                placeholder="USER@CIRCLE13.ALPHA"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-bg-void border-border-default h-12 text-xs font-mono text-text-primary placeholder:text-text-tertiary/20 focus:ring-c13-red transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
               <Button 
                  type="button"
                  onClick={handleMagicLink}
                  disabled={loading}
                  variant="outline"
                  className="h-12 border-c13-blue/30 text-c13-blue hover:bg-c13-blue hover:text-white bg-transparent transition-all font-mono text-[10px] tracking-widest uppercase"
               >
                  {loading ? 'SENDING...' : 'SEND_MAGIC_LINK'}
               </Button>
               <Button 
                  type="submit"
                  onClick={handleLogin}
                  disabled={loading}
                  className="h-12 bg-c13-red text-white hover:bg-[#d83a54] shadow-[0_0_15px_var(--c13-red-glow)] font-mono text-[10px] tracking-widest font-bold uppercase"
               >
                  LOGIN_WITH_KEY
               </Button>
            </div>

            <div className="space-y-2 pt-2">
               <div className="flex items-center justify-between px-1">
                  <label className="text-[10px] font-mono font-bold text-text-secondary uppercase tracking-widest">ENCRYPTION_KEY (PASSWORD)</label>
                  <span className="text-[9px] font-mono text-text-tertiary opacity-50 tracking-tighter hover:text-c13-red cursor-pointer">FORGOT_KEY?</span>
               </div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-bg-void border-border-default h-12 text-xs font-mono text-text-primary focus:ring-c13-red transition-all"
              />
            </div>

            {error && (
               <div className="bg-status-error/10 border border-status-error/30 p-3 rounded flex items-start space-x-3 animate-in shake-in duration-300">
                  <AlertTriangle className="h-4 w-4 text-status-error shrink-0 mt-0.5" />
                  <p className="text-[10px] font-mono text-status-error uppercase leading-tight font-bold">{error}</p>
               </div>
            )}

            {message && (
               <div className="bg-status-active/10 border border-status-active/30 p-3 rounded flex items-start space-x-3 animate-in fade-in duration-300">
                  <Activity className="h-4 w-4 text-status-active shrink-0 mt-0.5" />
                  <p className="text-[10px] font-mono text-status-active uppercase leading-tight font-bold">{message}</p>
               </div>
            )}
          </form>
        </CardContent>

        <CardFooter className="px-8 pb-10 flex flex-col space-y-6">
          <div className="flex items-center justify-between w-full opacity-40 pt-4">
             <div className="h-px bg-border-subtle flex-1" />
             <span className="text-[9px] font-mono mx-4 tracking-[0.3em]">SECURE_NODE: BOM1_WARROOM</span>
             <div className="h-px bg-border-subtle flex-1" />
          </div>
        </CardFooter>
        
        {/* BOTTOM DECO */}
        <div className="h-1 w-full bg-border-subtle flex">
           <div className="h-full bg-c13-red w-1/3 animate-pulse" />
        </div>
      </Card>

      {/* FOOTER SYSTEM INFO */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center space-x-8 hidden md:flex items-center justify-center opacity-30">
        <div className="flex items-center text-[9px] font-mono text-text-tertiary">
           <Activity className="h-3 w-3 mr-2" />
           <span>CPU_LOAD: 12%</span>
        </div>
        <div className="flex items-center text-[9px] font-mono text-text-tertiary">
           <Lock className="h-3 w-3 mr-2" />
           <span>RSA_4096_ACTIVE</span>
        </div>
        <div className="flex items-center text-[9px] font-mono text-text-tertiary">
           <div className="h-1.5 w-1.5 rounded-full bg-status-active mr-2" />
           <span>SYS_NOMINAL</span>
        </div>
      </div>
    </div>
  )
}
