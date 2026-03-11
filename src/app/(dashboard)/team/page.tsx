'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MessageSquare, Clock, AlertCircle, CheckCircle2 } from 'lucide-react'

const mockTeamStatus = [
  { 
    name: 'Bharath', 
    status: 'building', 
    message: 'Working on Team Pulse module', 
    last_active: '2m ago',
    avatar: 'B'
  },
  { 
    name: 'Priya', 
    status: 'available', 
    message: 'Reviewing PRs', 
    last_active: '15m ago',
    avatar: 'P'
  },
  { 
    name: 'Raj', 
    status: 'in_class', 
    message: 'CS Lecture until 1 PM', 
    last_active: '1h ago',
    avatar: 'R'
  },
]

const mockCheckIns = [
  {
    user: 'Bharath',
    yesterday: 'Set up Analytics War Board',
    today: 'Implementing Team Pulse and Settings',
    blockers: 'None',
    time: '09:30 AM'
  },
  {
    user: 'Satwika',
    yesterday: 'Drafted documentation for Event Radar',
    today: 'Integrating Luma API',
    blockers: 'Waiting for Luma API Key',
    time: '10:15 AM'
  }
]

export default function TeamPulsePage() {
  const [statusMessage, setStatusMessage] = useState('')

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center">
            <MessageSquare className="mr-3 h-8 w-8 text-[#E94560]" />
            Team Pulse
          </h1>
          <p className="text-[#A0A0B0] mt-1">Real-time status and daily async check-ins.</p>
        </div>
        <div className="flex space-x-2">
            <Badge className="bg-green-500/10 text-green-500 border-green-500/20">3 Online</Badge>
            <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">2 Focus Mode</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Status Feed */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
            <CardHeader>
              <CardTitle className="text-lg">Set Your Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                placeholder="What are you working on?" 
                value={statusMessage}
                onChange={(e) => setStatusMessage(e.target.value)}
                className="bg-[#1A1A3E] border-[#2A2A4A]"
              />
              <div className="flex flex-wrap gap-2">
                {['Available', 'Building', 'In Class', 'Away'].map(s => (
                  <Button key={s} size="sm" variant="outline" className="text-xs border-[#2A2A4A] hover:bg-[#1A1A3E]">
                    {s}
                  </Button>
                ))}
              </div>
              <Button className="w-full bg-[#E94560] hover:bg-[#d83a54]">Update Status</Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#A0A0B0] uppercase px-2">Team Activity</h3>
            {mockTeamStatus.map((user, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#12122A] border border-[#2A2A4A]">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8 border border-[#2A2A4A]">
                    <AvatarFallback className="bg-[#1A1A3E] text-[#E94560]">{user.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-white">{user.name}</p>
                    <p className="text-xs text-[#A0A0B0]">{user.message}</p>
                  </div>
                </div>
                <div className="text-right">
                   <div className={cn(
                     "h-2 w-2 rounded-full ml-auto mb-1",
                     user.status === 'building' ? 'bg-[#E94560]' : 'bg-green-500'
                   )} />
                   <p className="text-[10px] text-[#505070] uppercase">{user.last_active}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Async Check-ins */}
        <div className="lg:col-span-2 space-y-6">
           <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Daily Check-in</CardTitle>
                    <CardDescription className="text-[#A0A0B0]">Shared with the team every morning.</CardDescription>
                  </div>
                  <Button variant="outline" className="border-[#2A2A4A] text-xs">Edit Response</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                       <label className="text-xs text-[#A0A0B0]">What did you do yesterday?</label>
                       <Textarea className="bg-[#1A1A3E] border-[#2A2A4A] h-20" placeholder="I focused on..." />
                    </div>
                    <div className="space-y-1">
                       <label className="text-xs text-[#A0A0B0]">What are you doing today?</label>
                       <Textarea className="bg-[#1A1A3E] border-[#2A2A4A] h-20" placeholder="I plan to..." />
                    </div>
                 </div>
                 <div className="space-y-1">
                    <label className="text-xs text-[#A0A0B0]">Any blockers?</label>
                    <Input className="bg-[#1A1A3E] border-[#2A2A4A]" placeholder="None" />
                 </div>
                 <Button className="w-full bg-[#E94560] hover:bg-[#d83a54]">Share with Team</Button>
              </CardContent>
           </Card>

           <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#A0A0B0] uppercase px-2 flex items-center">
                <Clock className="mr-2 h-4 w-4" /> Today's Check-ins
              </h3>
              {mockCheckInFeed.map((checkin, i) => (
                <Card key={i} className="border-[#2A2A4A] bg-[#12122A] text-white">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                             <AvatarFallback className="text-[10px] bg-[#1A1A3E]">{checkin.user[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-bold">{checkin.user}</span>
                       </div>
                       <span className="text-[10px] text-[#505070]">{checkin.time}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                       <div>
                          <p className="text-[#A0A0B0] mb-1 flex items-center"><CheckCircle2 className="h-3 w-3 mr-1 text-green-500" /> Yesterday</p>
                          <p>{checkin.yesterday}</p>
                       </div>
                       <div>
                          <p className="text-[#A0A0B0] mb-1 flex items-center"><Clock className="h-3 w-3 mr-1 text-blue-500" /> Today</p>
                          <p>{checkin.today}</p>
                       </div>
                       <div>
                          <p className="text-[#A0A0B0] mb-1 flex items-center"><AlertCircle className="h-3 w-3 mr-1 text-red-500" /> Blockers</p>
                          <p className={checkin.blockers === 'None' ? 'text-[#505070]' : 'text-red-400 font-medium'}>{checkin.blockers}</p>
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

const mockCheckInFeed = [
  ...mockCheckIns
]

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
