'use client'

import * as React from 'react'
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import { Calendar, Search, Square, BookOpen, CheckSquare, Bell } from 'lucide-react'

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false)
      command()
    },
    []
  )

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-bg-void/80 backdrop-blur-sm flex items-start justify-center pt-[20vh]">
      <div 
        className="w-full max-w-2xl bg-bg-surface border border-border-default rounded-lg shadow-[0_0_40px_var(--c13-red-glow)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Command label="Command Menu" className="w-full">
          <div className="flex items-center border-b border-border-subtle px-4">
            <span className="text-text-tertiary font-mono mr-2">&gt; SEARCH_WARROOM:</span>
            <Command.Input 
              autoFocus 
              className="flex-1 h-14 bg-transparent border-none outline-none text-text-primary font-mono text-base placeholder:text-text-tertiary" 
              placeholder="|" 
            />
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin">
            <Command.Empty className="py-6 text-center text-sm font-mono text-text-tertiary">
              NO_SIGNALS_DETECTED
            </Command.Empty>

            <Command.Group heading={<span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest px-2 py-1 block">RECENT_COMMANDS</span>}>
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/calendar'))}
                className="flex items-center px-4 py-3 text-sm font-body text-text-primary rounded-md cursor-pointer hover:bg-bg-elevated aria-selected:bg-bg-elevated transition-colors"
              >
                <Search className="mr-3 h-4 w-4 text-text-tertiary" />
                Go to Calendar
                <span className="ml-auto text-xs font-mono text-text-tertiary">⌘ G then C</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/tasks?new=true'))}
                className="flex items-center px-4 py-3 text-sm font-body text-text-primary rounded-md cursor-pointer hover:bg-bg-elevated aria-selected:bg-bg-elevated transition-colors"
              >
                <CheckSquare className="mr-3 h-4 w-4 text-text-tertiary" />
                Create new task
                <span className="ml-auto text-xs font-mono text-text-tertiary">⌘ N</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/radar?scan=true'))}
                className="flex items-center px-4 py-3 text-sm font-body text-text-primary rounded-md cursor-pointer hover:bg-bg-elevated aria-selected:bg-bg-elevated transition-colors"
              >
                <Bell className="mr-3 h-4 w-4 text-text-tertiary" />
                Scan Event Radar
                <span className="ml-auto text-xs font-mono text-text-tertiary">⌘ Shift+S</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading={<span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest px-2 pt-4 pb-1 block">RESULTS</span>}>
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/radar/meetup-ai'))}
                className="flex items-center px-4 py-3 text-sm font-body text-text-primary rounded-md cursor-pointer hover:bg-bg-elevated aria-selected:bg-bg-elevated transition-colors"
              >
                <span className="mr-3">📅</span> AI Meetup — 15.03.26
                <span className="ml-auto text-[10px] font-mono bg-bg-overlay border border-border-subtle px-1.5 py-0.5 rounded text-status-info">EVENT</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/tasks/bug-fix'))}
                className="flex items-center px-4 py-3 text-sm font-body text-text-primary rounded-md cursor-pointer hover:bg-bg-elevated aria-selected:bg-bg-elevated transition-colors"
              >
                <Square className="mr-3 h-4 w-4 text-text-secondary" /> Fix auth redirect bug
                <span className="ml-auto text-[10px] font-mono bg-bg-overlay border border-border-subtle px-1.5 py-0.5 rounded text-c13-red">TASK</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/vault/sprint-3'))}
                className="flex items-center px-4 py-3 text-sm font-body text-text-primary rounded-md cursor-pointer hover:bg-bg-elevated aria-selected:bg-bg-elevated transition-colors"
              >
                <BookOpen className="mr-3 h-4 w-4 text-text-secondary" /> Sprint 3 Retrospective
                <span className="ml-auto text-[10px] font-mono bg-bg-overlay border border-border-subtle px-1.5 py-0.5 rounded text-status-purple">DOCUMENT</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
      {/* Invisible backdrop to close when clicked outside */}
      <div className="absolute inset-0 z-[-1]" onClick={() => setOpen(false)} />
    </div>
  )
}
