import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, CheckCircle2, Clock, MapPin, Calendar as CalendarIcon } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Hero Panel */}
      <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#12122A] to-[#1A1A3E] p-8 border border-[#2A2A4A]">
        <div>
          <h1 className="text-3xl font-bold text-white">Good Morning, Circle13</h1>
          <p className="mt-2 text-[#A0A0B0]">Next Event: Team Sync in 2h 15m</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-[#E94560]">10:45 AM</p>
          <p className="text-[#A0A0B0]">Wednesday, March 11</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column — Today's Agenda */}
        <div className="space-y-6">
          <h2 className="flex items-center text-xl font-semibold text-white">
            <CalendarIcon className="mr-2 h-5 w-5 text-[#E94560]" />
            Today's Agenda
          </h2>
          <div className="space-y-4">
            {[
              { time: '09:00 AM', title: 'CS101 Lecture', type: 'class', location: 'Hall A' },
              { time: '01:30 PM', title: 'Team Sync', type: 'meeting', location: 'Discord' },
              { time: '04:00 PM', title: 'Deep Work: Dashboard UI', type: 'focus' },
            ].map((item, i) => (
              <Card key={i} className="border-[#2A2A4A] bg-[#12122A] text-white">
                <CardContent className="flex items-center p-4">
                  <div className="mr-4 text-xs font-mono text-[#E94560]">{item.time}</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.title}</div>
                    {item.location && (
                      <div className="flex items-center text-xs text-[#A0A0B0]">
                        <MapPin className="mr-1 h-3 w-3" />
                        {item.location}
                      </div>
                    )}
                  </div>
                  <div className={item.type === 'class' ? 'h-2 w-2 rounded-full bg-green-500' : 'h-2 w-2 rounded-full bg-[#E94560]'} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Center Column — Action Stream */}
        <div className="space-y-6 lg:col-span-1">
          <h2 className="text-xl font-semibold text-white">Action Stream</h2>
          <div className="space-y-4">
            {[
              { user: 'Bharath', action: 'added a new event', target: 'Luma AI Meetup', time: '10m ago' },
              { user: 'Priya', action: 'completed task', target: 'Design Logo', time: '1h ago' },
              { user: 'Circle Brain', action: 'suggested a meeting', target: 'Code Review', time: '2h ago' },
            ].map((item, i) => (
              <div key={i} className="flex space-x-3 text-sm">
                <div className="h-2 w-2 mt-1.5 rounded-full bg-[#E94560]" />
                <div>
                  <span className="font-semibold text-white">{item.user}</span>{' '}
                  <span className="text-[#A0A0B0]">{item.action}</span>{' '}
                  <span className="font-medium text-[#F5F5F5]">{item.target}</span>
                  <div className="text-xs text-[#A0A0B0] uppercase mt-1">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Quick Actions */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4">
            <Link href="/tasks">
              <Button className="w-full h-12 justify-start bg-[#12122A] border border-[#2A2A4A] hover:bg-[#1A1A3E]">
                <Plus className="mr-2 h-4 w-4 text-[#E94560]" />
                Create Task
              </Button>
            </Link>
            <Link href="/timetable">
              <Button className="w-full h-12 justify-start bg-[#12122A] border border-[#2A2A4A] hover:bg-[#1A1A3E]">
                <CheckCircle2 className="mr-2 h-4 w-4 text-[#E94560]" />
                Update Timetable
              </Button>
            </Link>
            <Link href="/team">
              <Button className="w-full h-12 justify-start bg-[#12122A] border border-[#2A2A4A] hover:bg-[#1A1A3E]">
                <MessageSquare className="mr-2 h-4 w-4 text-[#E94560]" />
                Team Pulse
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
