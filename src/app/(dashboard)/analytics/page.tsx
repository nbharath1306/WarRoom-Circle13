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
  Cell,
  AreaChart,
  Area
} from 'recharts'
import { BarChart3, TrendingUp, Users, Target, Activity, Zap, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const taskData = [
  { name: 'MON', completed: 12, created: 15 },
  { name: 'TUE', completed: 18, created: 10 },
  { name: 'WED', completed: 8, created: 12 },
  { name: 'THU', completed: 15, created: 15 },
  { name: 'FRI', completed: 22, created: 18 },
]

const eventData = [
  { name: 'OPERATIONAL', value: 45 },
  { name: 'ABORTED', value: 10 },
  { name: 'PENDING', value: 25 },
]

const COLORS = ['#10b981', '#ef4444', '#8b5cf6'] // Green, Red, Purple

export default function AnalyticsPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">BATTLE_STATS // OPERATIONAL_METRICS</span>
           <div className="h-1 w-1 rounded-full bg-status-active animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">ANALYTICS WAR BOARD</h1>
          <div className="flex items-center gap-3">
             <Badge variant="active" className="h-6">LIVE_DATA_FEED</Badge>
          </div>
        </div>
      </header>

      {/* TOP STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'MISSION_EFFICIENCY', value: '85%', icon: Target, trend: '+12%', color: 'text-c13-red' },
          { label: 'OP_VELOCITY', value: '42_PTS', icon: Activity, trend: '+5_PTS', color: 'text-status-active' },
          { label: 'CREW_PULSE', value: '92%', icon: Users, trend: '+2%', color: 'text-status-purple' },
          { label: 'LOGS_COMMITTED', value: '1,240', icon: Zap, trend: '+150', color: 'text-c13-blue' },
        ].map((stat, i) => (
          <Card key={i} className="border-border-default bg-bg-surface overflow-hidden group hover:border-c13-red transition-all">
            <CardContent className="p-5">
               <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded bg-bg-elevated border border-border-subtle group-hover:border-c13-red transition-all ${stat.color}`}>
                    <stat.icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono text-status-active font-bold bg-status-active/10 px-1.5 py-0.5 rounded">{stat.trend}</span>
               </div>
               <div className="space-y-1">
                  <p className="text-2xl font-display font-bold text-text-primary group-hover:text-c13-red transition-colors">{stat.value}</p>
                  <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">{stat.label}</p>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-border-default bg-bg-surface overflow-hidden">
          <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
            <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em]">WEEKLY_OPERATIONAL_FLOW</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-80 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taskData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1A1A3E" vertical={false} opacity={0.3} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#505070" 
                    fontSize={10} 
                    fontFamily="JetBrains Mono" 
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#505070" 
                    fontSize={10} 
                    fontFamily="JetBrains Mono" 
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    cursor={{ fill: '#E9456015' }}
                    contentStyle={{ backgroundColor: '#0A0A1A', border: '1px solid #E9456030', borderRadius: '4px' }}
                    itemStyle={{ color: '#F5F5F5', fontSize: '10px', fontFamily: 'JetBrains Mono', textTransform: 'uppercase' }}
                  />
                  <Bar dataKey="completed" fill="#E94560" radius={[2, 2, 0, 0]} barSize={20} />
                  <Bar dataKey="created" fill="#1A1A3E" radius={[2, 2, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4">
               <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-c13-red" />
                  <span className="text-[9px] font-mono text-text-tertiary uppercase">COMPLETED_OPS</span>
               </div>
               <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-bg-elevated border border-border-subtle" />
                  <span className="text-[9px] font-mono text-text-tertiary uppercase">NEW_TARGETS</span>
               </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border-default bg-bg-surface overflow-hidden">
          <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
            <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em]">MISSION_SUCCESS_DISTRIBUTION</CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="h-80 w-full mt-4">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={eventData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      paddingAngle={8}
                      dataKey="value"
                      stroke="none"
                    >
                      {eventData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.8} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A0A1A', border: '1px solid #E9456030', borderRadius: '4px' }}
                      itemStyle={{ color: '#F5F5F5', fontSize: '10px', fontFamily: 'JetBrains Mono', textTransform: 'uppercase' }}
                    />
                  </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full mt-4">
               {eventData.map((entry, i) => (
                 <div key={i} className="text-center p-2 rounded bg-bg-elevated border border-border-subtle">
                    <p className="text-[14px] font-display font-bold text-text-primary">{entry.value}%</p>
                    <p className="text-[8px] font-mono text-text-tertiary uppercase tracking-tighter" style={{ color: COLORS[i] }}>{entry.name}</p>
                 </div>
               ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* PERFORMANCE LOG */}
      <Card className="border-border-default bg-bg-surface overflow-hidden">
         <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
            <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em]">OPERATIONAL_PERFORMANCE_LOG</CardTitle>
         </CardHeader>
         <CardContent className="p-0">
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-border-subtle bg-bg-void/50">
                        <th className="p-4 text-[10px] font-mono text-text-tertiary uppercase tracking-widest">MISSION_REF</th>
                        <th className="p-4 text-[10px] font-mono text-text-tertiary uppercase tracking-widest">OPERATIVE</th>
                        <th className="p-4 text-[10px] font-mono text-text-tertiary uppercase tracking-widest">STATUS</th>
                        <th className="p-4 text-[10px] font-mono text-text-tertiary uppercase tracking-widest">OUTPUT_SCORE</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                     {[
                        { ref: 'OX-992', user: 'BHARATH', status: 'OPTIMAL', score: '98/100' },
                        { ref: 'OX-841', user: 'PRIYA', status: 'NOMINAL', score: '82/100' },
                        { ref: 'OX-722', user: 'RAJ', status: 'OPTIMAL', score: '94/100' },
                        { ref: 'OX-610', user: 'SATWIKA', status: 'PARTIAL', score: '65/100' },
                     ].map((log, i) => (
                        <tr key={i} className="hover:bg-bg-elevated/30 transition-colors group">
                           <td className="p-4 text-[11px] font-mono text-text-secondary font-bold group-hover:text-c13-red">#{log.ref}</td>
                           <td className="p-4 text-[11px] font-display font-medium text-text-primary">{log.user}</td>
                           <td className="p-4">
                              <Badge variant={log.status === 'OPTIMAL' ? 'active' : log.status === 'NOMINAL' ? 'pending' : 'pending'} className="text-[8px] h-4">
                                {log.status}
                              </Badge>
                           </td>
                           <td className="p-4 text-[11px] font-mono text-text-secondary">{log.score}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </CardContent>
      </Card>
    </div>
  )
}
