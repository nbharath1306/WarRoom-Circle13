'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Scan, Layers, Shield, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const currentDate = new Date()
const monthName = currentDate.toLocaleString('default', { month: 'long' }).toUpperCase()
const year = currentDate.getFullYear()

export default function CalendarPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">COMMAND_TIMELINE // OPERATIONAL_SCHEDULE</span>
           <div className="h-1 w-1 rounded-full bg-status-active animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">UNIFIED CALENDAR</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-bg-surface border border-border-default rounded-md px-2 py-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-text-tertiary hover:text-c13-red">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="mx-4 text-xs font-mono font-bold text-text-primary tracking-widest">{monthName} {year}</span>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-text-tertiary hover:text-c13-red">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Button className="bg-c13-red text-white h-10 shadow-[0_0_15px_var(--c13-red-glow)] font-mono text-xs tracking-widest px-6">
              <Plus className="mr-2 h-4 w-4" />
              RECORD_EVENT
            </Button>
          </div>
        </div>
      </header>

      {/* CALENDAR GRID */}
      <div className="rounded-xl overflow-hidden border border-border-default bg-border-default shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-7 gap-px">
          {daysOfWeek.map(day => (
            <div key={day} className="bg-bg-elevated/50 p-4 text-center text-[10px] font-mono font-bold text-text-tertiary tracking-[0.2em] border-b border-border-subtle">
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }, (_, i) => {
            const dayNum = i - 2 // Simple mock logic for demonstration
            const isToday = dayNum === 11
            const isCurrentMonth = dayNum > 0 && dayNum <= 31
            
            return (
              <div 
                key={i} 
                className={cn(
                  "bg-bg-surface min-h-[140px] p-3 transition-all group relative",
                  !isCurrentMonth ? "bg-bg-void/40 opacity-30" : "hover:bg-bg-elevated/40"
                )}
              >
                <div className="flex justify-between items-start">
                  <span className={cn(
                    "text-[11px] font-mono font-bold h-6 w-6 flex items-center justify-center rounded transition-all",
                    isToday ? "bg-c13-red text-white shadow-[0_0_10px_var(--c13-red-glow)]" : "text-text-tertiary group-hover:text-text-primary"
                  )}>
                    {isCurrentMonth ? dayNum.toString().padStart(2, '0') : ''}
                  </span>
                  {isToday && <div className="text-[8px] font-mono text-c13-red animate-pulse">LIVE</div>}
                </div>
                
                <div className="mt-4 space-y-1.5 overflow-hidden">
                  {dayNum === 11 && (
                     <>
                       <div className="text-[9px] font-mono bg-status-active/10 text-status-active border border-status-active/20 px-2 py-1 rounded-sm truncate uppercase tracking-tighter shadow-[0_0_5px_rgba(16,185,129,0.1)]">
                          CS101_ARCH_LECTURE
                       </div>
                       <div className="text-[9px] font-mono bg-c13-red/10 text-c13-red border border-c13-red/20 px-2 py-1 rounded-sm truncate uppercase tracking-tighter shadow-[0_0_5px_rgba(233,69,96,0.1)]">
                          CIRCLE13_SYNC
                       </div>
                     </>
                  )}
                  {dayNum === 15 && (
                     <div className="text-[9px] font-mono bg-status-purple/10 text-status-purple border border-status-purple/20 px-2 py-1 rounded-sm truncate uppercase tracking-tighter shadow-[0_0_5px_rgba(139,92,246,0.1)]">
                        MLH_GLOBAL_SCRIM
                     </div>
                  )}
                  {isCurrentMonth && Math.random() > 0.8 && dayNum !== 11 && dayNum !== 15 && (
                     <div className="text-[9px] font-mono bg-c13-blue/10 text-c13-blue border border-c13-blue/20 px-2 py-1 rounded-sm truncate uppercase tracking-tighter">
                        ROUTINE_OPS
                     </div>
                  )}
                </div>
                
                {isCurrentMonth && (
                  <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-c13-red">
                    <Plus className="h-3 w-3" />
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
      
      {/* CALENDAR CONTROLS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <Card className="border-border-default bg-bg-surface overflow-hidden md:col-span-1">
            <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5 flex flex-row items-center justify-between space-y-0">
               <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em]">TACTICAL_LAYERS</CardTitle>
               <Layers className="h-4 w-4 text-text-tertiary" />
            </CardHeader>
            <CardContent className="p-5 space-y-4">
               {[
                 { label: 'COLLEGE_TIMETABLE', color: 'bg-status-active', active: true },
                 { label: 'MISSION_TARGETS', color: 'bg-c13-red', active: true },
                 { label: 'INTEL_RADAR_EVENTS', color: 'bg-status-purple', active: true },
                 { label: 'PERSONAL_FOCUS_CORE', color: 'bg-c13-blue', active: false },
               ].map((layer, i) => (
                 <div key={i} className="flex items-center justify-between group cursor-pointer p-1 rounded hover:bg-bg-elevated/50 transition-colors">
                    <div className="flex items-center text-[10px] font-mono text-text-secondary tracking-widest">
                       <div className={cn("h-2.5 w-2.5 rounded-sm mr-3 shadow-sm", layer.color)} />
                       {layer.label}
                    </div>
                    <Switch defaultChecked={layer.active} />
                 </div>
               ))}
            </CardContent>
         </Card>

         <Card className="border-border-default bg-bg-surface overflow-hidden md:col-span-2">
            <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5 flex flex-row items-center justify-between space-y-0">
               <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em]">TIMELINE_INTEL</CardTitle>
               <Scan className="h-4 w-4 text-c13-red animate-pulse" />
            </CardHeader>
            <CardContent className="p-6">
               <div className="flex flex-col sm:flex-row items-center gap-8 justify-around h-full py-4">
                  <div className="text-center space-y-2">
                     <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">NEXT_24H_LOAD</p>
                     <p className="text-3xl font-display font-bold text-text-primary">03_EVENTS</p>
                     <Badge variant="active" className="text-[8px]">LOW_CONFLICT</Badge>
                  </div>
                  <div className="h-16 w-px bg-border-subtle hidden sm:block" />
                  <div className="text-center space-y-2">
                     <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">PEAK_DENSITY</p>
                     <p className="text-3xl font-display font-bold text-text-primary">FRI_14:00</p>
                     <Badge variant="pending" className="text-[8px]">HIGH_DENSITY</Badge>
                  </div>
                  <div className="h-16 w-px bg-border-subtle hidden sm:block" />
                  <div className="text-center space-y-2">
                     <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">FREE_WINDOW</p>
                     <p className="text-3xl font-display font-bold text-text-primary">SAT_ALL_DAY</p>
                     <Badge variant="active" className="text-[8px]">OPTIMAL_RECOVERY</Badge>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  )
}

function Switch({ defaultChecked }: { defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked)
  return (
    <div 
      onClick={() => setChecked(!checked)}
      className={cn(
        "w-8 h-4 rounded-full p-0.5 transition-all cursor-pointer border",
        checked ? "bg-c13-red border-c13-red shadow-[0_0_8px_var(--c13-red-glow)]" : "bg-bg-void border-border-default"
      )}
    >
      <div className={cn(
        "bg-white w-2.5 h-2.5 rounded-full shadow-sm transition-transform duration-200",
        checked ? "translate-x-4" : "translate-x-0"
      )} />
    </div>
  )
}
