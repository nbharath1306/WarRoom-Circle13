'use client'

import * as React from 'react'
import { Cpu, X, Send, Minimize2, Maximize2, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const QUICK_PROMPTS = [
  'What events should we attend this week?',
  'Generate a hackathon task breakdown',
  'Analyze today\'s blockers',
  'Best time for a team sync?',
]

export function CircleBrain() {
  const [open, setOpen] = React.useState(false)
  const [minimized, setMinimized] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: 'assistant',
      content: '**CIRCLE BRAIN ONLINE**\n\nTactical AI copilot ready. Ask me about events, tasks, team availability, or hackathon strategy.',
    },
  ])
  const [input, setInput] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (open && !minimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open, minimized])

  React.useEffect(() => {
    // Keyboard shortcut: Ctrl/Cmd + B
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault()
        setOpen(o => !o)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const sendMessage = async (content: string) => {
    if (!content.trim() || loading) return
    setError(null)

    const userMsg: Message = { role: 'user', content }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/copilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Signal lost')

      setMessages([...newMessages, { role: 'assistant', content: data.reply }])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  // Floating trigger button
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-c13-red shadow-[0_0_25px_var(--c13-red-glow)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        title="Circle Brain AI (⌘B)"
      >
        <Cpu className="h-6 w-6 text-white group-hover:animate-pulse" />
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-status-active rounded-full border-2 border-bg-void animate-pulse" />
      </button>
    )
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex flex-col bg-bg-surface border border-border-default rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-300',
        minimized ? 'w-64 h-14' : 'w-[400px] h-[540px]'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle bg-bg-elevated/50 rounded-t-xl shrink-0">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Cpu className="h-5 w-5 text-c13-red" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-status-active rounded-full border border-bg-surface" />
          </div>
          <div>
            <p className="text-[11px] font-mono font-bold text-text-primary tracking-widest">CIRCLE_BRAIN</p>
            <p className="text-[9px] font-mono text-status-active uppercase tracking-widest">ONLINE // LLaMA-3.3-70B</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-text-tertiary hover:text-text-primary"
            onClick={() => setMinimized(m => !m)}
          >
            {minimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-text-tertiary hover:text-status-error"
            onClick={() => setOpen(false)}
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {!minimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((msg, i) => (
              <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                <div
                  className={cn(
                    'max-w-[85%] rounded-lg px-4 py-3 text-[11px] font-mono leading-relaxed',
                    msg.role === 'user'
                      ? 'bg-c13-red text-white rounded-br-none'
                      : 'bg-bg-elevated border border-border-subtle text-text-primary rounded-bl-none'
                  )}
                >
                  {msg.role === 'assistant'
                    ? msg.content.split('\n').map((line, j) => (
                        <p key={j} className={cn('', line.startsWith('**') && 'font-bold text-c13-red')}>
                          {line.replace(/\*\*/g, '')}
                        </p>
                      ))
                    : msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-bg-elevated border border-border-subtle rounded-lg rounded-bl-none px-4 py-3 flex items-center space-x-2">
                  <Loader2 className="h-3 w-3 text-c13-red animate-spin" />
                  <span className="text-[10px] font-mono text-text-tertiary animate-pulse">PROCESSING...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-center space-x-2 text-[10px] font-mono text-status-error bg-status-error/10 border border-status-error/20 rounded p-3">
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>SIGNAL_LOST: {error}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompts */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="text-[9px] font-mono text-text-tertiary bg-bg-elevated/50 border border-border-subtle hover:border-c13-red hover:text-text-primary rounded px-2 py-1 transition-all uppercase tracking-tighter text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 pt-2 border-t border-border-subtle shrink-0">
            <div className="flex items-center space-x-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="TRANSMIT_QUERY..."
                className="h-9 bg-bg-void border-border-default font-mono text-xs focus:ring-c13-red placeholder:text-text-tertiary/40 flex-1"
                disabled={loading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || loading}
                className="h-9 w-9 bg-c13-red hover:shadow-[0_0_12px_var(--c13-red-glow)] shrink-0"
              >
                <Send className="h-3.5 w-3.5 text-white" />
              </Button>
            </div>
            <p className="text-[8px] font-mono text-text-tertiary/40 text-center mt-2 uppercase tracking-widest">⌘B TO TOGGLE</p>
          </form>
        </>
      )}
    </div>
  )
}
