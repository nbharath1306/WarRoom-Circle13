'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mockTeam = ['Bharath', 'Priya', 'Raj', 'Satwika', 'Ananya']
const hours = Array.from({ length: 15 }, (_, i) => i + 8) // 8 AM to 10 PM
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

export default function AvailabilityPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Availability Matrix</h1>
        <div className="flex space-x-4">
          <div className="flex items-center text-xs">
            <div className="h-3 w-3 bg-green-500 rounded-sm mr-1" />
            <span className="text-[#A0A0B0]">Free</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="h-3 w-3 bg-yellow-500 rounded-sm mr-1" />
            <span className="text-[#A0A0B0]">Soft Block</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="h-3 w-3 bg-red-500 rounded-sm mr-1" />
            <span className="text-[#A0A0B0]">Hard Block</span>
          </div>
        </div>
      </div>

      <Card className="border-[#2A2A4A] bg-[#12122A] overflow-x-auto">
        <CardContent className="p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left text-xs font-mono text-[#A0A0B0]">Time</th>
                {days.map(day => (
                  <th key={day} className="p-2 text-center text-xs font-bold text-white uppercase tracking-tighter border-l border-[#2A2A4A]">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map(hour => (
                <tr key={hour} className="border-t border-[#2A2A4A]">
                  <td className="p-2 text-[10px] font-mono text-[#E94560] whitespace-nowrap">
                    {hour % 12 || 12}:00 {hour < 12 ? 'AM' : 'PM'}
                  </td>
                  {days.map(day => {
                    // Randomly assign availability for mock view
                    const rand = Math.random()
                    const status = rand > 0.8 ? 'hard' : rand > 0.6 ? 'soft' : 'free'
                    return (
                      <td key={day} className="p-1 border-l border-[#2A2A4A]">
                        <div className={cn(
                          "h-6 rounded-sm transition-all hover:scale-105 cursor-pointer",
                          status === 'free' ? "bg-green-500/20 hover:bg-green-500/40" :
                          status === 'soft' ? "bg-yellow-500/20 hover:bg-yellow-500/40" :
                          "bg-red-500/20 hover:bg-red-500/40"
                        )} />
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
            <CardHeader>
               <CardTitle className="text-lg">Best Slots (2h Duration)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               {[
                 { time: 'Thursday, 4:00 PM - 6:00 PM', fit: '5/5 members free' },
                 { time: 'Friday, 10:00 AM - 12:00 PM', fit: '4/5 members free' },
                 { time: 'Wednesday, 2:00 PM - 4:00 PM', fit: '4/5 members free' },
               ].map((slot, i) => (
                 <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#1A1A3E] border border-[#2A2A4A]">
                    <div className="text-sm">
                       <p className="font-medium">{slot.time}</p>
                       <p className="text-xs text-green-400">{slot.fit}</p>
                    </div>
                    <Button size="sm" className="bg-[#E94560] h-7 text-xs">Schedule</Button>
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
