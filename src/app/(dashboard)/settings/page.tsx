'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { 
  Settings, 
  Key, 
  Bell, 
  Webhook, 
  Bot, 
  Database, 
  Globe,
  Lock,
  MessageSquare
} from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Settings className="mr-3 h-8 w-8 text-[#E94560]" />
          Command Center Settings
        </h1>
      </div>

      <Tabs defaultValue="integrations" className="w-full">
        <TabsList className="bg-[#12122A] border border-[#2A2A4A] p-1">
          <TabsTrigger value="integrations" className="data-[state=active]:bg-[#E94560]">Integrations</TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-[#E94560]">Notifications</TabsTrigger>
          <TabsTrigger value="general" className="data-[state=active]:bg-[#E94560]">General</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Supabase */}
            <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
              <CardHeader>
                <CardTitle className="text-sm flex items-center">
                  <Database className="mr-2 h-4 w-4 text-emerald-400" />
                  Supabase Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Label className="text-[10px] uppercase text-[#A0A0B0]">Project URL</Label>
                  <Input defaultValue="https://xyz.supabase.co" className="bg-[#1A1A3E] border-[#2A2A4A] h-8 text-xs font-mono" />
                </div>
                <div className="space-y-1">
                  <Label className="text-[10px] uppercase text-[#A0A0B0]">Anon Key</Label>
                  <Input type="password" value="••••••••••••••••" className="bg-[#1A1A3E] border-[#2A2A4A] h-8 text-xs font-mono" />
                </div>
              </CardContent>
            </Card>

            {/* Groq AI */}
            <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
              <CardHeader>
                <CardTitle className="text-sm flex items-center">
                  <Lock className="mr-2 h-4 w-4 text-[#E94560]" />
                  Groq LLM API
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Label className="text-[10px] uppercase text-[#A0A0B0]">API Key</Label>
                  <Input type="password" placeholder="gsk_..." className="bg-[#1A1A3E] border-[#2A2A4A] h-8 text-xs font-mono" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#A0A0B0]">Model: LLaMA 3.3 70B</span>
                  <Badge className="bg-green-500/20 text-green-500 text-[10px]">Connected</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Luma API */}
            <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
              <CardHeader>
                <CardTitle className="text-sm flex items-center">
                  <Globe className="mr-2 h-4 w-4 text-blue-400" />
                  Luma Public API
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Label className="text-[10px] uppercase text-[#A0A0B0]">API Key</Label>
                  <Input type="password" placeholder="luma_..." className="bg-[#1A1A3E] border-[#2A2A4A] h-8 text-xs font-mono" />
                </div>
                <p className="text-[10px] text-[#505070]">Required for event auto-registration and scanning.</p>
              </CardContent>
            </Card>

            {/* Telegram Bot */}
            <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
              <CardHeader>
                <CardTitle className="text-sm flex items-center">
                  <Bot className="mr-2 h-4 w-4 text-sky-400" />
                  Telegram Bot API
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Label className="text-[10px] uppercase text-[#A0A0B0]">Bot Token</Label>
                  <Input type="password" placeholder="000000:AAABBB..." className="bg-[#1A1A3E] border-[#2A2A4A] h-8 text-xs font-mono" />
                </div>
                <div className="space-y-1">
                  <Label className="text-[10px] uppercase text-[#A0A0B0]">Group Chat ID</Label>
                  <Input placeholder="-10012345678" className="bg-[#1A1A3E] border-[#2A2A4A] h-8 text-xs font-mono" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
           <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
              <CardContent className="p-6 space-y-6">
                 <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                       <Label className="text-sm font-medium">Telegram Alerts</Label>
                       <p className="text-xs text-[#A0A0B0]">Broadcast discovered events to the group.</p>
                    </div>
                    <Switch defaultChecked />
                 </div>
                 <div className="flex items-center justify-between border-t border-[#1A1A3E] pt-6">
                    <div className="space-y-0.5">
                       <Label className="text-sm font-medium">Daily Briefing</Label>
                       <p className="text-xs text-[#A0A0B0]">AI-generated summary via Telegram at 8:00 AM.</p>
                    </div>
                    <Switch defaultChecked />
                 </div>
                 <div className="flex items-center justify-between border-t border-[#1A1A3E] pt-6">
                    <div className="space-y-0.5">
                       <Label className="text-sm font-medium">Conflict Alerts</Label>
                       <p className="text-xs text-[#A0A0B0]">Notify via push if a new event conflicts with classes.</p>
                    </div>
                    <Switch />
                 </div>
              </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="general" className="mt-6">
            <Card className="border-[#2A2A4A] bg-[#12122A] text-white">
               <CardContent className="p-6 space-y-4">
                  <div className="space-y-1">
                     <Label className="text-sm">Team Name</Label>
                     <Input defaultValue="Circle13" className="bg-[#1A1A3E] border-[#2A2A4A]" />
                  </div>
                  <div className="space-y-1">
                     <Label className="text-sm">Timezone</Label>
                     <select className="w-full bg-[#1A1A3E] border-[#2A2A4A] rounded-md h-10 px-3 text-sm">
                        <option>Asia/Kolkata (IST)</option>
                        <option>UTC</option>
                        <option>America/Los_Angeles (PST)</option>
                     </select>
                  </div>
               </CardContent>
               <CardFooter className="border-t border-[#1A1A3E] p-4 flex justify-end">
                  <Button className="bg-[#E94560] hover:bg-[#d83a54]">Save Changes</Button>
               </CardFooter>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
