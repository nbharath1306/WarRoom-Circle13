'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { BarChart3, TrendingUp, Users, Target } from 'lucide-react'

const taskData = [
  { name: 'Mon', completed: 12, created: 15 },
  { name: 'Tue', completed: 18, created: 10 },
  { name: 'Wed', completed: 8, created: 12 },
  { name: 'Thu', completed: 15, created: 15 },
  { name: 'Fri', completed: 22, created: 18 },
]

const eventData = [
  { name: 'Attended', value: 45 },
  { name: 'Missed', value: 10 },
  { name: 'Pending', value: 25 },
]

const COLORS = ['#E94560', '#1A1A3E', '#0F3460']

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <BarChart3 className="mr-3 h-8 w-8 text-[#E94560]" />
          Analytics War Board
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Event ROI', value: '85%', icon: Target, trend: '+12%' },
          { label: 'Team Velocity', value: '42 pts', icon: TrendingUp, trend: '+5 pts' },
          { label: 'Participation', value: '92%', icon: Users, trend: '+2%' },
          { label: 'Tasks Done', value: '1,240', icon: BarChart3, trend: '+150' },
        ].map((stat, i) => (
          <Card key={i} className="border-[#2A2A4A] bg-[#12122A] text-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                  <stat.icon className="h-6 w-6 text-[#E94560]" />
                  <span className="text-xs text-green-500 font-medium">{stat.trend}</span>
               </div>
               <div className="mt-4">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-[#A0A0B0] uppercase">{stat.label}</p>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
          <CardHeader>
            <CardTitle className="text-lg">Weekly Task Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taskData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1A1A3E" vertical={false} />
                  <XAxis dataKey="name" stroke="#505070" fontSize={12} />
                  <YAxis stroke="#505070" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#12122A', border: '1px solid #2A2A4A' }}
                    itemStyle={{ color: '#F5F5F5' }}
                  />
                  <Bar dataKey="completed" fill="#E94560" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="created" fill="#0F3460" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
          <CardHeader>
            <CardTitle className="text-lg">Event Participation Rate</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={eventData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {eventData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#12122A', border: '1px solid #2A2A4A' }}
                    />
                  </PieChart>
               </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
