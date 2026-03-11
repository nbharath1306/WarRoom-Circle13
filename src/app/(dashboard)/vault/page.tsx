'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileText, Search, Plus, Folder, Book } from 'lucide-react'

const mockDocs = [
  { id: '1', title: 'Project Charter - War Room', type: 'technical', date: '2026-03-01' },
  { id: '2', title: 'Meeting Notes: Feb 28', type: 'meeting_notes', date: '2026-02-28' },
  { id: '3', title: 'Supabase Integration Guide', type: 'technical', date: '2026-03-05' },
  { id: '4', title: 'Hackathon Prep Template', type: 'template', date: '2026-01-15' },
]

export default function KnowledgeVaultPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Book className="mr-3 h-8 w-8 text-[#E94560]" />
          Knowledge Vault
        </h1>
        <Button className="bg-[#E94560] text-white hover:bg-[#d83a54]">
          <Plus className="mr-2 h-4 w-4" />
          New Document
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A0A0B0]" />
          <Input 
            placeholder="Search documents, notes, technical guides..." 
            className="pl-10 bg-[#12122A] border-[#2A2A4A] text-white placeholder:text-[#505070]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-[#A0A0B0] uppercase px-2">Categories</h3>
          <div className="space-y-1">
             {['All Docs', 'Technical', 'Meeting Notes', 'Templates', 'Bookmarks'].map(cat => (
               <Button key={cat} variant="ghost" className="w-full justify-start text-[#F5F5F5] hover:bg-[#1A1A3E]">
                  <Folder className="mr-2 h-4 w-4 text-[#E94560]" />
                  {cat}
               </Button>
             ))}
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          {mockDocs.map(doc => (
            <Card key={doc.id} className="border-[#2A2A4A] bg-[#12122A] hover:bg-[#1A1A3E] transition-colors cursor-pointer group">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded bg-[#1A1A3E] text-[#E94560] group-hover:bg-[#E94560] group-hover:text-white transition-colors">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{doc.title}</p>
                    <p className="text-xs text-[#A0A0B0]">{doc.type} • Last updated {doc.date}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-[#A0A0B0]">View</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
