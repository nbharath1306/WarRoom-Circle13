'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Users, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const hours = Array.from({ length: 15 }, (_, i) => i + 8) // 8 AM to 10 PM
const days = ['MON', 'TUE', 'WED', 'THU', 'FRI']

export default function AvailabilityPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">AVAILABILITY_MATRIX // SUBSYSTEM</span>
           <div className="h-1 w-1 rounded-full bg-status-active animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">TEAM AVAILABILITY</h1>
          <div className="flex items-center gap-6 pb-1">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-status-active rounded-full" />
              <span className="text-[10px] font-mono text-text-secondary uppercase">GO // OPTIMAL</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-status-warning rounded-full" />
              <span className="text-[10px] font-mono text-text-secondary uppercase">HOLD // PARTIAL</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-status-error rounded-full" />
              <span className="text-[10px] font-mono text-text-secondary uppercase">ABORT // BLOCKED</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Matrix */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-border-default bg-bg-surface overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-bg-elevated/50">
                    <th className="p-4 text-left text-[10px] font-mono font-bold text-text-tertiary uppercase tracking-widest border-b border-border-subtle">TIME_UTC</th>
                    {days.map(day => (
                      <th key={day} className="p-4 text-center text-[11px] font-mono font-black text-text-primary border-l border-border-subtle border-b border-border-subtle">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {hours.map(hour => (
                    <tr key={hour} className="group hover:bg-bg-elevated/20 transition-colors">
                      <td className="p-4 text-[11px] font-mono font-bold text-c13-red border-b border-border-subtle/30 bg-bg-elevated/20">
                        {hour.toString().padStart(2, '0')}:00
                      </td>
                      {days.map(day => {
                        const rand = Math.random()
                        const status = rand > 0.85 ? 'hard' : rand > 0.6 ? 'soft' : 'free'
                        return (
                          <td key={day} className="p-1 border-l border-border-subtle/30 border-b border-border-subtle/30 group-hover:border-c13-red/20 transition-colors">
                            <div className={cn(
                              "h-10 rounded transition-all cursor-pointer flex items-center justify-center group/cell",
                              status === 'free' ? "bg-status-active/5 hover:bg-status-active/20" :
                              status === 'soft' ? "bg-status-warning/5 hover:bg-status-warning/20" :
                              "bg-status-error/5 hover:bg-status-error/20"
                            )}>
                               <div className={cn(
                                  "h-1.5 w-1.5 rounded-full opacity-0 group-hover/cell:opacity-100 transition-opacity",
                                  status === 'free' ? "bg-status-active shadow-[0_0_8px_var(--status-active)]" :
                                  status === 'soft' ? "bg-status-warning shadow-[0_0_8px_var(--status-warning)]" :
                                  "bg-status-error shadow-[0_0_8px_var(--status-error)]"
                               )} />
                            </div>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Intelligence / Best Slots */}
        <div className="space-y-8">
           <section className="space-y-4">
              <h3 className="text-[11px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase flex items-center">
                 <ShieldCheck className="mr-2 h-4 w-4 text-status-active" />
                 OPTIMAL_WINDOWS
              </h3>
              <div className="space-y-4">
                {[
                  { day: 'THU', time: '16:00 - 18:00', fit: '100% // 6/6 CREW', status: 'optimal' },
                  { day: 'FRI', time: '10:00 - 12:00', fit: '83% // 5/6 CREW', status: 'partial' },
                  { day: 'WED', time: '14:30 - 16:30', fit: '83% // 5/6 CREW', status: 'partial' },
                ].map((slot, i) => (
                  <Card key={i} className="border-border-default bg-bg-surface hover:border-c13-red transition-all cursor-pointer group">
                    <CardContent className="p-4 space-y-3">
                       <div className="flex justify-between items-start">
                          <div className="text-[10px] font-mono font-bold text-text-tertiary">{slot.day} // {slot.time}</div>
                          <Badge variant={slot.status === 'optimal' ? 'active' : 'pending'}>
                             {slot.status}
                          </Badge>
                       </div>
                       <div className="text-[13px] font-display font-bold text-text-primary group-hover:text-c13-red transition-colors">TEAM_SYNC_0{i+1}</div>
                       <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
                          <span className="text-[10px] font-mono text-status-active font-bold">{slot.fit}</span>
                          <Button size="xs" variant="ghost" className="h-6 px-1 text-[10px] font-mono">
                             SECURE <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                       </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
           </section>

            <section className="bg-bg-surface border border-border-default rounded p-6 space-y-4">
              <h3 className="text-[11px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">CREW_STATUS // LIVE</h3>
              <div className="space-y-4">
                 {[
                   { name: 'N. BHARATH', status: 'OPERATIONAL', color: 'bg-status-active' },
                   { name: 'AKHIL VIPIN NAIR', status: 'BUILDING', color: 'bg-c13-red' },
                   { name: 'G K HARJITH ADITHYHA', status: 'IN_MEETING', color: 'bg-status-warning' },
                   { name: 'PRASEEDA P RAO', status: 'DEEP_WORK', color: 'bg-status-purple' },
                 ].map(member => (
                    <div key={member.name} className="flex items-center justify-between">
                       <div className="flex items-center space-x-3">
                          <div className={cn("h-1.5 w-1.5 rounded-full", member.color)} />
                          <span className="text-[11px] font-mono font-bold text-text-primary">{member.name}</span>
                       </div>
                       <span className="text-[9px] font-mono text-text-tertiary uppercase tracking-wider">{member.status}</span>
                    </div>
                 ))}
              </div>
           </section>
        </div>
      </div>
    </div>
  )
}
