import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, CheckCircle2, Clock, MapPin, Calendar as CalendarIcon, MessageSquare, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
  const currentDate = "13.03.26 // WEDNESDAY // 14:32 IST"

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">MISSION_CONTROL // LIVE</span>
          <div className="h-1 w-1 rounded-full bg-status-active animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">MISSION CONTROL</h1>
          <div className="text-text-code font-mono text-xs md:text-sm font-bold tracking-wider bg-text-code/5 px-3 py-1 rounded border border-text-code/10">
            {currentDate}
          </div>
        </div>
      </header>

      {/* Hero Banner — NEXT_EVENT */}
      <section className="relative overflow-hidden rounded-lg bg-bg-surface border border-border-default border-l-4 border-l-c13-red p-6 md:p-8 hover:border-c13-red transition-all group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <CalendarIcon className="h-32 w-32 -rotate-12" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-4">
            <div className="space-y-1 text-mono">
               <span className="text-[10px] font-bold tracking-widest text-c13-red uppercase">NEXT_EVENT // DETECTED</span>
               <h2 className="text-xl md:text-2xl font-display font-bold text-text-primary">AI Builder Meetup @ Koramangala</h2>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-text-secondary font-mono text-xs">
              <div className="flex items-center bg-bg-elevated px-2 py-1 rounded">
                <Clock className="mr-2 h-3 w-3 text-status-info" />
                <span>16:30 - 18:30</span>
              </div>
              <div className="flex items-center bg-bg-elevated px-2 py-1 rounded">
                <MapPin className="mr-2 h-3 w-3 text-text-code" />
                <span>LOC: KORAMANGALA, BLR</span>
              </div>
              <div className="flex items-center bg-bg-elevated px-2 py-1 rounded">
                <CalendarIcon className="mr-2 h-3 w-3 text-status-warning" />
                <span>CREW: 5/6 CONFIRMED</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-3xl font-mono font-bold text-text-primary tracking-tighter">02h 15m</div>
            <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">SIGNAL_STRENGTH: 92%</div>
            <Button size="sm" className="mt-2 bg-c13-red text-white font-mono text-[11px] px-6">
              ACQUIRE_TARGET <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Left Column — TODAY_AGENDA */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="h-px flex-1 bg-border-subtle" />
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase px-4">TODAY_AGENDA</h2>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
          <div className="space-y-3">
            {[
              { time: '09:00', title: 'CS301 DATA_STRUCTURES', type: 'class', status: 'COMPLETED ✓', color: 'text-status-active' },
              { time: '11:00', title: 'FREE_SLOT // DEEP_WORK', type: 'focus', status: 'AVAILABLE', color: 'text-text-tertiary' },
              { time: '14:30', title: 'AI_BUILDER_MEETUP', type: 'meeting', status: 'UPCOMING', color: 'text-c13-red' },
              { time: '18:00', title: 'FOCUS_BLOCK // BUILD', type: 'focus', status: 'SCHEDULED', color: 'text-status-purple' },
            ].map((item, i) => (
              <Card key={i} className="hover:translate-x-1 transition-transform cursor-pointer overflow-hidden border-border-default bg-bg-surface group">
                <CardContent className="flex items-center p-0 h-16">
                  <div className="w-16 h-full flex flex-col items-center justify-center bg-bg-elevated border-r border-border-subtle">
                    <span className="text-xs font-mono font-bold text-text-primary">{item.time}</span>
                  </div>
                  <div className="flex-1 px-4 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-display font-semibold text-text-primary group-hover:text-c13-red transition-colors">{item.title}</div>
                      <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider">{item.type}</div>
                    </div>
                    <span className={cn("text-[10px] font-mono font-bold tracking-widest", item.color)}>
                      {item.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Right Column — ACTION_STREAM */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="h-px flex-1 bg-border-subtle" />
            <h2 className="text-[11px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase px-4">ACTION_STREAM // LIVE</h2>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
          <div className="space-y-6 px-4">
            {[
              { user: 'BHARATH', action: 'DEPLOYED_EVENT', target: 'Luma AI Meetup', time: '10M AGO', sub: 'SYNC_COMPLETE' },
              { user: 'AKHIL', action: 'COMPLETED_MISSION', target: 'Fix login redirect bug', time: '1H AGO', sub: 'COMMIT: 45fda6e' },
              { user: 'CIRCLE_BRAIN', action: 'NEW_SIGNAL', target: 'GenAI Conf', time: '2H AGO', sub: 'REL_SCORE: 78' },
              { user: 'DAVE', action: 'STATUS_UPDATE', target: 'IN_CLASS', time: '4H AGO', sub: 'CS301 LECTURE' },
            ].map((item, i) => (
              <div key={i} className="relative flex space-x-4 group">
                {/* Visual Connector tag was here */}
                {i < 3 && <div className="absolute left-[7px] top-6 w-[2px] h-10 bg-border-subtle" />}
                
                <div className="h-4 w-4 mt-1 rounded-sm bg-bg-elevated border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-c13-red transition-colors">
                  <div className="h-1.5 w-1.5 rounded-full bg-c13-red animate-pulse-dot" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[11px] font-mono">
                    <span className="text-text-primary font-bold tracking-wider">{item.user}</span>
                    <span className="text-text-tertiary tracking-widest">{item.action}</span>
                  </div>
                  <div className="text-sm font-display font-medium text-text-primary group-hover:text-c13-red transition-colors">{item.target}</div>
                  <div className="flex items-center space-x-3 text-[10px] font-mono">
                    <span className="text-text-tertiary bg-bg-elevated px-1.5 py-0.5 rounded border border-border-subtle">{item.sub}</span>
                    <span className="text-text-tertiary uppercase">{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* HORIZON_7D // UPCOMING_MISSIONS */}
      <section className="space-y-6 pt-6">
        <header className="flex items-center justify-between border-b border-border-subtle pb-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-[11px] font-mono font-bold tracking-[.2em] text-text-secondary uppercase">HORIZON_7D // UPCOMING_MISSIONS</h2>
          </div>
          <Link href="/radar" className="text-[10px] font-mono text-c13-red hover:underline tracking-widest font-bold">VIEW_ALL_TRANSMISSIONS →</Link>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day, i) => (
            <div key={day} className="bg-bg-surface border border-border-default rounded p-4 space-y-3 hover:border-c13-red transition-all cursor-pointer group">
               <div className="text-[11px] font-mono font-bold text-text-secondary group-hover:text-c13-red transition-colors">{day}</div>
               <div className="flex items-end justify-between">
                  <div className="text-2xl font-mono font-bold text-text-primary tracking-tighter">{[3, 1, 5, 0, 2][i]}</div>
                  <div className="text-[10px] font-mono text-text-tertiary uppercase">missions</div>
               </div>
               <div className="h-1.5 w-full bg-bg-elevated rounded-full overflow-hidden">
                  <div className="h-full bg-c13-red" style={{ width: `${[30, 10, 50, 0, 20][i]}%` }} />
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
