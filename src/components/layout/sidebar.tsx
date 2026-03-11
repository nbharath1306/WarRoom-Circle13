'use client'

import { cn } from '@/lib/utils'
import { 
  Square,
  CheckSquare,
  Circle,
  Hammer,
  GraduationCap
} from 'lucide-react'

const teamPulse = [
  { name: 'BHARATH', status: 'building', icon: Hammer, color: 'text-status-active' },
  { name: 'AKHIL', status: 'building', icon: Hammer, color: 'text-status-active' },
  { name: 'DAVE', status: 'in_class', icon: GraduationCap, color: 'text-status-warning' },
]

export function Sidebar() {
  return (
    <aside className="w-60 h-full bg-bg-void border-r border-border-subtle flex flex-col hidden md:flex">
      <div className="flex-1 px-6 py-8 space-y-8 overflow-y-auto">
        
        {/* TODAY Section */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-mono font-bold tracking-[0.15em] text-text-secondary uppercase">
            TODAY // STATISTICS
          </h3>
          <div className="space-y-3">
             <div className="flex items-center justify-between group">
                <div className="flex items-center space-x-3 text-text-secondary font-mono text-xs">
                   <Square className="h-3 w-3 fill-c13-red text-c13-red" />
                   <span>EVENTS_SCAN</span>
                </div>
                <span className="text-text-primary font-mono font-bold text-sm">3</span>
             </div>
             <div className="flex items-center justify-between group">
                <div className="flex items-center space-x-3 text-text-secondary font-mono text-xs">
                   <CheckSquare className="h-3 w-3 text-status-info" />
                   <span>TASKS_PENDING</span>
                </div>
                <span className="text-text-primary font-mono font-bold text-sm">7</span>
             </div>
             <div className="flex items-center justify-between group">
                <div className="flex items-center space-x-3 text-text-secondary font-mono text-xs">
                   <Circle className="h-3 w-3 fill-status-active text-status-active animate-pulse-dot" />
                   <span>TEAM_ONLINE</span>
                </div>
                <span className="text-text-primary font-mono font-bold text-sm">4/6</span>
             </div>
          </div>
        </section>

        <div className="h-px w-full scanline-divider" />

        {/* NEXT UP Section */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-mono font-bold tracking-[0.15em] text-text-secondary uppercase">
            NEXT UP // UPLINK
          </h3>
          <div className="space-y-5">
             <div className="space-y-1">
                <div className="text-text-code font-mono text-xs font-bold leading-none">14:30 IST</div>
                <div className="text-text-primary text-sm font-display font-medium leading-tight">AI Builder Summit</div>
                <div className="text-c13-red font-mono text-[10px] tracking-widest font-bold">ETA: 2h 15m</div>
             </div>
             <div className="space-y-1">
                <div className="text-text-secondary font-mono text-xs font-bold leading-none">18:00 IST</div>
                <div className="text-text-primary text-sm font-display font-medium leading-tight">Sprint Review</div>
                <div className="text-text-tertiary font-mono text-[10px] tracking-widest font-bold">UPCOMING</div>
             </div>
          </div>
        </section>

        <div className="h-px w-full bg-border-subtle" />

        {/* PULSE Section */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-mono font-bold tracking-[0.15em] text-text-secondary uppercase">
            TEAM // PULSE
          </h3>
          <div className="space-y-4">
            {teamPulse.map((user) => (
              <div key={user.name} className="flex items-center justify-between group">
                 <div className="flex items-center space-x-3">
                    <Circle className={cn("h-2 w-2 fill-current", user.color)} />
                    <span className="text-text-primary font-mono text-[13px] font-medium tracking-wide">
                       {user.name}
                    </span>
                 </div>
                 <user.icon className="h-3.5 w-3.5 text-text-tertiary group-hover:text-text-secondary transition-colors" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-border-subtle bg-bg-surface/50">
         <div className="flex items-center justify-between text-[10px] font-mono text-text-tertiary uppercase tracking-wider">
            <span>UPLINK_STATUS</span>
            <span className="text-status-active">ENCRYPTED ✓</span>
         </div>
      </div>
    </aside>
  )
}
