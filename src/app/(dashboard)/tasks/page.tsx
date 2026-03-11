'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, MoreVertical, Terminal, Cpu, Zap, CheckCircle2, AlertCircle, Clock, User, ArrowRight } from 'lucide-react'
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
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
  { id: 'todo', title: 'BACKLOG // INCOMING' },
  { id: 'in_progress', title: 'OPERATIONS // ACTIVE' },
  { id: 'review', title: 'REVIEW // QA' },
  { id: 'done', title: 'ARCHIVE // DEPLOYED' },
]

const initialTasks = [
  { id: '1', title: 'Setup Supabase Auth & SSR', status: 'todo', priority: 'HIGH', owner: 'B', sub: 'AUTH_SUBSYSTEM' },
  { id: '2', title: 'Mission Control Dashboard Shell', status: 'in_progress', priority: 'CRIT', owner: 'A', sub: 'UI_CORE' },
  { id: '3', title: 'Luma API Integration Research', status: 'todo', priority: 'LOW', owner: 'P', sub: 'INTELLIGENCE' },
  { id: '4', title: 'Initial Project PRD finalized', status: 'done', priority: 'LOW', owner: 'S', sub: 'DOCUMENTATION' },
]

interface Task {
  id: string
  title: string
  status: string
  priority: string
  owner: string
  sub: string
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
    opacity: isDragging ? 0.3 : 1,
    zIndex: isDragging ? 50 : 'auto',
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "relative overflow-hidden border-border-default bg-bg-surface group cursor-grab active:cursor-grabbing hover:border-c13-red transition-all",
        isDragging && "ring-2 ring-c13-red border-transparent"
      )}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <Badge 
            variant={task.priority === 'CRIT' ? 'critical' : task.priority === 'HIGH' ? 'scanning' : 'default'}
          >
            {task.priority}
          </Badge>
          <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">{task.sub}</div>
        </div>
        
        <p className="text-[13px] font-display font-bold text-text-primary leading-tight group-hover:text-c13-red transition-colors">
          {task.title}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-border-subtle/50">
           <div className="flex items-center space-x-2">
              <div className="h-5 w-5 rounded bg-bg-elevated border border-border-subtle flex items-center justify-center text-[10px] font-mono font-bold text-text-primary">
                 {task.owner}
              </div>
              <span className="text-[9px] font-mono text-text-tertiary uppercase">OWNER: {task.owner}</span>
           </div>
           {task.status !== 'done' && (
             <Button variant="ghost" size="xs" className="h-6 px-2 text-[10px] font-mono hover:text-c13-red">
                DEPLOY <ArrowRight className="ml-1 h-2 w-2" />
             </Button>
           )}
        </div>
      </CardContent>
      {task.priority === 'CRIT' && (
         <div className="absolute top-0 right-0 p-1">
            <div className="h-1 w-1 rounded-full bg-status-error animate-pulse" />
         </div>
      )}
    </Card>
  )
}

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks)
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8,
        },
    }),
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
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <header className="space-y-1">
        <div className="flex items-center space-x-2">
           <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-text-secondary uppercase">TASK_ENGINE // OPERATIONS</span>
           <div className="h-1 w-1 rounded-full bg-c13-red animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">MISSION TASKS</h1>
          <div className="flex items-center gap-3">
             <div className="flex -space-x-2 mr-4">
                {['B', 'A', 'P', 'S'].map((m) => (
                   <div key={m} title={`User ${m}`} className="h-8 w-8 rounded-full border-2 border-bg-void bg-bg-elevated flex items-center justify-center text-[10px] font-mono font-bold text-text-primary">
                      {m}
                   </div>
                ))}
             </div>
             <Button className="bg-c13-red text-white h-10 shadow-[0_0_15px_var(--c13-red-glow)] font-mono tracking-widest text-xs">
                <Plus className="mr-2 h-4 w-4" />
                INDUCT_TASK
             </Button>
          </div>
        </div>
      </header>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide -mx-2 px-2">
          {columns.map((column) => (
            <div key={column.id} className="w-[320px] flex-shrink-0 space-y-6">
              <div className="flex items-center justify-between px-2 bg-bg-elevated/30 py-2 rounded border border-border-subtle/30">
                <h3 className="text-[10px] font-mono font-bold text-text-secondary uppercase tracking-[0.2em]">
                  {column.title}
                </h3>
                <span className="font-mono text-[10px] text-text-tertiary bg-bg-void px-2 py-0.5 rounded border border-border-subtle">
                  {tasks.filter((t) => t.status === column.id).length}
                </span>
              </div>
              
              <SortableContext
                id={column.id}
                items={tasks.filter((t) => t.status === column.id).map((t) => t.id)}
                strategy={verticalListSortingStrategy}
              >
                <div 
                  className="space-y-4 min-h-[60vh] rounded-lg p-2 transition-colors"
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
        
        <DragOverlay adjustScale={true}>
          {activeId ? (
            <div className="w-[310px] rotate-2 scale-105 opacity-90 shadow-2xl pointer-events-none">
                <Card className="border-c13-red bg-bg-surface">
                    <CardContent className="p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <Badge variant="scanning">ACTIVE</Badge>
                        </div>
                        <p className="text-[13px] font-display font-bold text-text-primary leading-tight">
                            {tasks.find((t) => t.id === activeId)?.title}
                        </p>
                    </CardContent>
                </Card>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}
