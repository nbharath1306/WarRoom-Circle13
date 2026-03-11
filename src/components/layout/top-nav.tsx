'use client'

import { Search, Bell, Command } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'DASHBOARD', href: '/' },
  { label: 'CALENDAR', href: '/calendar' },
  { label: 'RADAR', href: '/radar' },
  { label: 'TASKS', href: '/tasks' },
  { label: 'VAULT', href: '/vault' },
  { label: 'ANALYTICS', href: '/analytics' },
]

export function TopNav() {
  const pathname = usePathname()

  return (
    <header className="h-14 border-b border-border-subtle bg-bg-void flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-c13-red font-mono font-bold text-xl">C-13</span>
          <span className="text-text-secondary font-mono text-sm tracking-widest hidden md:inline">// WAR ROOM</span>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`text-[13px] font-mono tracking-widest transition-colors py-1 relative ${
                pathname === item.href ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-[-14px] left-0 w-full h-[2px] bg-c13-red shadow-[0_0_10px_var(--c13-red-glow)]" />
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-text-tertiary group-hover:text-text-secondary" />
          </div>
          <Input 
            className="w-64 bg-bg-elevated border-border-default h-9 pl-10 text-xs font-mono placeholder:text-text-tertiary focus-visible:ring-c13-red"
            placeholder="SEARCH_WARROOM..."
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <div className="bg-bg-overlay border border-border-default px-1.5 py-0.5 rounded text-[10px] text-text-tertiary flex items-center space-x-1">
              <Command className="h-2.5 w-2.5" />
              <span>K</span>
            </div>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
          <Bell className="h-5 w-5" />
        </Button>

        <Avatar className="h-8 w-8 border border-transparent hover:border-c13-red transition-colors cursor-pointer">
          <AvatarFallback className="bg-bg-elevated text-c13-red text-xs font-mono">NB</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
