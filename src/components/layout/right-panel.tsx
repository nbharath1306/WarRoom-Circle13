'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Plus, MessageSquare, Sparkles, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function RightPanel() {
  return (
    <aside className="w-80 h-full border-l border-border-subtle bg-bg-void overflow-y-auto hidden xl:block p-6 space-y-8">
      
      {/* QUICK_OPS */}
      <section className="space-y-4">
        <h3 className="text-[10px] font-mono font-bold tracking-[0.15em] text-text-secondary uppercase">
          QUICK_OPS // ACTIONS
        </h3>
        <div className="grid grid-cols-1 gap-3">
          <Button className="w-full h-10 justify-start bg-c13-red hover:bg-c13-red/90 text-[11px] font-mono tracking-widest uppercase">
            <Plus className="mr-2 h-4 w-4" />
            DEPLOY_TASK
          </Button>
          <Button variant="outline" className="w-full h-10 justify-start border-border-default hover:border-c13-red hover:text-c13-red transition-all text-[11px] font-mono tracking-widest uppercase">
            <Sparkles className="mr-2 h-4 w-4" />
            BRAIN_QUERY
          </Button>
        </div>
      </section>

      {/* INTELLIGENCE_FEED */}
      <section className="space-y-4">
        <h3 className="text-[10px] font-mono font-bold tracking-[0.15em] text-text-secondary uppercase">
          INTELLIGENCE_FEED // LIVE
        </h3>
        <Card className="bg-bg-surface border-border-default">
          <CardContent className="p-4 space-y-4">
            <div className="flex space-x-3">
               <div className="h-2 w-2 mt-1.5 rounded-full bg-status-active shrink-0" />
               <div className="space-y-1">
                  <p className="text-xs text-text-primary font-display font-medium">New Signal: GenAI Conf</p>
                  <p className="text-[10px] text-text-secondary font-mono">REL: 78 // 13.03.26</p>
               </div>
            </div>
            <div className="flex space-x-3">
               <div className="h-2 w-2 mt-1.5 rounded-full bg-status-warning shrink-0" />
               <div className="space-y-1">
                  <p className="text-xs text-text-primary font-display font-medium">Conflict Detected</p>
                  <p className="text-[10px] text-text-secondary font-mono">AKHIL // CS301 vs MEETUP</p>
               </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FOCUS_TIMER */}
      <section className="space-y-4">
         <h3 className="text-[10px] font-mono font-bold tracking-[0.15em] text-text-secondary uppercase">
            SESSION_OPS // TIMER
         </h3>
         <div className="bg-bg-surface border border-border-default rounded-lg p-4 flex flex-col items-center justify-center space-y-4">
            <div className="text-4xl font-mono font-bold text-text-primary tracking-tighter">25:00</div>
            <Button size="sm" variant="outline" className="font-mono text-[10px] uppercase border-border-default px-6 h-8">
               INITIATE_FOCUS
            </Button>
         </div>
      </section>

      {/* FOOTER_STATUS */}
      <div className="pt-8 text-[10px] font-mono text-text-tertiary uppercase leading-relaxed">
         // SESSION: ACTIVE<br />
         // UPTIME: 4h 23m<br />
         // v2.0-STABLE
      </div>
    </aside>
  )
}
