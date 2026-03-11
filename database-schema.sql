-- USERS TABLE 
-- Ties into Supabase's built-in Auth system
CREATE TABLE IF NOT EXISTS public.users (
  id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  full_name text,
  email text,
  role text DEFAULT 'operative',
  status text DEFAULT 'offline',
  current_location text DEFAULT 'UNKNOWN',
  last_active timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now()
);

-- AUTO-CREATE USER TRIGGER
-- When a teammate logs in via Magic Link for the first time, this automatically creates their profile in your public.users table.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, full_name, email)
  values (new.id, split_part(new.email, '@', 1), new.email);
  return new;
end;
$$ language plpgsql security definer;

-- Only create the trigger if it doesn't already exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
  END IF;
END
$$;

-- EVENTS TABLE (For the Event Radar)
CREATE TABLE IF NOT EXISTS public.events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  source text,
  source_url text,
  start_time timestamp with time zone,
  location text,
  status text DEFAULT 'discovered',
  relevance_score integer DEFAULT 0,
  tags text[] DEFAULT '{}',
  crew_rsvp text[] DEFAULT '{}',
  created_at timestamp with time zone DEFAULT now()
);

-- CHECK-INS TABLE (For Action Stream)
CREATE TABLE IF NOT EXISTS public.check_ins (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
  today text NOT NULL,
  blockers text DEFAULT 'NONE',
  created_at timestamp with time zone DEFAULT now()
);

-- TIMETABLE TABLE (For College Sync)
CREATE TABLE IF NOT EXISTS public.timetable_blocks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
  day text NOT NULL,
  start_time text NOT NULL,
  end_time text,
  title text NOT NULL,
  type text NOT NULL,
  location text,
  mandatory boolean DEFAULT true,
  status text DEFAULT 'SCHEDULED',
  created_at timestamp with time zone DEFAULT now()
);

-- DOCUMENTS TABLE (For Knowledge Vault)
CREATE TABLE IF NOT EXISTS public.documents (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  category text,
  tags text[] DEFAULT '{}',
  content_url text,
  author_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
  classification text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- TASKS TABLE (For the Task Engine)
CREATE TABLE IF NOT EXISTS public.tasks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  status text DEFAULT 'backlog',
  priority text DEFAULT 'medium',
  assignee_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
  created_at timestamp with time zone DEFAULT now(),
  due_date timestamp with time zone,
  tags text[] DEFAULT '{}'
);

-- SECURITY & PERMISSIONS (Row Level Security)
-- This allows any logged-in operative to read and write to these tables.
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.check_ins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timetable_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow team access" ON public.users FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow team access" ON public.events FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow team access" ON public.check_ins FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow team access" ON public.timetable_blocks FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow team access" ON public.documents FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow team access" ON public.tasks FOR ALL USING (auth.role() = 'authenticated');

-- REAL-TIME ENABLERS
-- This tells Supabase to instantly broadcast changes to your dashboard
alter publication supabase_realtime add table public.users;
alter publication supabase_realtime add table public.events;
alter publication supabase_realtime add table public.check_ins;
alter publication supabase_realtime add table public.tasks;
