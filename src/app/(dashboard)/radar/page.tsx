import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Radar, RefreshCw, CheckCircle2, XCircle, ExternalLink } from 'lucide-react'

const mockDiscoveredEvents = [
  {
    id: '1',
    title: 'AI Global Hackathon 2026',
    source: 'devpost',
    start_time: '2026-04-15',
    location: 'Online',
    relevance: 95,
    status: 'discovered',
    tags: ['AI', 'Hackathon']
  },
  {
    id: '2',
    title: 'Luma Builder Meetup',
    source: 'luma',
    start_time: '2026-03-20',
    location: 'San Francisco, CA',
    relevance: 88,
    status: 'registered',
    tags: ['Networking', 'Builder']
  },
  {
    id: '3',
    title: 'MLH Spring Hack',
    source: 'mlh',
    start_time: '2026-05-02',
    location: 'Austin, TX',
    relevance: 72,
    status: 'pending',
    tags: ['MLH', 'Student']
  }
]

export default function EventRadarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center">
            <Radar className="mr-3 h-8 w-8 text-[#E94560]" />
            Event Radar
          </h1>
          <p className="text-[#A0A0B0] mt-1">Discovering and auto-applying to events relevant to Circle13.</p>
        </div>
        <Button className="bg-[#1A1A3E] border border-[#2A2A4A] text-white hover:bg-[#2A2A4A]">
          <RefreshCw className="mr-2 h-4 w-4" />
          Scan Now
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDiscoveredEvents.map((event) => (
          <Card key={event.id} className="border-[#2A2A4A] bg-[#12122A] text-white flex flex-col overflow-hidden group">
            <div className="h-32 bg-[#1A1A3E] relative overflow-hidden">
               <div className="absolute top-2 right-2 border-none">
                  <Badge className={cn(
                    "bg-[#E94560] text-white",
                    event.relevance > 90 ? "bg-green-500" : event.relevance > 80 ? "bg-yellow-500" : "bg-blue-500"
                  )}>
                    {event.relevance}% Match
                  </Badge>
               </div>
               <div className="absolute inset-0 flex items-center justify-center text-[#2A2A4A]">
                  <Radar className="h-16 w-16 opacity-20" />
               </div>
            </div>
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between mb-1">
                <Badge variant="outline" className="text-[10px] uppercase border-[#2A2A4A] text-[#A0A0B0]">
                  {event.source}
                </Badge>
                <span className="text-xs text-[#A0A0B0]">{event.start_time}</span>
              </div>
              <CardTitle className="text-lg font-bold group-hover:text-[#E94560] transition-colors">
                {event.title}
              </CardTitle>
              <CardDescription className="text-[#A0A0B0] text-xs flex items-center">
                <MapPin className="h-3 w-3 mr-1" /> {event.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-1">
              <div className="flex flex-wrap gap-2 mt-2">
                {event.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-[#1A1A3E] px-2 py-0.5 rounded text-[#F5F5F5]">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 border-t border-[#2A2A4A] mt-auto">
              <div className="w-full flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  {event.status === 'registered' ? (
                    <Badge className="bg-green-500/20 text-green-500 border-none flex items-center">
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Registered
                    </Badge>
                  ) : event.status === 'pending' ? (
                    <Badge className="bg-yellow-500/20 text-yellow-500 border-none flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> Pending
                    </Badge>
                  ) : (
                    <Badge className="bg-blue-500/20 text-blue-500 border-none flex items-center">
                      <Radar className="h-3 w-3 mr-1" /> Discovered
                    </Badge>
                  )}
                </div>
                <Button size="sm" variant="ghost" className="text-[#E94560] hover:bg-[#1A1A3E] p-0 h-auto">
                  Details <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
