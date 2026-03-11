'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Radar as RadarIcon, RefreshCw, Clock, MapPin, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

import { useEventRadar } from '@/hooks/use-event-radar'

export default function EventRadarPage() {
  const { signals, loading, initiateScan } = useEventRadar()

  if (loading) {
     return (
        <div className="h-96 flex items-center justify-center">
           <div className="flex flex-col items-center space-y-4">
              <RefreshCw className="h-8 w-8 text-c13-red animate-spin" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">SCANNING_FREQUENCIES...</span>
           </div>
        </div>
     )
  }
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">EVENT_RADAR // SCANNING</span>
           <div className="h-1 w-24 bg-bg-elevated rounded-full overflow-hidden">
              <div className="h-full bg-c13-red animate-scanline" />
           </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">EVENT RADAR</h1>
          <div className="flex items-center gap-3">
             <Button variant="outline" size="sm" className="bg-bg-elevated border-border-default h-9">
                <Search className="mr-2 h-4 w-4 text-text-tertiary" />
                FILTER_SIGNALS
             </Button>
             <Button 
                onClick={initiateScan}
                className="bg-c13-red text-white h-9 shadow-[0_0_15px_var(--c13-red-glow)]"
             >
                <RefreshCw className="mr-2 h-4 w-4" />
                INITIATE_SCAN
             </Button>
          </div>
        </div>
      </header>

      {/* FILTERS */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
         {['ALL', 'LUMA', 'DEVPOST', 'MLH', 'MEETUP', 'FREE_ONLY'].map((filter, i) => (
            <Button key={filter} variant={i === 0 ? 'secondary' : 'ghost'} size="xs" className="px-4 h-7 text-[10px] font-mono tracking-widest whitespace-nowrap">
               {filter}
            </Button>
         ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {signals.map((event) => (
          <Card key={event.id} className="relative group overflow-hidden border-border-default bg-bg-surface hover:border-c13-red hover:shadow-[0_0_30px_var(--c13-red-glow)] transition-all duration-300">
            <CardHeader className="p-6 pb-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                   <div className="h-8 w-8 bg-bg-elevated rounded border border-border-subtle flex items-center justify-center">
                      <RadarIcon className="h-4 w-4 text-c13-red" />
                   </div>
                   <div className="space-y-0.5">
                      <div className="text-[10px] font-mono font-bold text-text-secondary tracking-widest uppercase">{event.source}</div>
                      <div className="text-[10px] font-mono text-text-tertiary tracking-wider">{event.start_time}</div>
                   </div>
                </div>
                {/* Relevance Score Badge */}
                <div className="text-right">
                   <div className={cn(
                      "text-xs font-mono font-black tracking-tighter",
                      event.relevance_score > 90 ? "text-status-active" : event.relevance_score > 80 ? "text-status-warning" : "text-status-error"
                   )}>
                      REL: {event.relevance_score}
                   </div>
                   <div className="h-1 w-16 bg-bg-elevated rounded-full overflow-hidden mt-1">
                      <div 
                         className={cn(
                            "h-full transition-all duration-1000",
                            event.relevance_score > 90 ? "bg-status-active" : event.relevance_score > 80 ? "bg-status-warning" : "bg-status-error"
                         )} 
                         style={{ width: `${event.relevance_score}%` }} 
                      />
                   </div>
                </div>
              </div>
              
              <CardTitle className="text-xl font-display font-bold text-text-primary group-hover:text-c13-red transition-colors mb-2 leading-tight">
                {event.title}
              </CardTitle>
              <div className="flex items-center text-[11px] font-mono text-text-secondary tracking-wide">
                <MapPin className="h-3 w-3 mr-2 text-text-code" /> {event.location}
              </div>
            </CardHeader>

            <CardContent className="p-6 pt-2 space-y-6">
               <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="bg-bg-elevated/30 border-border-subtle hover:border-text-tertiary text-text-tertiary">
                      {tag}
                    </Badge>
                  ))}
               </div>

               <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest text-text-secondary uppercase">
                     <span>CREW_RSVP // STATUS</span>
                     <span>{event.crew_rsvp.length}/6 CONFIRMED</span>
                  </div>
                  <div className="flex -space-x-2 overflow-hidden">
                     {event.crew_rsvp.map((_, i: number) => (
                        <div key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-bg-surface bg-bg-elevated border border-border-subtle flex items-center justify-center text-[10px] font-mono text-text-primary">
                           {String.fromCharCode(65 + i)}
                        </div>
                     ))}
                  </div>
                  {event.id === '3' && (
                     <div className="flex items-center space-x-2 text-[10px] font-mono text-status-warning bg-status-warning/10 p-2 rounded border border-status-warning/20">
                        <Clock className="h-3 w-3" />
                        <span>⚠ CONFLICT_DETECTED: AKHIL // CS301</span>
                     </div>
                  )}
               </div>
            </CardContent>

            <CardFooter className="p-6 pt-0 flex gap-3">
               <Button className="flex-1 bg-c13-red hover:shadow-[0_0_15px_var(--c13-red-glow)]">REGISTER_ALL ↗</Button>
               <Button variant="outline" className="flex-1">SKIP</Button>
            </CardFooter>

            <div className="absolute bottom-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="text-[8px] font-mono text-text-tertiary uppercase tracking-tighter">DISCOVERED: 2H_AGO // SIGNAL_ACQUIRED</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
