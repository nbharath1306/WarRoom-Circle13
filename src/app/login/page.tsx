'use client'

import { useState } from 'react'
import { getSupabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = getSupabase()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/')
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A1A]">
      <Card className="w-[400px] border-[#2A2A4A] bg-[#12122A] text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#E94560]">War Room</CardTitle>
          <CardDescription className="text-[#A0A0B0]">
            Log in to access the Circle13 command center.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#F5F5F5]">Email</label>
              <Input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-[#2A2A4A] bg-[#1A1A3E] text-white focus:border-[#E94560]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#F5F5F5]">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-[#2A2A4A] bg-[#1A1A3E] text-white focus:border-[#E94560]"
              />
            </div>
            {error && <p className="text-sm text-[#F44336]">{error}</p>}
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-[#E94560] text-white hover:bg-[#d83a54]"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
