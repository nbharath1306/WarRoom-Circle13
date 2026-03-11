'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { FileText, Search, Plus, Folder, Book, Shield, Lock, Clock, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

import { useKnowledgeVault } from '@/hooks/use-knowledge-vault'

export default function KnowledgeVaultPage() {
  const { docs, loading, categories } = useKnowledgeVault()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDocs = docs.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Shield className="h-8 w-8 text-c13-blue animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">DECRYPTING_ARCHIVES...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">KNOWLEDGE_REPOSITORY // SECURE_ARCHIVE</span>
           <div className="h-1 w-1 rounded-full bg-c13-blue animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">THE VAULT</h1>
          <Button className="bg-c13-red text-white h-10 shadow-[0_0_15px_var(--c13-red-glow)] font-mono text-xs tracking-widest px-6">
            <Plus className="mr-2 h-4 w-4" />
            NEW_ENTRY
          </Button>
        </div>
      </header>

      <div className="flex space-x-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-tertiary group-focus-within:text-c13-red transition-colors" />
          <Input 
            placeholder="SEARCH_ENCRYPTED_ARCHIVES..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-bg-surface border-border-default font-mono text-xs focus:ring-c13-red placeholder:text-text-tertiary/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] px-2 flex items-center">
               <Shield className="mr-2 h-3.5 w-3.5 text-c13-blue" /> DIRECTORIES
            </h3>
            <div className="space-y-1">
               <Button variant="secondary" className="w-full justify-between text-[11px] font-mono tracking-tight text-text-secondary hover:text-c13-red hover:bg-bg-elevated/50 group px-3 py-2 h-9 border border-border-subtle">
                  <span className="flex items-center">
                     <Folder className="mr-3 h-4 w-4 text-c13-blue group-hover:text-c13-red transition-colors" />
                     ALL_ENTRIES
                  </span>
                  <span className="text-[9px] text-text-tertiary">{docs.length.toString().padStart(2, '0')}</span>
               </Button>
               {categories.map(cat => (
                 <Button key={cat.name} variant="ghost" className="w-full justify-between text-[11px] font-mono tracking-tight text-text-secondary hover:text-c13-red hover:bg-bg-elevated/50 group px-3 py-2 h-9 border border-transparent hover:border-border-subtle">
                    <span className="flex items-center">
                       <Folder className="mr-3 h-4 w-4 text-c13-blue group-hover:text-c13-red transition-colors" />
                       {cat.name.toUpperCase()}
                    </span>
                    <span className="text-[9px] text-text-tertiary">{cat.count.toString().padStart(2, '0')}</span>
                 </Button>
               ))}
            </div>
          </div>

          <Card className="border-border-default bg-c13-blue/5 p-4 border-dashed">
             <div className="flex items-center space-x-2 mb-2">
                <Lock className="h-4 w-4 text-c13-blue" />
                <span className="text-[10px] font-mono font-bold text-c13-blue tracking-widest">ACCESS_PROTOCOL</span>
             </div>
             <p className="text-[10px] font-mono text-text-tertiary uppercase leading-relaxed">
                ALL DOCUMENTS IN THE VAULT ARE END-TO-END ENCRYPTED VIA SUPABASE VAULT PROTOCOLS. ONLY CREW MEMBERS WITH VALID PGP KEYS CAN DECRYPT.
             </p>
          </Card>
        </div>

        {/* Document List */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em] px-2">RECENT_INTELLIGENCE</h3>
          <div className="grid grid-cols-1 gap-4">
            {filteredDocs.map(doc => (
              <Card key={doc.id} className="border-border-default bg-bg-surface hover:border-c13-red transition-all cursor-pointer group overflow-hidden">
                <CardContent className="p-0 flex flex-col sm:flex-row sm:items-center">
                  <div className="p-5 flex items-center space-x-5 flex-1">
                    <div className="h-10 w-10 shrink-0 rounded bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-c13-red group-hover:border-c13-red transition-all">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                         <Badge variant="outline" className="text-[9px] py-0 h-4 bg-bg-void border-border-subtle text-text-tertiary"># {doc.id.substring(0, 4).toUpperCase()}</Badge>
                         <Badge variant="outline" className={cn(
                           "text-[8px] py-0 h-4 font-mono",
                           doc.security_level === 'TS//SCI' ? 'border-status-error/50 text-status-error' : 
                           doc.security_level === 'SECRET' ? 'border-c13-red/50 text-c13-red' : 'border-border-subtle text-text-tertiary'
                         )}>{doc.security_level}</Badge>
                      </div>
                      <h4 className="font-display font-bold text-text-primary tracking-wide group-hover:text-c13-red transition-colors truncate">{doc.title}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                         <div className="flex items-center text-[10px] font-mono text-text-tertiary uppercase">
                            <Clock className="mr-1.5 h-3 w-3" /> {doc.created_at}
                         </div>
                         <div className="flex items-center text-[10px] font-mono text-text-tertiary uppercase">
                            <Plus className="mr-1.5 h-3 w-3" /> {doc.category}
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex border-l border-border-subtle h-20 items-center px-6 group-hover:bg-c13-red/5">
                    <ArrowRight className="h-5 w-5 text-text-tertiary group-hover:text-c13-red translate-x-0 group-hover:translate-x-1 transition-all" />
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
