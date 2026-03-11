'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, Save, Upload } from 'lucide-react'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function TimetablePage() {
  const [blocks, setBlocks] = useState([
    { day: 0, start: '09:00', end: '10:30', course: 'Computer Science 101' },
    { day: 2, start: '11:00', end: '12:30', course: 'Mathematics II' },
  ])

  const addBlock = () => {
    setBlocks([...blocks, { day: 0, start: '09:00', end: '10:00', course: '' }])
  }

  const removeBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">College Timetable</h1>
        <div className="space-x-4">
          <Button variant="outline" className="border-[#2A2A4A] bg-[#1A1A3E] text-white hover:bg-[#2A2A4A]">
            <Upload className="mr-2 h-4 w-4" />
            Import (OCR)
          </Button>
          <Button onClick={addBlock} className="bg-[#E94560] text-white hover:bg-[#d83a54]">
            <Plus className="mr-2 h-4 w-4" />
            Add Block
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {blocks.map((block, index) => (
          <Card key={index} className="border-[#2A2A4A] bg-[#12122A] text-white">
            <CardContent className="flex items-center p-4 space-x-4">
              <select 
                value={block.day} 
                onChange={(e) => {
                  const newBlocks = [...blocks]
                  newBlocks[index].day = parseInt(e.target.value)
                  setBlocks(newBlocks)
                }}
                className="bg-[#1A1A3E] border-[#2A2A4A] rounded px-2 py-1 flex-1"
              >
                {days.map((day, i) => (
                  <option key={i} value={i}>{day}</option>
                ))}
              </select>
              <Input 
                type="time" 
                value={block.start} 
                className="w-32 bg-[#1A1A3E] border-[#2A2A4A]"
                onChange={(e) => {
                  const newBlocks = [...blocks]
                  newBlocks[index].start = e.target.value
                  setBlocks(newBlocks)
                }}
              />
              <Input 
                type="time" 
                value={block.end} 
                className="w-32 bg-[#1A1A3E] border-[#2A2A4A]"
                onChange={(e) => {
                  const newBlocks = [...blocks]
                  newBlocks[index].end = e.target.value
                  setBlocks(newBlocks)
                }}
              />
              <Input 
                placeholder="Course Name" 
                value={block.course} 
                className="flex-[2] bg-[#1A1A3E] border-[#2A2A4A]"
                onChange={(e) => {
                  const newBlocks = [...blocks]
                  newBlocks[index].course = e.target.value
                  setBlocks(newBlocks)
                }}
              />
              <Button variant="ghost" size="icon" onClick={() => removeBlock(index)} className="text-[#F44336] hover:bg-red-500/10">
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Save className="mr-2 h-4 w-4" />
          Save Timetable
        </Button>
      </div>
    </div>
  )
}
