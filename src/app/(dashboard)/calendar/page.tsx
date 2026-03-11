'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from 'lucide-react'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const currentDate = new Date()
const monthName = currentDate.toLocaleString('default', { month: 'long' })
const year = currentDate.getFullYear()

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <CalendarIcon className="mr-3 h-8 w-8 text-[#E94560]" />
          Unified Calendar
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-[#12122A] border border-[#2A2A4A] rounded-md px-2 py-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#A0A0B0] hover:text-white">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="mx-2 text-sm font-medium text-white">{monthName} {year}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#A0A0B0] hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button className="bg-[#E94560] text-white hover:bg-[#d83a54]">
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px rounded-xl overflow-hidden border border-[#2A2A4A] bg-[#2A2A4A]">
        {daysOfWeek.map(day => (
          <div key={day} className="bg-[#1A1A3E] p-3 text-center text-xs font-bold text-[#A0A0B0] uppercase">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }, (_, i) => {
          const dayNum = i - 2 // Simple mock logic
          const isToday = dayNum === 11
          return (
            <div key={i} className="bg-[#12122A] min-h-[120px] p-2 hover:bg-[#1A1A3E] transition-colors group">
              <div className="flex justify-between">
                <span className={cn(
                  "text-xs font-medium h-6 w-6 flex items-center justify-center rounded-full",
                  isToday ? "bg-[#E94560] text-white" : "text-[#A0A0B0]"
                )}>
                  {dayNum > 0 && dayNum <= 31 ? dayNum : ''}
                </span>
              </div>
              <div className="mt-2 space-y-1">
                {dayNum === 11 && (
                   <>
                     <div className="text-[10px] bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded truncate">CS101 Lecture</div>
                     <div className="text-[10px] bg-[#E94560]/20 text-[#E94560] px-1.5 py-0.5 rounded truncate">Team Sync</div>
                   </>
                )}
                {dayNum === 15 && (
                   <div className="text-[10px] bg-blue-500/20 text-blue-500 px-1.5 py-0.5 rounded truncate">MLH Hackathon</div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
            <CardHeader>
               <CardTitle className="text-sm">Calendar Layers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               {[
                 { label: 'College Timetable', color: 'bg-green-500', active: true },
                 { label: 'Circle13 Tasks', color: 'bg-[#E94560]', active: true },
                 { label: 'External Events', color: 'bg-blue-500', active: true },
                 { label: 'Personal Focus', color: 'bg-purple-500', active: false },
               ].map((layer, i) => (
                 <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                       <div className={cn("h-3 w-3 rounded-sm mr-2", layer.color)} />
                       {layer.label}
                    </div>
                    <Switch defaultChecked={layer.active} />
                 </div>
               ))}
            </CardContent>
         </Card>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function Switch({ defaultChecked }: { defaultChecked?: boolean }) {
  return (
    <div className={cn(
      "w-8 h-4 rounded-full p-0.5 transition-colors",
      defaultChecked ? "bg-[#E94560]" : "bg-[#1A1A3E]"
    )}>
      <div className={cn(
        "bg-white w-3 h-3 rounded-full shadow-sm transition-transform",
        defaultChecked ? "translate-x-4" : "translate-x-0"
      )} />
    </div>
  )
}
