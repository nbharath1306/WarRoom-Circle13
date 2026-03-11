'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  Calendar, 
  Radar, 
  CheckSquare, 
  BookOpen, 
  Settings,
  Users,
  BarChart3
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Event Radar', href: '/radar', icon: Radar },
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Vault', href: '/vault', icon: BookOpen },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r border-[#2A2A4A] bg-[#12122A] text-white">
      <div className="flex h-16 items-center px-6">
        <span className="text-xl font-bold text-[#E94560]">WAR ROOM</span>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-[#E94560] text-white'
                  : 'text-[#A0A0B0] hover:bg-[#1A1A3E] hover:text-[#F5F5F5]'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5 flex-shrink-0',
                  isActive ? 'text-white' : 'text-[#A0A0B0] group-hover:text-[#F5F5F5]'
                )}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-[#2A2A4A] p-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-[#E94560]" />
          <div className="ml-3">
            <p className="text-sm font-medium text-[#F5F5F5]">Circle13 Builder</p>
            <p className="text-xs text-[#A0A0B0]">online</p>
          </div>
        </div>
      </div>
    </div>
  )
}
