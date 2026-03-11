import { Sidebar } from '@/components/layout/sidebar'
import { TopNav } from '@/components/layout/top-nav'
import { RightPanel } from '@/components/layout/right-panel'
import { CommandPalette } from '@/components/layout/command-palette'
import { CircleBrain } from '@/components/ai/circle-brain'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-bg-void text-text-primary font-sans">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-bg-void p-8 relative">
          {/* Subtle noise/grain texture overlay could be added here if needed */}
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>
        <RightPanel />
      </div>
      <CommandPalette />
      <CircleBrain />
    </div>
  )
}
