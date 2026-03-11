'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { 
  Settings, 
  Key, 
  Bell, 
  Webhook, 
  Bot, 
  Database, 
  Globe,
  Lock,
  MessageSquare,
  Shield,
  Activity,
  Cpu
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">SYSTEM_CONFIG // ACCESS_CONTROL</span>
           <div className="h-1 w-1 rounded-full bg-c13-red animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">COMMAND CENTER</h1>
          <div className="flex items-center gap-3">
             <Badge variant="active" className="h-6 text-[10px] font-mono uppercase">ADMIN_AUTHENTICATED</Badge>
          </div>
        </div>
      </header>

      <Tabs defaultValue="integrations" className="w-full">
        <TabsList className="bg-bg-surface border border-border-default p-1 mb-8 h-12">
          <TabsTrigger 
            value="integrations" 
            className="px-6 data-[state=active]:bg-c13-red data-[state=active]:text-white font-mono text-[10px] uppercase tracking-widest transition-all"
          >
            INTEGRATIONS
          </TabsTrigger>
          <TabsTrigger 
            value="notifications" 
            className="px-6 data-[state=active]:bg-c13-red data-[state=active]:text-white font-mono text-[10px] uppercase tracking-widest transition-all"
          >
            COMMS_LOGS
          </TabsTrigger>
          <TabsTrigger 
            value="general" 
            className="px-6 data-[state=active]:bg-c13-red data-[state=active]:text-white font-mono text-[10px] uppercase tracking-widest transition-all"
          >
            CORE_SYSTEM
          </TabsTrigger>
        </TabsList>

        <TabsContent value="integrations" className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Supabase */}
            <Card className="border-border-default bg-bg-surface overflow-hidden group hover:border-c13-blue/50 transition-all">
              <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
                <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] flex items-center">
                  <Database className="mr-3 h-4 w-4 text-c13-blue" />
                  DATABASE_CONFIG
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">PROJECT_ENDPOINT</Label>
                  <Input defaultValue="https://xyz.supabase.co" className="bg-bg-void border-border-default h-10 text-xs font-mono focus:ring-c13-blue" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">ENCRYPTED_API_IDENTIFIER</Label>
                  <Input type="password" value="••••••••••••••••" className="bg-bg-void border-border-default h-10 text-xs font-mono focus:ring-c13-blue" />
                </div>
              </CardContent>
            </Card>

            {/* Groq AI */}
            <Card className="border-border-default bg-bg-surface overflow-hidden group hover:border-c13-red/50 transition-all">
              <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
                <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] flex items-center">
                  <Cpu className="mr-3 h-4 w-4 text-c13-red" />
                  COGNITIVE_ENGINE (GROQ)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">ACCESS_KEY_STREAM</Label>
                  <Input type="password" placeholder="GSK_EX_001..." className="bg-bg-void border-border-default h-10 text-xs font-mono focus:ring-c13-red" />
                </div>
                <div className="flex items-center justify-between bg-bg-void p-3 rounded border border-border-subtle">
                  <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">CURRENT_MODEL: LLAMA_3.3_70B</span>
                  <Badge variant="active" className="text-[8px] h-4">STATUS:ONLINE</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Luma API */}
            <Card className="border-border-default bg-bg-surface overflow-hidden group hover:border-status-purple/50 transition-all">
              <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
                <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] flex items-center">
                  <Globe className="mr-3 h-4 w-4 text-status-purple" />
                  RADAR_INTERFACE (LUMA)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">INTERFACE_SECRET</Label>
                  <Input type="password" placeholder="LUMA_AUTH_X..." className="bg-bg-void border-border-default h-10 text-xs font-mono focus:ring-status-purple" />
                </div>
                <p className="text-[9px] font-mono text-text-tertiary uppercase leading-relaxed border-t border-border-subtle pt-3">
                  REQUIRED FOR EVENT AUTO-REGISTRATION AND TACTICAL SCANNING OPERATIONS.
                </p>
              </CardContent>
            </Card>

            {/* Telegram Bot */}
            <Card className="border-border-default bg-bg-surface overflow-hidden group hover:border-c13-blue/50 transition-all">
              <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
                <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] flex items-center">
                  <Bot className="mr-3 h-4 w-4 text-c13-blue" />
                  COMMS_BOT_API (TELEGRAM)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">BOT_TERMINAL_TOKEN</Label>
                  <Input type="password" placeholder="000000:AAABBB..." className="bg-bg-void border-border-default h-10 text-xs font-mono focus:ring-c13-blue" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">TARGET_GROUP_ID</Label>
                  <Input placeholder="-10012345678" className="bg-bg-void border-border-default h-10 text-xs font-mono focus:ring-c13-blue" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="animate-in fade-in duration-300">
           <Card className="border-border-default bg-bg-surface overflow-hidden">
              <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
                 <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] flex items-center">
                    <Bell className="mr-3 h-4 w-4 text-c13-red" />
                    BROADCAST_PROTOCOLS
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                 <div className="divide-y divide-border-subtle">
                    {[
                      { label: 'TELEGRAM_ALERTS', desc: 'BROADCAST DISCOVERED EVENTS TO THE GROUP.', checked: true },
                      { label: 'DAILY_MISSION_BRIEFING', desc: 'AI-GENERATED SUMMARY VIA TELEGRAM AT 08:00_AM.', checked: true },
                      { label: 'THREAT_CONFLICT_ALERTS', desc: 'NOTIFY VIA PUSH IF A NEW EVENT CONFLICTS WITH CLASSES.', checked: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-6 hover:bg-bg-elevated/20 transition-colors">
                         <div className="space-y-1">
                            <Label className="text-[11px] font-mono font-bold text-text-primary tracking-widest uppercase">{item.label}</Label>
                            <p className="text-[9px] font-mono text-text-tertiary uppercase">{item.desc}</p>
                         </div>
                         <Switch defaultChecked={item.checked} />
                      </div>
                    ))}
                 </div>
              </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="general" className="animate-in fade-in duration-300">
            <Card className="border-border-default bg-bg-surface overflow-hidden">
               <CardHeader className="bg-bg-elevated/30 border-b border-border-subtle p-5">
                  <CardTitle className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] flex items-center">
                    <Shield className="mr-3 h-4 w-4 text-c13-red" />
                    CORE_OPERATION_PARAMS
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-6 space-y-6">
                  <div className="space-y-1.5">
                     <Label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">TEAM_IDENTIFIER</Label>
                     <Input defaultValue="CIRCLE13" className="bg-bg-void border-border-default h-12 font-mono text-xs focus:ring-c13-red" />
                  </div>
                  <div className="space-y-1.5">
                     <Label className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">TEMPORAL_OFFSET (TIMEZONE)</Label>
                     <select className="w-full bg-bg-void border-border-default rounded-md h-12 px-3 text-[11px] font-mono text-text-primary uppercase appearance-none focus:outline-none focus:ring-2 focus:ring-c13-red transition-all">
                        <option>ASIA/KOLKATA (IST)</option>
                        <option>UTC_UNIVERSAL</option>
                        <option>AMERICA/LOS_ANGELES (PST)</option>
                     </select>
                  </div>
               </CardContent>
               <CardFooter className="bg-bg-elevated/10 border-t border-border-subtle p-6 flex justify-end">
                  <Button className="bg-c13-red text-white h-12 shadow-[0_0_15px_var(--c13-red-glow)] font-mono text-xs tracking-[0.2em] uppercase px-10">COMMIT_CHANGES</Button>
               </CardFooter>
            </Card>
        </TabsContent>
      </Tabs>
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
