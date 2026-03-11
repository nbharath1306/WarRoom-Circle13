'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, Trash2, Save, Upload, Calendar, Clock, BookOpen, ArrowRight, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

import { useTimetable } from '@/hooks/use-timetable'

const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']

export default function TimetablePage() {
  const { blocks, setBlocks, loading, saveSchedule } = useTimetable()

  if (loading) {
     return (
        <div className="h-96 flex items-center justify-center">
           <div className="flex flex-col items-center space-y-4">
              <Calendar className="h-8 w-8 text-status-purple animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">UPLINKING_SCHEDULE_DATA...</span>
           </div>
        </div>
     )
  }

  const addBlock = () => {
    setBlocks([...blocks, { day: 0, start: '09:00', end: '10:00', course: '' }])
  }

  const removeBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">TIMETABLE_SUBSYSTEM // SCHEDULING</span>
           <div className="h-1 w-1 rounded-full bg-status-purple animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">TACTICAL SCHEDULE</h1>
          <div className="flex items-center gap-3">
             <Button variant="outline" className="h-10 border-border-default bg-bg-elevated/50 hover:border-c13-red transition-all font-mono text-[10px] tracking-widest uppercase">
                <Upload className="mr-2 h-4 w-4" />
                IMPORT_OCR
             </Button>
             <Button onClick={addBlock} className="bg-c13-red text-white h-10 shadow-[0_0_15px_var(--c13-red-glow)] font-mono text-[10px] tracking-widest uppercase">
                <Plus className="mr-2 h-4 w-4" />
                APPEND_BLOCK
             </Button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {blocks.map((block, index) => (
          <Card key={index} className="border-border-default bg-bg-surface hover:border-c13-red transition-all group overflow-hidden">
            <CardContent className="flex flex-col md:flex-row items-center p-6 gap-6">
               <div className="flex items-center space-x-4 w-full md:w-auto">
                  <div className="h-10 w-10 shrink-0 bg-bg-elevated border border-border-subtle rounded flex items-center justify-center">
                     <Clock className="h-5 w-5 text-c13-red" />
                  </div>
                  <div className="space-y-1">
                     <div className="text-[10px] font-mono font-bold text-text-tertiary uppercase tracking-widest">TIME_BLOCK</div>
                     <div className="flex items-center space-x-2">
                        <Input 
                          type="time" 
                          value={block.start} 
                          className="w-24 h-8 bg-bg-void border-border-subtle font-mono text-xs focus:ring-c13-red"
                          onChange={(e) => {
                            const newBlocks = [...blocks]
                            newBlocks[index].start = e.target.value
                            setBlocks(newBlocks)
                          }}
                        />
                        <span className="text-text-tertiary font-mono text-xs">→</span>
                        <Input 
                          type="time" 
                          value={block.end} 
                          className="w-24 h-8 bg-bg-void border-border-subtle font-mono text-xs focus:ring-c13-red"
                          onChange={(e) => {
                            const newBlocks = [...blocks]
                            newBlocks[index].end = e.target.value
                            setBlocks(newBlocks)
                          }}
                        />
                     </div>
                  </div>
               </div>

               <div className="h-px md:h-12 w-full md:w-px bg-border-subtle" />

               <div className="space-y-1 flex-1 w-full md:w-auto">
                  <div className="text-[10px] font-mono font-bold text-text-tertiary uppercase tracking-widest">MISSION_TARGET</div>
                  <Input 
                    placeholder="ENTER MISSION NAME..." 
                    value={block.course} 
                    className="h-10 bg-bg-void border-border-subtle font-display font-bold text-text-primary placeholder:text-text-tertiary/30 focus:ring-c13-red"
                    onChange={(e) => {
                      const newBlocks = [...blocks]
                      newBlocks[index].course = e.target.value
                      setBlocks(newBlocks)
                    }}
                  />
               </div>

               <div className="h-px md:h-12 w-full md:w-px bg-border-subtle" />

               <div className="space-y-1 w-full md:w-48">
                  <div className="text-[10px] font-mono font-bold text-text-tertiary uppercase tracking-widest">ASSIGN_DAY</div>
                  <select 
                    value={block.day} 
                    onChange={(e) => {
                      const newBlocks = [...blocks]
                      newBlocks[index].day = parseInt(e.target.value)
                      setBlocks(newBlocks)
                    }}
                    className="w-full h-10 bg-bg-void border-border-default rounded-md px-3 font-mono text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-c13-red"
                  >
                    {days.map((day, i) => (
                      <option key={i} value={i}>{day}</option>
                    ))}
                  </select>
               </div>

               <Button variant="ghost" size="icon" onClick={() => removeBlock(index)} className="text-status-error hover:bg-status-error/10 shrink-0 self-end md:self-center">
                 <Trash2 className="h-5 w-5" />
               </Button>
            </CardContent>
          </Card>
        ))}
        
        {blocks.length === 0 && (
           <div className="h-40 border border-dashed border-border-subtle rounded-lg flex flex-col items-center justify-center space-y-4 text-text-tertiary">
              <Activity className="h-8 w-8 opacity-20" />
              <p className="font-mono text-xs tracking-widest uppercase">NO_SCHEDULE_DATA // SYSTEM_IDLE</p>
           </div>
        )}
      </div>

      <div className="flex justify-between items-center bg-bg-elevated/30 p-6 rounded-lg border border-border-subtle/50">
         <div className="flex items-center space-x-4">
            <div className="h-2 w-2 rounded-full bg-status-active animate-pulse" />
            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-[0.2em]">LOCAL_SYNC: STABLE</span>
         </div>
         <Button 
            onClick={() => saveSchedule(blocks)}
            className="bg-status-active text-white h-10 shadow-[0_0_15px_var(--status-active-glow)] font-mono text-xs tracking-widest uppercase px-8"
         >
           <Save className="mr-2 h-4 w-4" />
           COMMIT_CHANGES
         </Button>
      </div>
    </div>
  )
}
