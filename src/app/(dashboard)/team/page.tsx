'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MessageSquare, Clock, AlertCircle, CheckCircle2, Zap, Activity, Shield, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const mockTeamStatus = [
  { 
    name: 'BHARATH', 
    status: 'building', 
    message: 'OPTIMIZING_CORE_OPS', 
    last_active: '2M_AGO',
    avatar: 'B'
  },
  { 
    name: 'PRIYA', 
    status: 'available', 
    message: 'REVIEWING_INTEL', 
    last_active: '15M_AGO',
    avatar: 'P'
  },
  { 
    name: 'RAJ', 
    status: 'in_class', 
    message: 'CS301_LECTURE', 
    last_active: '1H_AGO',
    avatar: 'R'
  },
]

const mockCheckInFeed = [
  {
    user: 'BHARATH',
    yesterday: 'DEPLOYED_ANALYTICS_BOARD',
    today: 'SYSTEM_WIDE_REFACTOR',
    blockers: 'NONE',
    time: '09:30_AM'
  },
  {
    user: 'SATWIKA',
    yesterday: 'INTEL_RADAR_DOCS',
    today: 'LUMA_API_SYNC',
    blockers: 'KEY_PENDING',
    time: '10:15_AM'
  }
]

export default function TeamPulsePage() {
  const [statusMessage, setStatusMessage] = useState('')

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">CREW_PULSE // MONITORING</span>
           <div className="h-1 w-1 rounded-full bg-status-active animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">TEAM PULSE</h1>
          <div className="flex items-center gap-3">
             <Badge variant="active" className="h-6">3_OPERATIONAL</Badge>
             <Badge variant="pending" className="h-6">2_FOCUS_MODE</Badge>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Status Feed */}
        <div className="lg:col-span-1 space-y-8">
          <Card className="border-border-default bg-bg-surface overflow-hidden">
            <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
              <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em]">TRANSMIT_STATUS</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-1">
                 <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest mb-1">CURRENT_ACTIVITY</div>
                 <Input 
                   placeholder="WHAT ARE YOU BUILDING?" 
                   value={statusMessage}
                   onChange={(e) => setStatusMessage(e.target.value)}
                   className="bg-bg-void border-border-subtle font-mono text-xs focus:ring-c13-red"
                 />
              </div>
              <div className="flex flex-wrap gap-2">
                {['AVAILABLE', 'BUILDING', 'IN_CLASS', 'AWAY'].map(s => (
                  <Button key={s} size="xs" variant="outline" className="text-[9px] font-mono tracking-tighter border-border-subtle hover:border-c13-red">
                    {s}
                  </Button>
                ))}
              </div>
              <Button className="w-full bg-c13-red text-white h-10 shadow-[0_0_15px_var(--c13-red-glow)] font-mono text-xs tracking-widest">UPDATE_TRANSMISSION</Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] px-2">CREW_ACTIVITY</h3>
            {mockTeamStatus.map((user, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-bg-surface border border-border-default hover:border-c13-red transition-all group">
                <div className="flex items-center space-x-4">
                  <div className="h-9 w-9 bg-bg-elevated border border-border-subtle rounded flex items-center justify-center text-xs font-mono font-bold text-c13-red">
                    {user.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-display font-bold text-text-primary group-hover:text-c13-red transition-colors">{user.name}</p>
                    <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider">{user.message}</p>
                  </div>
                </div>
                <div className="text-right">
                   <div className={cn(
                     "h-1.5 w-1.5 rounded-full ml-auto mb-1 animate-pulse",
                     user.status === 'building' ? 'bg-c13-red shadow-[0_0_8px_var(--c13-red-glow)]' : 'bg-status-active shadow-[0_0_8px_var(--status-active-glow)]'
                   )} />
                   <p className="text-[9px] font-mono text-text-tertiary uppercase">{user.last_active}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Async Check-ins */}
        <div className="lg:col-span-2 space-y-8">
           <Card className="border-border-default bg-bg-surface overflow-hidden">
              <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em]">DAILY_SYNC_LOG</CardTitle>
                    <CardDescription className="text-[10px] font-mono text-text-tertiary uppercase mt-1">BROADCAST_DETAILS_FOR_03.11.26</CardDescription>
                  </div>
                  <Button variant="outline" size="xs" className="text-[9px] font-mono tracking-widest border-border-subtle">EDIT_RESPONSE</Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">PAST_OPS (YESTERDAY)</label>
                       <Textarea className="bg-bg-void border-border-subtle h-24 font-mono text-xs focus:ring-c13-red" placeholder="SUMMARIZE ACTIONS..." />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">ACTIVE_OPS (TODAY)</label>
                       <Textarea className="bg-bg-void border-border-subtle h-24 font-mono text-xs focus:ring-c13-red" placeholder="OUTLINE TARGETS..." />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">THREAT_IDENTIFICATION (BLOCKERS)</label>
                    <Input className="bg-bg-void border-border-subtle font-mono text-xs focus:ring-c13-red" placeholder="SPECIFY BLOCKERS OR 'NONE'..." />
                 </div>
                 <Button className="w-full bg-status-active text-white h-12 shadow-[0_0_15px_var(--status-active-glow)] font-mono text-xs tracking-[0.2em] uppercase">INITIATE_BROADCAST</Button>
              </CardContent>
           </Card>

           <div className="space-y-4">
              <h3 className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] px-2 flex items-center">
                <Activity className="mr-2 h-4 w-4 text-c13-red" /> LOGGED_TRANSMISSIONS
              </h3>
              {mockCheckInFeed.map((checkin, i) => (
                <Card key={i} className="border-border-default bg-bg-surface hover:border-c13-red transition-all overflow-hidden group">
                  <CardContent className="p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                       <div className="flex items-center space-x-3">
                          <div className="h-6 w-6 bg-bg-elevated border border-border-subtle rounded flex items-center justify-center text-[10px] font-mono font-bold text-text-secondary">
                             {checkin.user[0]}
                          </div>
                          <span className="text-sm font-display font-bold text-text-primary group-hover:text-c13-red transition-colors">{checkin.user}</span>
                       </div>
                       <Badge variant="outline" className="h-5 text-[9px] font-mono border-border-subtle text-text-tertiary">{checkin.time}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div className="space-y-1">
                          <p className="text-[9px] font-mono text-text-tertiary uppercase tracking-widest flex items-center"><CheckCircle2 className="h-3 w-3 mr-1.5 text-status-active" /> YESTERDAY</p>
                          <p className="text-[11px] font-mono text-text-primary leading-tight uppercase">{checkin.yesterday}</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[9px] font-mono text-text-tertiary uppercase tracking-widest flex items-center"><Zap className="h-3 w-3 mr-1.5 text-status-purple" /> TODAY</p>
                          <p className="text-[11px] font-mono text-text-primary leading-tight uppercase">{checkin.today}</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[9px] font-mono text-text-tertiary uppercase tracking-widest flex items-center"><Shield className="h-3 w-3 mr-1.5 text-status-error" /> BLOCKERS</p>
                          <p className={cn(
                             "text-[11px] font-mono leading-tight uppercase",
                             checkin.blockers === 'NONE' ? 'text-text-tertiary' : 'text-status-error font-black'
                          )}>{checkin.blockers}</p>
                       </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
           </div>
        </div>
      </div>
    </div>
  )
}
