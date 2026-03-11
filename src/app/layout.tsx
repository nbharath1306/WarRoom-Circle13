import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Circle13 War Room',
  description: 'Command Center & Builder\'s Hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
       {/* 
         Geist fallback to Inter for display/body as per design system 
         JetBrains Mono used for --font-mono
       */}
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-display: var(--font-inter);
            --font-body: var(--font-inter);
            --font-mono: var(--font-mono);
          }
        `}} />
      </head>
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  )
}
