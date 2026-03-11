'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, MoreVertical } from 'lucide-react'
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cn } from '@/lib/utils'

const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'in_progress', title: 'In Progress' },
  { id: 'review', title: 'Review' },
  { id: 'done', title: 'Done' },
]

const initialTasks = [
  { id: '1', title: 'Setup Supabase Auth', status: 'todo', priority: 'p1' },
  { id: '2', title: 'Design Dashboard Shell', status: 'in_progress', priority: 'p0' },
  { id: '3', title: 'Luma API Research', status: 'todo', priority: 'p2' },
  { id: '4', title: 'Initial Project PRD', status: 'done', priority: 'p1' },
]

interface Task {
  id: string
  title: string
  status: string
  priority: string
}

function SortableTaskCard({ task }: { task: Task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border-[#2A2A4A] bg-[#12122A] shadow-sm hover:border-[#E94560]/50 transition-colors cursor-grab active:cursor-grabbing"
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className={cn(
            "text-[10px] font-bold px-1.5 py-0.5 rounded",
            task.priority === 'p0' ? "bg-red-500/20 text-red-500" :
            task.priority === 'p1' ? "bg-orange-500/20 text-orange-500" :
            "bg-blue-500/20 text-blue-500"
          )}>
            {task.priority.toUpperCase()}
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-[#A0A0B0]">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm font-medium text-white">{task.title}</p>
      </CardContent>
    </Card>
  )
}

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks)
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id)
  }

  const handleDragOver = (event: any) => {
    const { active, over } = event
    if (!over) return

    const activeTask = tasks.find((t) => t.id === active.id)
    const overId = over.id

    // Find if we are hovering over a column or a task
    const isOverAColumn = columns.some((col) => col.id === overId)
    
    if (activeTask && (isOverAColumn || tasks.some(t => t.id === overId))) {
      const overStatus = isOverAColumn ? overId : tasks.find(t => t.id === overId)?.status
      
      if (overStatus && activeTask.status !== overStatus) {
        setTasks((prev) => 
          prev.map((t) => 
            t.id === active.id ? { ...t, status: overStatus } : t
          )
        )
      }
    }
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex((t) => t.id === active.id)
        const newIndex = items.findIndex((t) => t.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
    setActiveId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Task Engine</h1>
        <Button className="bg-[#E94560] text-white hover:bg-[#d83a54]">
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 overflow-x-auto pb-4">
          {columns.map((column) => (
            <div key={column.id} className="w-80 flex-shrink-0 space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="font-semibold text-[#F5F5F5] uppercase tracking-wider text-xs">
                  {column.title}
                </h3>
                <span className="rounded-full bg-[#1A1A3E] px-2 py-0.5 text-xs text-[#A0A0B0]">
                  {tasks.filter((t) => t.status === column.id).length}
                </span>
              </div>
              
              <SortableContext
                id={column.id}
                items={tasks.filter((t) => t.status === column.id).map((t) => t.id)}
                strategy={verticalListSortingStrategy}
              >
                <div 
                  className="space-y-3 min-h-[500px] rounded-lg bg-[#0A0A1A]/50 p-2 border border-dashed border-[#2A2A4A]"
                >
                  {tasks
                    .filter((t) => t.status === column.id)
                    .map((task) => (
                      <SortableTaskCard key={task.id} task={task} />
                    ))}
                </div>
              </SortableContext>
            </div>
          ))}
        </div>
        
        <DragOverlay>
          {activeId ? (
            <Card className="border-[#2A2A4A] bg-[#12122A] shadow-xl w-80 rotate-3 scale-105 pointer-events-none">
              <CardContent className="p-4">
                <p className="text-sm font-medium text-white">
                  {tasks.find((t) => t.id === activeId)?.title}
                </p>
              </CardContent>
            </Card>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}
