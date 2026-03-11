-- CIRCLE13 WAR ROOM - DATABASE SCHEMA
-- Version 1.0 (March 2026)

-- 1. Enable Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 2. Create Enums
CREATE TYPE user_role AS ENUM ('admin', 'member', 'collaborator');
CREATE TYPE user_status AS ENUM ('available', 'building', 'in_class', 'at_event', 'away', 'offline');
CREATE TYPE event_source AS ENUM ('luma', 'eventbrite', 'meetup', 'devpost', 'mlh', 'manual');
CREATE TYPE team_event_status AS ENUM ('discovered', 'pending', 'registered', 'attended', 'skipped');
CREATE TYPE rsvp_status AS ENUM ('going', 'maybe', 'not_going', 'pending');
CREATE TYPE task_status AS ENUM ('backlog', 'todo', 'in_progress', 'review', 'done');
CREATE TYPE task_priority AS ENUM ('p0', 'p1', 'p2', 'p3');
CREATE TYPE calendar_event_type AS ENUM ('focus', 'meeting', 'deadline', 'holiday', 'custom');
CREATE TYPE doc_type AS ENUM ('meeting_notes', 'debrief', 'technical', 'template', 'bookmark', 'decision');
CREATE TYPE sprint_status AS ENUM ('planning', 'active', 'completed');
CREATE TYPE notification_channel AS ENUM ('in_app', 'push', 'email', 'telegram', 'discord');

-- 3. Create Tables

-- USERS
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    role user_role DEFAULT 'member',
    college_name TEXT,
    timezone TEXT DEFAULT 'Asia/Kolkata',
    status user_status DEFAULT 'available',
    status_message TEXT,
    notification_prefs JSONB DEFAULT '{}',
    telegram_chat_id TEXT,
    push_subscription JSONB,
    created_at TIMESTAMPTZ DEFAULT now(),
    last_active_at TIMESTAMPTZ
);

-- EVENTS
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    source event_source NOT NULL,
    source_id TEXT,
    source_url TEXT,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ,
    location TEXT,
    location_geo POINT,
    cover_image_url TEXT,
    cost DECIMAL DEFAULT 0,
    relevance_score INTEGER CHECK (relevance_score >= 0 AND relevance_score <= 100),
    tags TEXT[] DEFAULT '{}',
    status team_event_status DEFAULT 'discovered',
    auto_applied BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    metadata JSONB DEFAULT '{}'
);

-- EVENT RSVPS
CREATE TABLE IF NOT EXISTS public.event_rsvps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    status rsvp_status DEFAULT 'pending',
    registered_at TIMESTAMPTZ,
    conflict_reason TEXT,
    UNIQUE(event_id, user_id)
);

-- SPRINTS
CREATE TABLE IF NOT EXISTS public.sprints (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status sprint_status DEFAULT 'planning',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- TASKS
CREATE TABLE IF NOT EXISTS public.tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    status task_status DEFAULT 'todo',
    priority task_priority DEFAULT 'p2',
    created_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
    due_date TIMESTAMPTZ,
    estimated_minutes INTEGER,
    tags TEXT[] DEFAULT '{}',
    linked_event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
    parent_task_id UUID REFERENCES public.tasks(id) ON DELETE CASCADE,
    sprint_id UUID REFERENCES public.sprints(id) ON DELETE SET NULL,
    position INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    completed_at TIMESTAMPTZ
);

-- TASK ASSIGNEES
CREATE TABLE IF NOT EXISTS public.task_assignees (
    task_id UUID REFERENCES public.tasks(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    assigned_at TIMESTAMPTZ DEFAULT now(),
    PRIMARY KEY (task_id, user_id)
);

-- TIMETABLE BLOCKS
CREATE TABLE IF NOT EXISTS public.timetable_blocks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    course_name TEXT NOT NULL,
    room TEXT,
    professor TEXT,
    semester TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true
);

-- CALENDAR EVENTS (Individual/Custom)
CREATE TABLE IF NOT EXISTS public.calendar_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    type calendar_event_type DEFAULT 'custom',
    is_recurring BOOLEAN DEFAULT false,
    recurrence_rule TEXT,
    linked_event_id UUID REFERENCES public.events(id) ON DELETE SET NULL
);

-- DOCUMENTS
CREATE TABLE IF NOT EXISTS public.documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    type doc_type NOT NULL,
    folder TEXT,
    tags TEXT[] DEFAULT '{}',
    created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE SET NULL,
    linked_event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- DOCUMENT VERSIONS
CREATE TABLE IF NOT EXISTS public.document_versions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID NOT NULL REFERENCES public.documents(id) ON DELETE CASCADE,
    diff JSONB NOT NULL,
    edited_by UUID NOT NULL REFERENCES public.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- CHECK-INS
CREATE TABLE IF NOT EXISTS public.check_ins (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    yesterday TEXT NOT NULL,
    today TEXT NOT NULL,
    blockers TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- NOTIFICATION LOG
CREATE TABLE IF NOT EXISTS public.notification_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    channel notification_channel NOT NULL,
    read BOOLEAN DEFAULT false,
    action_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.task_assignees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timetable_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calendar_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.document_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.check_ins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sprints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_log ENABLE ROW LEVEL SECURITY;

-- 5. Create basic RLS Policies (Draft)
-- Users can read all users (to see status), but update only themselves
CREATE POLICY "Users can view all member statuses" ON public.users FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON public.users FOR UPDATE USING (auth.uid() = id);

-- Everyone can view events
CREATE POLICY "Everyone can view events" ON public.events FOR SELECT USING (true);

-- Users can manage their own RSVPs
CREATE POLICY "Users can manage own RSVPs" ON public.event_rsvps FOR ALL USING (auth.uid() = user_id);

-- Tasks: View any task, manage assigned or created ones
CREATE POLICY "View all tasks" ON public.tasks FOR SELECT USING (true);
CREATE POLICY "Manage own tasks" ON public.tasks FOR ALL USING (auth.uid() = created_by OR EXISTS (SELECT 1 FROM public.task_assignees WHERE task_id = tasks.id AND user_id = auth.uid()));

-- Timetable: Private per user
CREATE POLICY "User managed timetable" ON public.timetable_blocks FOR ALL USING (auth.uid() = user_id);
