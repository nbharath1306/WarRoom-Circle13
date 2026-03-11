# CIRCLE13 — THE WAR ROOM

## Command Center & Builder's Hub

### Product Requirements Document — FREE STACK EDITION

**Version 2.0 • March 2026**
**Prepared for: Integravity (Build Team)**
**Stack Cost: $0/month — Forever**

---

> **THE ONE-LINE VISION:**
> The War Room is Circle13's single-pane-of-glass command center that eliminates calendar chaos, automates event participation, syncs every team member's life (work + college), and turns a scattered crew into a synchronized strike force — built entirely on free-tier infrastructure.

---

## Table of Contents

1. [Executive Summary & Vision](#1-executive-summary--vision)
2. [Problem Statement & Pain Points](#2-problem-statement--pain-points)
3. [Product Philosophy: The War Room Manifesto](#3-product-philosophy-the-war-room-manifesto)
4. [User Personas & Roles](#4-user-personas--roles)
5. [Core Feature Modules (13 Modules)](#5-core-feature-modules-13-modules)
   - 5.1 Mission Control Dashboard
   - 5.2 Unified Calendar Engine
   - 5.3 Event Radar (Discovery & Auto-Apply)
   - 5.4 College Timetable Sync
   - 5.5 Availability Matrix
   - 5.6 Task & Sprint Engine
   - 5.7 Team Pulse (Status & Check-ins)
   - 5.8 Knowledge Vault
   - 5.9 Notification Command Layer
   - 5.10 AI Copilot (Circle Brain)
   - 5.11 Analytics War Board
   - 5.12 Integrations Hub
   - 5.13 Admin & Settings Panel
6. [System Architecture & Tech Stack (100% Free)](#6-system-architecture--tech-stack-100-free)
7. [Data Models & Database Schema](#7-data-models--database-schema)
8. [API Architecture](#8-api-architecture)
9. [UI/UX Design System](#9-uiux-design-system)
10. [Security & Access Control](#10-security--access-control)
11. [Development Roadmap & Phasing](#11-development-roadmap--phasing)
12. [Success Metrics & KPIs](#12-success-metrics--kpis)
13. [Risk Assessment & Mitigations](#13-risk-assessment--mitigations)
14. [Free Tier Limits & Survival Guide](#14-free-tier-limits--survival-guide)
15. [Appendix: API Reference for All Free Services](#15-appendix-api-reference-for-all-free-services)

---

## 1. Executive Summary & Vision

Circle13 operates at the intersection of AI, hackathons, meetups, and builder culture. The team is composed of ambitious individuals who are simultaneously managing college timetables, personal projects, Luma events, hackathon registrations, and company deliverables. The current workflow is fragmented: some people apply for events, others miss them; calendars are out of sync; nobody knows who's free when; and critical opportunities slip through the cracks.

**The War Room changes this entirely.** It is not a calendar app. It is not a task manager. It is the operational nerve center of Circle13 — a builder's hub where every team member opens one tool and sees everything: what's happening, what needs to happen, who's doing what, and what's coming next.

### What Makes This Different

- **Zero-Juggle Philosophy:** One tool replaces the chaos of Google Calendar + Notion + Luma + WhatsApp + Spreadsheets. Open the War Room, and you're in the flow.
- **Auto-Apply Engine:** The system discovers Luma events, hackathons, and AI meetups relevant to Circle13, and auto-registers the entire team (or flags for approval) — nobody gets left behind.
- **College-Aware Scheduling:** Every member inputs their college timetable. The system knows who's in class, who's free, and auto-suggests the best time for anything.
- **Builder's Flow State:** Designed for people who build. Not a corporate project management tool. A war room with personality, speed, and zero friction.
- **AI-Native:** An embedded AI copilot (Circle Brain) powered by Groq's free-tier LLaMA models that reads the room — suggests events, flags conflicts, drafts to-dos, and keeps the team moving.
- **$0 Forever:** Every single service in this stack is free-tier. No credit card. No trial. No "upgrade or die." Built to run indefinitely at zero cost.

### Why This Is Also a Sellable Product

The War Room isn't just an internal tool. Any college club, hackathon community, student org, freelance collective, or small builder team (under 50 people) has the exact same problems. This is a SaaS product waiting to happen. The free stack means your margins start at 100% from day one.

---

## 2. Problem Statement & Pain Points

| # | Pain Point | Impact | Severity |
|---|-----------|--------|----------|
| P1 | Luma events: some apply, some don't | Fragmented team presence at events; missed networking | **Critical** |
| P2 | No shared calendar that everyone trusts | Double-bookings, missed deadlines, scheduling via WhatsApp | **Critical** |
| P3 | College timetable not factored into planning | Events scheduled when members are in class | **High** |
| P4 | Hackathon deadlines discovered too late | Team misses registration windows for top hackathons | **High** |
| P5 | No central task/to-do system | Tasks live in DMs, heads, and scattered notes | **High** |
| P6 | No visibility into who's working on what | Duplicate effort, unbalanced workload | **Medium** |
| P7 | Event follow-ups lost after attending | No post-event action items, contacts not logged | **Medium** |
| P8 | Manual effort to find relevant AI events | Hours spent browsing Luma, Eventbrite, Meetup | **Medium** |
| P9 | No company-wide dashboard or status view | Leadership lacks real-time team pulse | **Medium** |
| P10 | Switching between 5+ tools daily | Context-switching kills flow and productivity | **High** |

> **THE CORE INSIGHT:** Circle13 doesn't need another app. It needs a single operational system that makes the whole team move as one unit. The problem isn't missing features — it's missing cohesion.

---

## 3. Product Philosophy: The War Room Manifesto

Every design and engineering decision in this product must pass through these five principles:

### Principle 1: One Open, Everything Visible
When a Circle13 member opens the War Room, they should see everything relevant to them within 2 seconds. No navigation needed. The dashboard IS the product. Not a homepage that leads to features — but a living, breathing command screen.

### Principle 2: Move Together or Don't Move
If an event is worth attending, the whole team attends. If a hackathon is worth entering, the whole team knows. The system enforces collective motion. Auto-apply, auto-notify, auto-sync. No one gets left behind because they didn't check Luma that day.

### Principle 3: College Life Is Real Life
These are builders who are also students. Their college timetable is sacred and must be respected. The system must natively understand class schedules, exam periods, and academic deadlines — and work around them, not against them.

### Principle 4: Automation Over Reminders
Don't remind people to do things. Do the things. Auto-register for events. Auto-block calendar slots. Auto-assign recurring tasks. Auto-flag conflicts. The War Room is proactive, not reactive.

### Principle 5: Builder Aesthetic, Not Corporate UI
This is not Jira. This is not Monday.com. The UI should feel like a hacker's command terminal meets a sleek gaming dashboard. Dark mode default. Real-time data. Keyboard-first navigation. Animations that feel intentional, not decorative.

---

## 4. User Personas & Roles

| Role | Description | Permissions | Key Needs |
|------|------------|-------------|-----------|
| **Admin / Founder** | Circle13 leadership | Full access: all settings, team management, auto-apply rules, analytics | Bird's-eye view of entire team, event ROI, team pulse |
| **Core Member** | Active builders on the team | View/edit own tasks, RSVP to events, update availability, access knowledge vault | Know what's happening, what's due, and where to be |
| **Collaborator** | External friends, mentors, temporary contributors | Limited view: shared calendar, event invites, assigned tasks only | Quick context without full system access |
| **Circle Brain (AI)** | The embedded AI agent | Read access to all data; write access to suggestions, drafts, and notifications | Context from all modules to provide intelligent assistance |

### Permission Matrix

| Feature | Admin | Core Member | Collaborator |
|---------|-------|-------------|-------------|
| Mission Control Dashboard | Full | Personal + Team View | Limited View |
| Unified Calendar | Full CRUD + Rules | CRUD Own Events | View Only |
| Event Radar Settings | Configure Sources & Auto-Apply | View & Manual RSVP | View Shared Events |
| College Timetable | View All Members | CRUD Own Timetable | N/A |
| Task Engine | Create/Assign Any Task | CRUD Own + Assigned Tasks | Assigned Tasks Only |
| Analytics War Board | Full Access | Personal Metrics | N/A |
| Admin Panel | Full Access | N/A | N/A |
| Knowledge Vault | Full CRUD + Archive | CRUD + Upload | Read Only |
| AI Copilot Settings | Configure Behaviors | Use Suggestions | Limited |

---

## 5. Core Feature Modules (13 Modules)

The War Room is composed of 13 interconnected modules. Each module is designed to be independently functional but deeply integrated with others through shared data models and real-time event streams.

---

### 5.1 Mission Control Dashboard

The nerve center. The first thing anyone sees. A single-screen, real-time operational dashboard that eliminates the need to navigate anywhere else for 80% of daily interactions.

#### Layout Architecture

- **Hero Panel (Top):** Current date/time, countdown to next event, quick team pulse (who's online, who's in class, who's free)
- **Left Column — Today's Agenda:** Merged timeline showing personal tasks, team events, Luma registrations, and college classes in a single chronological feed
- **Center Column — Action Stream:** Real-time feed of what's happening: new events discovered, tasks completed, RSVPs confirmed, and team updates
- **Right Column — Quick Actions:** One-click: create task, RSVP to event, mark attendance, ping team, start focus timer
- **Bottom Bar — Upcoming (7-day horizon):** Visual timeline showing the next 7 days with event density, task deadlines, and free-slot indicators

#### Key Behaviors

- Dashboard is fully real-time (Supabase Realtime over WebSocket) — no refresh needed
- Personalizes per user: shows your tasks, your classes, your events first
- Global search bar (Cmd+K) searches across all modules: tasks, events, people, docs
- Keyboard shortcuts for every major action (documented in the help overlay)
- Dark mode default with optional light mode toggle
- Responsive: works on desktop (primary), tablet, and mobile (read-heavy)

#### Technical Implementation

- **Realtime Engine:** Supabase Realtime subscriptions on `events`, `tasks`, `users`, `check_ins` tables
- **State Management:** Zustand store per dashboard section + React Query for server state caching
- **Command Palette:** cmdk library (open source, same as Vercel's Cmd+K) for global fuzzy search
- **Data Aggregation:** Single Next.js API route `/api/dashboard/feed` that merges today's events, tasks, and check-ins into one sorted feed. Uses Supabase RPC (Postgres functions) for efficient server-side aggregation

---

### 5.2 Unified Calendar Engine

A custom-built calendar that replaces Google Calendar entirely for Circle13's needs. Not just "showing events" — but a calendar that understands context, priority, and team dynamics.

#### Calendar Layers (Toggleable Overlays)

| Layer | Color Code | Source | Description |
|-------|-----------|--------|-------------|
| Personal Tasks | Blue | Internal task engine | Your assigned tasks with estimated time blocks |
| Team Events | Red/Accent | Event Radar + Manual | Luma events, hackathons, meetups the team is attending |
| College Classes | Green | Timetable Sync | Recurring lecture/lab blocks from each member's timetable |
| Company Deadlines | Orange | Task Engine (tagged) | Sprint deadlines, deliverables, demo days |
| Focus Blocks | Purple | Manual / AI-suggested | Protected deep work time |
| Holidays / Breaks | Gray | Admin-configured | Public holidays, college exam weeks, planned breaks |

#### Views

- **Day View:** Hour-by-hour with all layers merged. See conflicts instantly.
- **Week View:** Default view. Dense but scannable. Team overlay mode shows all members stacked.
- **Month View:** Event density heatmap. High-event days glow. Empty days are dimmed.
- **Team Availability View:** Grid showing all members' free/busy status across days. The "when can we all meet" view.

#### Critical Features

- Drag-to-create events directly on calendar
- Conflict detection: Warns if an event overlaps with college class or another event
- One-click team-wide event creation: Creates event + notifies all members + adds to everyone's calendar
- Recurring events with smart exceptions (skip during exam weeks)
- ICS export for those who still want to sync to personal calendars
- Time zone awareness (if team members are in different zones)

#### Technical Implementation

- **Calendar UI:** Build custom calendar grid using React + date-fns (no heavy lib like FullCalendar). Tailwind for styling, Framer Motion for drag interactions
- **Conflict Detection:** Postgres function `check_conflicts(user_id, start_time, end_time)` that queries `timetable_blocks`, `calendar_events`, and `event_rsvps` in one call
- **ICS Export:** Next.js API route `/api/calendar/ics/:userId` generating iCal format using the `ics` npm package
- **Drag-to-Create:** Use `@dnd-kit/core` for drag interactions on the calendar grid. On drop, open event creation modal pre-filled with the selected time slot

---

### 5.3 Event Radar (Discovery & Auto-Apply)

> **THIS IS THE KILLER FEATURE.** No other internal tool does this. The Event Radar turns Circle13 from a team that occasionally attends events into a team that never misses one.

#### Event Sources (Integrations)

| Source | Integration Method | Data Pulled | Auto-Apply Support |
|--------|-------------------|-------------|-------------------|
| **Luma (lu.ma)** | Official API (API Key auth, `x-luma-api-key` header) | Events, guests, RSVPs, calendar data | **Yes** — auto-register via API |
| **Eventbrite** | Public API + scraping fallback | Events by location/category, ticket info | Semi — reserve free tickets via API |
| **Meetup.com** | GraphQL API (OAuth) or web scraping | Events by group/location, RSVP counts | Manual RSVP (link provided) |
| **Devpost** | Web scraper (Cheerio — no public API) | Hackathons, deadlines, prizes, themes | No — flag + provide link |
| **MLH (Major League Hacking)** | Web scraper (season page) | Hackathon season schedule | No — flag + provide link |
| **LinkedIn Events** | Web scraper (public events) | Professional AI/tech events | No — flag + provide link |
| **Custom RSS/URLs** | RSS parser or URL monitoring | Any event source the admin adds | Configurable |

#### Event Discovery Pipeline

1. **Scan:** Cron job (Supabase Edge Function triggered by pg_cron OR GitHub Actions cron) runs every 6 hours, querying all configured sources for new events matching Circle13's interest tags (AI, ML, hackathon, Web3, startup, builder, etc.)
2. **Enrich:** Each discovered event is enriched with metadata: location, cost, date, expected audience size, relevance score (AI-computed via Groq), and conflict analysis against team calendars
3. **Score:** Events are scored on relevance (0-100) based on: tag match, past attendance patterns, team interest signals, event organizer reputation, and geographic proximity. Scoring uses Groq API (LLaMA 3.1 8B) for intelligent tag matching and contextual relevance
4. **Surface:** Events scoring above the threshold (configurable, default 60) appear in the Event Radar feed on the dashboard
5. **Auto-Action:** Based on admin-configured rules, the system either auto-registers the team (for Luma events with API support), auto-reserves spots, or sends a notification requiring manual RSVP
6. **Track:** All registered events are added to the unified calendar, with RSVP status tracked per member

#### Auto-Apply Rules Engine

The admin configures rules that determine automatic behavior:

```
Rule: IF source = Luma AND relevance_score > 75 AND cost = free
      THEN auto-register entire team

Rule: IF source = Devpost AND category = hackathon AND deadline > 7 days away
      THEN notify + add to team calendar as "Pending"

Rule: IF any event conflicts with > 50% of team's college classes
      THEN flag for manual review

Rule: IF event is in the same city AND date is weekend
      THEN auto-register + create travel logistics task
```

Rules are stored in the `automation_rules` table as JSON and evaluated by a Next.js API route after each scan cycle.

#### Luma (lu.ma) Integration
- **Strategy**: Public Web Scraping (Cheerio) of calendar pages.
- **Data Pulled**: Public event details, slugs, and RSVPs.
- **Cost**: $0 (FREE).
- **Authentication**: None required for discovery.

#### Event Detail Card (UI)

Each event in the radar shows:
- Event name, date/time, location (with map link), and cover image
- Relevance score badge (color-coded: green >80, yellow 60-80, red <60)
- Team RSVP status: avatars of who's registered, who's pending, who has conflicts
- One-click actions: "Register All" / "Register Me" / "Skip" / "Discuss"
- Conflict warnings: "3 members have college classes during this event"
- Post-event: transforms into a debrief card with notes, contacts, and follow-up tasks

#### Technical Implementation

- **Cron Strategy (FREE):** Two options, use BOTH for reliability:
  - **Primary:** Supabase Edge Function invoked by `pg_cron` extension (available on free tier) — runs every 6 hours
  - **Backup:** GitHub Actions scheduled workflow (`.github/workflows/event-scan.yml` with `cron: '0 */6 * * *'`) — calls your Next.js API route via HTTP. GitHub Actions gives 2,000 free minutes/month
- **Scraping Stack:** Cheerio (HTML parsing, lightweight) for Devpost/MLH/LinkedIn. No Puppeteer needed — these pages are server-rendered. Fetch HTML → parse with Cheerio → extract event data → upsert into `events` table
- **AI Scoring:** Groq API call with LLaMA 3.1 8B Instant. Prompt includes: event title, description, tags, Circle13 interest profile. Response: relevance score 0-100 + reasoning. Costs 0 tokens from your wallet (Groq free tier)

---

### 5.4 College Timetable Sync

Circle13 members are students. Their academic schedule is non-negotiable. This module ensures college life and Circle13 life coexist without conflict.

#### Input Methods

1. **Manual Entry:** Grid-based weekly timetable builder (day × time slots). Enter course name, room, professor. Supports recurring patterns (MWF, TTh, etc.)
2. **Spreadsheet Import:** Upload CSV/Excel of timetable (standardized template provided)
3. **Photo/Screenshot OCR:** Upload a photo of the college timetable. AI extracts schedule using Tesseract.js (runs in browser, completely free) + Groq LLaMA for parsing the OCR text into structured JSON data
4. **ICS Import:** If the college provides an .ics calendar file, import directly using the `ical.js` npm package

#### How It Integrates

- College blocks appear as immovable, green-colored events on the unified calendar
- The Availability Matrix excludes college hours automatically
- Event Radar checks for college conflicts before auto-registering
- **Exam Period Mode:** Members can flag "exam week" which reduces notifications, blocks non-critical events, and marks them as unavailable
- Semester change detection: System prompts users to update timetable at the start of each semester (configurable date triggers)

#### Technical Implementation

- **OCR Pipeline (FREE):**
  1. User uploads photo → browser resizes to 1500px max width (canvas API)
  2. Tesseract.js runs OCR in the browser (Web Worker, no server cost)
  3. Extracted text sent to Groq API (LLaMA 3.1 8B) with prompt: "Parse this college timetable text into JSON: {day, start_time, end_time, course_name, room, professor}"
  4. User reviews/edits the parsed result → saves to `timetable_blocks` table
- **Data Model:** `timetable_blocks` table with: `user_id`, `day_of_week` (0-6), `start_time`, `end_time`, `course_name`, `room`, `professor`, `semester`, `is_active`
- **ICS Parsing:** Use `ical.js` npm package to parse `.ics` files client-side, extract `VEVENT` components, map to `timetable_blocks` format

---

### 5.5 Availability Matrix

The "who's free when" engine. This module computes real-time availability across the entire team by synthesizing data from every other module.

#### Data Sources for Availability

- College timetable blocks (from 5.4)
- Calendar events (from 5.2)
- Task time estimates (from 5.6)
- Focus blocks (from 5.2)
- Manual "busy/away" status (from 5.7)
- Event registrations (from 5.3)

#### Views

- **Heat Grid:** Week view where each cell (member × hour) is color-coded: green (free), yellow (soft-booked), red (hard-blocked). Instantly see when the whole team can meet.
- **Best Slot Finder:** Enter a duration (e.g., 2 hours) and number of required members, and the system returns the top 5 time slots ranked by team overlap.
- **Individual View:** Drill into any member's week to see their full breakdown: classes, events, tasks, free time.

#### Technical Implementation

- **Availability Computation:** Postgres function `compute_availability(team_id, start_date, end_date)` that:
  1. Queries `timetable_blocks` for the date range (expand recurring blocks to actual dates)
  2. Queries `calendar_events` and `event_rsvps` for booked slots
  3. Queries `tasks` where `estimated_minutes > 0` and status is `in_progress`
  4. Returns a matrix: `{user_id, date, hour, status: 'free' | 'soft' | 'hard'}`
- **Best Slot Algorithm:** Postgres function that iterates over available slots, counts free members per slot, and returns top N ranked by overlap. No external service needed — pure SQL
- **Caching:** Results cached in React Query with 5-minute stale time. Invalidated on any relevant table change via Supabase Realtime subscription
- **Heat Grid Rendering:** Custom React component using CSS Grid. Each cell is a div with background color set by status. Tooltip on hover shows who's busy and why

---

### 5.6 Task & Sprint Engine

A builder-friendly task management system. Not Jira. Not Linear. Something that respects the speed at which Circle13 moves.

#### Task Structure

| Field | Type | Description |
|-------|------|-------------|
| Title | Text | Short, action-oriented title |
| Description | Rich Text | Markdown-supported detailed description |
| Assignee(s) | User[] | One or more team members |
| Status | Enum | Backlog → To Do → In Progress → Review → Done |
| Priority | Enum | P0 (Fire) / P1 (Urgent) / P2 (Normal) / P3 (Low) |
| Due Date | DateTime | Deadline with time; shows on calendar |
| Estimated Time | Duration | How long this should take (used for calendar blocking) |
| Tags | String[] | Freeform tags: project name, sprint, category |
| Linked Event | Reference | Link to an event (e.g., "Prepare demo for Hackathon X") |
| Subtasks | Task[] | Nested checklist items |
| Attachments | File[] | Upload files, links, screenshots |

#### Views

- **Kanban Board:** Drag-and-drop columns (Backlog → Done). Filter by assignee, tag, priority.
- **List View:** Sortable table with all task fields visible. Bulk actions (assign, tag, priority).
- **My Tasks:** Personal view showing only your assigned tasks, sorted by due date.
- **Sprint View:** Group tasks into time-boxed sprints (1 or 2 weeks). Track sprint velocity.
- **Calendar Integration:** Tasks with due dates appear as deadline markers on the calendar. Tasks with time estimates can be drag-dropped into calendar slots.

#### Automation Rules

- **Auto-create task:** When the team registers for a hackathon, auto-create prep tasks (brainstorm, form team, submit project)
- **Auto-assign:** Rotating assignment for recurring tasks (weekly meeting notes, social media posts)
- **Auto-escalate:** If a P1 task hasn't been updated in 48 hours, notify admin
- **Auto-close:** Tasks linked to events auto-close 24 hours after the event ends
- **Due date reminders:** 24 hours before, 2 hours before, at deadline

#### Technical Implementation

- **Kanban DnD:** `@dnd-kit/core` + `@dnd-kit/sortable` for drag-and-drop. On drop, update task `status` and `position` (integer for ordering within column) via Supabase
- **Sprint Velocity:** Postgres function that counts tasks completed per sprint, calculates average, and returns trend data for Recharts visualization
- **Task Automation:** Evaluated by a Supabase Edge Function triggered by database webhooks. When `events` table has a new row with `status = 'registered'` and `source = 'devpost'`, create tasks from a template stored in `automation_rules`
- **Bulk Actions:** Supabase RPC function `bulk_update_tasks(task_ids[], field, value)` for efficient batch operations

---

### 5.7 Team Pulse (Status & Check-ins)

Real-time awareness of where everyone is and what they're doing, without the overhead of standups or constant messaging.

#### Status System

| Status | Icon | Meaning | Auto-Detection |
|--------|------|---------|---------------|
| Building | 🛠️ | In deep work / coding | Manual or Focus Timer active |
| In Class | 🎓 | Attending college class | Auto from timetable |
| At Event | 🎪 | Attending a registered event | Auto from event calendar |
| Available | 🟢 | Free and reachable | Default when no blocks |
| Away | 🔴 | Do not disturb | Manual |
| Offline | ⚪ | Not active in the tool | Auto after 30min inactivity |

#### Daily Check-in (Async Standup)

Each morning (configurable time), every member gets a nudge to answer three questions:
1. What did you work on yesterday?
2. What are you working on today?
3. Any blockers?

Responses are aggregated into a team-wide daily digest visible on the dashboard. No meeting needed.

#### Weekly Pulse Survey (Optional)

- Quick 1-5 scale: Energy level, workload feeling, excitement about current projects
- Anonymous option available
- Results feed into Analytics War Board for leadership insights

#### Technical Implementation

- **Auto-Status:** Supabase Edge Function runs every 15 minutes via pg_cron. Checks current time against `timetable_blocks` and `event_rsvps` for each user. Updates `users.status` accordingly
- **Check-in Nudge:** Telegram bot sends daily message at configured time. User replies in Telegram → bot webhook → Supabase insert into `check_ins` table
- **Inactivity Detection:** Track `users.last_active_at` via middleware in Next.js. If `now() - last_active_at > 30 minutes`, set status to `offline`
- **Pulse Survey:** Simple form component. Results stored in `pulse_responses` table. Aggregate queries for analytics

---

### 5.8 Knowledge Vault

A shared brain for Circle13. Everything the team learns, builds, and references lives here.

#### Content Types

- **Meeting Notes:** Auto-linked to calendar events. Template-based (attendees, agenda, decisions, action items).
- **Event Debriefs:** Post-event summaries. Who we met, what we learned, follow-up actions.
- **Technical Docs:** How-tos, setup guides, architecture docs, API references.
- **Templates:** Reusable templates for hackathon submissions, pitch decks, project READMEs.
- **Bookmarks:** Curated links organized by topic (AI tools, funding resources, design inspiration).
- **Decision Log:** Record of key decisions with context, alternatives considered, and reasoning.

#### Organization

- Folder structure: By project, by event, by type. Customizable.
- Tags: Freeform + system-generated (auto-tags based on content via Groq AI).
- Full-text search across all documents (PostgreSQL `pg_trgm` + `to_tsvector`).
- Version history on all documents (stored as JSONB diffs in `document_versions` table).
- Markdown editor with live preview and collaborative editing.

#### Technical Implementation

- **Markdown Editor:** Use `@uiw/react-md-editor` (open source, free) or build custom with `react-markdown` + `remark` plugins
- **Full-Text Search:** Enable `pg_trgm` extension in Supabase. Create GIN index on `documents.content`. Use `ts_rank` for relevance-sorted results
- **Version History:** On each save, compute diff using `json-diff` npm package. Store in `document_versions` table. "Restore" reconstructs from diffs
- **File Attachments:** Upload to Supabase Storage (1 GB free). Generate signed URLs for access. File types: images, PDFs, code files
- **Auto-Tagging:** On document save, send title + first 500 chars to Groq API (LLaMA 3.1 8B Instant). Prompt: "Extract 3-5 topic tags from this content." Merge with existing tags

---

### 5.9 Notification Command Layer

Notifications done right. Not a spam firehose. A precision communication system that respects focus and delivers information at the right time through the right channel.

#### Notification Channels

| Channel | Use Case | Urgency | Cost |
|---------|---------|---------|------|
| **In-App (Bell Icon)** | Default for all notifications | All | FREE (Supabase Realtime) |
| **Push Notification (PWA)** | Events starting soon, P0 tasks, conflict alerts | High | FREE (Web Push API + VAPID keys) |
| **Email Digest** | Daily summary of what happened + what's coming | Low (batch) | FREE (Resend free tier: 3,000/month OR Nodemailer + Gmail SMTP: 500/day) |
| **Telegram Bot** | Critical alerts, check-in nudges, quick replies | Critical | FREE (Telegram Bot API: unlimited) |
| **Discord Webhook** | Team-wide announcements, event discoveries | Medium | FREE (Discord webhooks: unlimited) |

#### Notification Types

- Event discovered (new high-relevance event found by radar)
- Event auto-registered (confirmation of automatic registration)
- Calendar conflict detected
- Task assigned / due / overdue
- Team check-in reminder
- Someone updated availability / status
- Weekly pulse results ready
- New document in Knowledge Vault

#### Smart Notification Rules

- **Do Not Disturb:** Respects focus blocks and college class hours — queues non-critical notifications
- **Batching:** Groups low-priority notifications into hourly/daily digests
- **Escalation:** If an event RSVP requires action and hasn't been responded to in 12 hours, re-notify via higher-urgency channel
- **De-duplication:** Prevents the same notification from appearing across multiple channels simultaneously

#### Technical Implementation

- **In-App:** Supabase Realtime subscription on `notification_log` table. New inserts trigger toast (react-hot-toast) + badge count update
- **Web Push (PWA):** Generate VAPID keys (free, one-time). Use `web-push` npm package in Next.js API route. Store push subscriptions in `push_subscriptions` table. Service worker handles display
- **Telegram Bot:**
  - Create bot via @BotFather (free, 2 minutes)
  - Set webhook to your Next.js API route: `/api/telegram/webhook`
  - Outbound: `POST https://api.telegram.org/bot{TOKEN}/sendMessage`
  - Inbound: Parse updates for check-in replies, quick RSVP responses
  - Group mode: Add bot to Circle13 Telegram group for announcements
- **Discord Webhook:** Admin configures webhook URL per channel. `POST` to webhook URL with embed payload. No bot required
- **Email Digest:** Daily cron (GitHub Actions or Supabase pg_cron) at 8 AM. Query yesterday's notifications + today's upcoming events. Send via Resend API (100 emails/day free) or Nodemailer + Gmail SMTP
- **DND Engine:** Before dispatching any notification, check `users.notification_prefs` (JSONB) for DND schedules, channel preferences, and batching rules. Queue non-critical notifications in `notification_queue` table for batch delivery

---

### 5.10 AI Copilot (Circle Brain)

> **CIRCLE BRAIN IS NOT A CHATBOT.** It's an ambient intelligence. It reads the context of what's happening across all modules and surfaces suggestions naturally — like a brilliant co-founder who's always paying attention.

#### Capabilities

| Capability | Module | Example |
|-----------|--------|---------|
| Event Recommendation | Event Radar | "This Luma event on 'AI Agents' matches your team's interests. 4/6 members are free. Auto-register?" |
| Conflict Resolution | Calendar | "You have a class at 2 PM but the hackathon kickoff is at 1:30 PM. Suggest asking Prof. X for leave or joining 30 min late." |
| Task Generation | Task Engine | "You registered for HackAI 2026. I've created 4 prep tasks: brainstorm, team formation, tech stack decision, and submission." |
| Smart Scheduling | Availability Matrix | "The best time for a full-team sync this week is Thursday 4-5 PM. Only Priya has a soft conflict." |
| Debrief Prompts | Knowledge Vault | "You attended Build Day yesterday. Want to log a debrief? I've pre-filled attendees and the agenda." |
| Anomaly Detection | Team Pulse | "Raj hasn't checked in for 3 days and has 4 overdue tasks. Flag for admin?" |
| Weekly Summary | Analytics | "This week: 3 events attended, 12 tasks completed, 2 hackathons registered. Team velocity up 15%." |

#### Implementation (100% FREE via Groq)

- **Primary Model:** Groq API — `llama-3.3-70b-versatile` for complex reasoning (event recommendations, conflict resolution, weekly summaries). Free tier: ~6,000 tokens/min, ~500,000 tokens/day
- **Fast Model:** Groq API — `llama-3.1-8b-instant` for quick tasks (classification, tagging, simple suggestions). Free tier: ~30,000 tokens/min
- **Fallback Strategy:** If Groq rate limit hit (429 error), queue the request and retry after 60 seconds. For non-urgent suggestions, defer to next cron cycle
- **System Prompt:** Pre-loaded with Circle13 context, team structure, current state (injected dynamically from Supabase data)
- **Context Window:** Each AI call includes relevant module data injected as structured context:
  ```
  {team_members, current_calendar_week, upcoming_events, open_tasks, recent_check_ins}
  ```
- **Trigger Types:**
  - **Scheduled:** Daily summary (cron at 9 AM), weekly report (cron on Monday)
  - **Event-driven:** New event discovered, conflict detected, task overdue (Supabase database webhooks → Edge Function → Groq API)
  - **User-invoked:** Ask Circle Brain via Cmd+K command palette or dedicated chat panel
- **Conversation Memory:** Store past interactions per user in `ai_conversations` table. Include last 5 exchanges in context window for continuity
- **Safety:** AI suggestions require human confirmation for actions with side effects (registrations, task creation). Read-only suggestions are shown inline without confirmation

#### Token Budget Management (Staying Within Free Tier)

```
Daily Budget: ~500,000 tokens (LLaMA 3.3 70B on Groq Free)

Breakdown:
- Event scoring (4x/day scan × 20 events × ~200 tokens) = ~16,000 tokens
- Daily summary (1x × ~1,000 tokens)                    = ~1,000 tokens
- User-invoked queries (~30/day × ~500 tokens)           = ~15,000 tokens
- Auto-suggestions (~50/day × ~300 tokens)               = ~15,000 tokens
- Weekly report (1x/week ÷ 7 × ~2,000 tokens)           = ~285 tokens
- OCR parsing (~5/day × ~500 tokens)                     = ~2,500 tokens

TOTAL DAILY USAGE: ~49,785 tokens (~10% of daily limit)

Verdict: MASSIVE headroom. You could 10x usage and still be fine.
```

---

### 5.11 Analytics War Board

Data-driven insights for Circle13 leadership. See the team's operational health at a glance.

#### Dashboards

1. **Event Participation:** Events discovered vs. registered vs. attended. Per-member breakdown. Event ROI (contacts made, projects started).
2. **Task Velocity:** Tasks created vs. completed per sprint. Average completion time. Overdue rate. Per-member workload balance.
3. **Calendar Density:** How packed is each member's week? Free time percentage. Meeting load. Focus block adherence.
4. **Team Health:** Weekly pulse scores over time. Check-in participation rate. Activity trends.
5. **Knowledge Growth:** Docs created per month. Most referenced documents. Knowledge gaps (topics with no docs).

#### Export & Reporting

- One-click export of any dashboard to PDF or PNG (html2canvas + jsPDF, both free)
- Scheduled weekly report via Telegram bot or email (cron job)
- Custom date range filters on all metrics
- Comparative views: This week vs. last week, this month vs. last month

#### Technical Implementation

- **Charts:** Recharts library (free, React-native charting). All 5 dashboards are React components with Recharts visualizations
- **Data Aggregation:** Postgres functions for each metric:
  - `get_event_participation(date_range)` — joins `events` + `event_rsvps`, groups by status
  - `get_task_velocity(sprint_id)` — counts tasks by status transitions over time
  - `get_calendar_density(user_id, date_range)` — calculates free/busy percentages
  - `get_team_health(date_range)` — averages pulse scores, counts check-ins
  - `get_knowledge_growth(date_range)` — counts documents, ranks by reference count
- **PDF Export:** `html2canvas` captures dashboard DOM → `jsPDF` converts to PDF. All client-side, no server cost
- **Weekly Report Automation:** Supabase Edge Function (cron Monday 9 AM) → query all metrics → format as message → send via Telegram bot + email

---

### 5.12 Integrations Hub

The War Room doesn't exist in isolation. It connects to the tools Circle13 already uses and the platforms where events happen.

| Integration | Direction | Purpose | Priority | Cost |
|------------|-----------|---------|----------|------|
| **Luma (lu.ma)** | Bidirectional | Event sync, auto-registration, guest management | P0 (Must Have) | FREE |
| **Telegram Bot** | Bidirectional | Critical notifications, check-in responses, quick actions | P0 | FREE |
| **Discord Webhook** | Outbound | Team-wide announcements, event discoveries | P0 | FREE |
| **GitHub** | Inbound | Track hackathon project repos, commit activity, PR status | P1 | FREE |
| **Eventbrite** | Inbound | Event discovery and import | P1 | FREE |
| **Meetup.com** | Inbound | Event discovery and import | P1 | FREE |
| **Devpost** | Inbound | Hackathon discovery and deadline tracking | P1 | FREE (scraping) |
| **MLH** | Inbound | Hackathon season schedule | P1 | FREE (scraping) |
| **Google Calendar (ICS)** | Outbound | ICS feed for external sync | P2 | FREE |
| **Email (SMTP)** | Outbound | Email notifications and digests | P1 | FREE (Resend free / Gmail SMTP) |
| **Zapier / Make (Webhook)** | Bidirectional | Custom automations and third-party triggers | P2 | FREE (webhook endpoints) |
| **Notion (Export)** | Outbound | Export knowledge vault docs to Notion | P2 | FREE (Notion API free) |

> **NOTE:** WhatsApp Business API has been replaced with Telegram Bot API. Telegram is 100% free with unlimited messages, supports rich formatting, inline keyboards, group bots, and webhook-based real-time communication. No Meta Business approval needed. No per-conversation charges. Ever.

---

### 5.13 Admin & Settings Panel

Full control center for Circle13 leadership to configure every aspect of the War Room.

#### Settings Categories

- **Team Management:** Invite/remove members (email invite flow), assign roles, view activity log
- **Event Radar Config:** Add/remove sources, configure interest tags, set relevance threshold, define auto-apply rules (JSON-based rule editor)
- **Notification Preferences:** Global defaults + per-user overrides for all notification channels (Telegram, Discord, email, push, in-app)
- **Calendar Settings:** Default views, working hours, holiday calendars, timezone settings
- **AI Copilot Config:** Toggle AI features on/off, set suggestion frequency, customize system prompt context
- **Integrations:** API key management (stored encrypted in Supabase Vault), OAuth connections, webhook URLs
- **Data & Privacy:** Data export (JSON/CSV), account deletion, audit log access
- **Appearance:** Theme selection (dark/light), accent color customization, layout density (compact/comfortable)

---

## 6. System Architecture & Tech Stack (100% FREE)

> **ARCHITECTURE PHILOSOPHY:** Modern, serverless-first, open-source where possible, and optimized for a small team that ships fast. No over-engineering. Every choice has a reason. **Every choice is free.**

### 6.1 Complete Tech Stack

| Layer | Technology | Rationale | Cost |
|-------|-----------|-----------|------|
| **Frontend Framework** | Next.js 14+ (App Router, RSC) | SSR + SSG + API routes in one framework. Vercel deployment. | FREE |
| **Language** | TypeScript (strict mode) | Type safety across full stack. Catches bugs at compile time. | FREE |
| **UI Library** | shadcn/ui + Tailwind CSS | Accessible, customizable components. Dark mode native. No vendor lock-in. | FREE |
| **State Management** | Zustand + React Query (TanStack) | Lightweight global state + server state caching. No boilerplate. | FREE |
| **Database** | PostgreSQL (via Supabase) | Relational data model fits calendar/events/tasks perfectly. RLS for access control. | FREE (500 MB) |
| **Backend-as-a-Service** | Supabase (Auth, DB, Realtime, Storage, Edge Functions) | Open-source Firebase alternative. Built on Postgres. Realtime subscriptions. Auth with MFA. | FREE |
| **ORM** | Drizzle ORM | Type-safe SQL queries. Lightweight. Better DX than Prisma for complex queries. | FREE |
| **AI / LLM** | Groq API (LLaMA 3.3 70B + LLaMA 3.1 8B) | Circle Brain copilot. 70B for reasoning, 8B for quick tasks. Blazing fast inference. | **FREE FOREVER** (no credit card) |
| **OCR** | Tesseract.js (browser-side) | College timetable photo extraction. Runs entirely in browser. | FREE |
| **Cron / Background Jobs** | pg_cron (Supabase) + GitHub Actions | Event radar scans, notification digests, scheduled cleanups. | FREE |
| **Realtime** | Supabase Realtime (WebSocket) | Live dashboard updates, status changes, new event notifications. | FREE |
| **Hosting / CDN** | Vercel (Hobby Plan) | Zero-config deployment from Git. Edge network. 100 GB bandwidth/month. | FREE |
| **File Storage** | Supabase Storage (S3-compatible) | Document uploads, event images, timetable screenshots. | FREE (1 GB) |
| **Email** | Resend (free tier) OR Nodemailer + Gmail SMTP | Transactional emails and digests. | FREE (3,000/month or 500/day) |
| **Chat Notifications** | Telegram Bot API | Critical alerts, check-ins, quick actions. Unlimited messages. | **FREE FOREVER** |
| **Team Announcements** | Discord Webhooks | Event discoveries, team announcements. | **FREE FOREVER** |
| **Monitoring / Analytics** | PostHog (free tier) | Product analytics. 1M events/month. Session replays. | FREE |
| **Error Tracking** | Sentry (free tier) | Error monitoring. 5K errors/month. | FREE |
| **Search** | PostgreSQL Full-Text Search (pg_trgm) | Good enough for team-scale. Avoids Elasticsearch complexity. | FREE (built into Supabase) |
| **Mobile** | PWA (Progressive Web App) | Push notifications, offline support, installable. No app store needed. | FREE |
| **Scraping** | Cheerio + node-fetch | Lightweight HTML parsing for Devpost, MLH, LinkedIn event scraping. | FREE |
| **Calendar Export** | ics npm package | Generate ICS feeds for external calendar sync. | FREE |
| **PDF Export** | html2canvas + jsPDF | Client-side dashboard export. No server cost. | FREE |
| **Drag & Drop** | @dnd-kit/core | Kanban board, calendar drag-to-create. | FREE |
| **Command Palette** | cmdk | Cmd+K global search (same as Vercel uses). | FREE |
| **Charts** | Recharts | React-native charting for analytics dashboards. | FREE |

### 6.2 High-Level Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│              CLIENT LAYER (Next.js 14 on Vercel — FREE)          │
│  [Dashboard] [Calendar] [Event Radar] [Tasks] [Vault] [Analytics]│
│  PWA + Service Worker + Web Push + Cmd+K                         │
└───────────────────────────┬──────────────────────────────────────┘
                            │ HTTPS + WebSocket
┌───────────────────────────┴──────────────────────────────────────┐
│              SUPABASE BACKEND LAYER (Free Tier)                   │
│  [PostgreSQL 500MB] [Auth 50K MAU] [Realtime WS] [Storage 1GB]  │
│  [Edge Functions] [Row Level Security] [pg_cron] [Vault]         │
└──┬──────┬──────┬──────┬───────┬──────┬──────┬──────┬──────┬─────┘
   │      │      │      │       │      │      │      │      │
┌──┴──┐┌──┴──┐┌──┴──┐┌──┴───┐┌──┴──┐┌──┴──┐┌──┴──┐┌──┴──┐┌──┴──┐
│Luma ││Evntbr││Meetup││Devpost││MLH  ││Groq ││Tlgrm││Dscrd││Resend│
│ API ││  API ││ GQL  ││Scrape ││Scrpe││ API ││ Bot ││Webhk││Email │
│FREE ││FREE  ││FREE  ││FREE   ││FREE ││FREE ││FREE ││FREE ││FREE  │
└─────┘└──────┘└──────┘└───────┘└─────┘└─────┘└─────┘└─────┘└──────┘

CRON LAYER: pg_cron (Supabase) + GitHub Actions (2,000 min/month FREE)
MONITORING: PostHog (1M events FREE) + Sentry (5K errors FREE)
```

---

## 7. Data Models & Database Schema

All data is stored in Supabase PostgreSQL with Row Level Security (RLS) enabled on every table.

### 7.1 Core Entities

#### `users`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK, default `gen_random_uuid()` | Supabase Auth user ID |
| email | TEXT | UNIQUE, NOT NULL | Login email |
| full_name | TEXT | NOT NULL | Display name |
| avatar_url | TEXT | NULLABLE | Profile picture URL |
| role | ENUM | `admin` \| `member` \| `collaborator` | Access level |
| college_name | TEXT | NULLABLE | College/university name |
| timezone | TEXT | DEFAULT `'Asia/Kolkata'` | User timezone |
| status | ENUM | `available` \| `building` \| `in_class` \| `at_event` \| `away` \| `offline` | Current status |
| status_message | TEXT | NULLABLE | Custom status text |
| notification_prefs | JSONB | DEFAULT `'{}'` | Per-channel notification settings |
| telegram_chat_id | TEXT | NULLABLE | For Telegram bot notifications |
| push_subscription | JSONB | NULLABLE | Web Push subscription object |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | Account creation |
| last_active_at | TIMESTAMPTZ | NULLABLE | Last activity timestamp |

#### `events`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | Internal event ID |
| title | TEXT | NOT NULL | Event name |
| description | TEXT | NULLABLE | Rich text description |
| source | ENUM | `luma` \| `eventbrite` \| `meetup` \| `devpost` \| `mlh` \| `manual` | Where discovered |
| source_id | TEXT | NULLABLE | External platform event ID |
| source_url | TEXT | NULLABLE | Link to original event page |
| start_time | TIMESTAMPTZ | NOT NULL | Event start |
| end_time | TIMESTAMPTZ | NULLABLE | Event end |
| location | TEXT | NULLABLE | Venue or 'Online' |
| location_geo | POINT | NULLABLE | Lat/Lng for map features |
| cover_image_url | TEXT | NULLABLE | Event cover image |
| cost | DECIMAL | DEFAULT 0 | Ticket price (0 = free) |
| relevance_score | INTEGER | 0-100 | AI-computed relevance |
| tags | TEXT[] | DEFAULT `'{}'` | Interest tags |
| status | ENUM | `discovered` \| `pending` \| `registered` \| `attended` \| `skipped` | Team-level status |
| auto_applied | BOOLEAN | DEFAULT false | Was this auto-registered? |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | Discovery timestamp |
| metadata | JSONB | DEFAULT `'{}'` | Extra platform-specific data |

#### `event_rsvps`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| event_id | UUID | FK → events.id | Which event |
| user_id | UUID | FK → users.id | Which member |
| status | ENUM | `going` \| `maybe` \| `not_going` \| `pending` | Individual RSVP |
| registered_at | TIMESTAMPTZ | NULLABLE | When they registered |
| conflict_reason | TEXT | NULLABLE | If conflicted, why (e.g., 'CS101 lecture') |

#### `tasks`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| title | TEXT | NOT NULL | Task title |
| description | TEXT | NULLABLE | Markdown body |
| status | ENUM | `backlog` \| `todo` \| `in_progress` \| `review` \| `done` | Kanban status |
| priority | ENUM | `p0` \| `p1` \| `p2` \| `p3` | Priority level |
| created_by | UUID | FK → users.id | Creator |
| due_date | TIMESTAMPTZ | NULLABLE | Deadline |
| estimated_minutes | INTEGER | NULLABLE | Time estimate for calendar blocking |
| tags | TEXT[] | DEFAULT `'{}'` | Freeform tags |
| linked_event_id | UUID | FK → events.id, NULLABLE | Related event |
| parent_task_id | UUID | FK → tasks.id, NULLABLE | For subtasks |
| sprint_id | UUID | FK → sprints.id, NULLABLE | Sprint grouping |
| position | INTEGER | DEFAULT 0 | Order within kanban column |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |
| completed_at | TIMESTAMPTZ | NULLABLE | When marked done |

#### `task_assignees`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| task_id | UUID | FK → tasks.id | |
| user_id | UUID | FK → users.id | |
| assigned_at | TIMESTAMPTZ | DEFAULT `now()` | |
| PRIMARY KEY | | (task_id, user_id) | |

#### `timetable_blocks`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| user_id | UUID | FK → users.id | |
| day_of_week | INTEGER | 0-6 (Mon-Sun) | |
| start_time | TIME | NOT NULL | e.g., '09:00' |
| end_time | TIME | NOT NULL | e.g., '10:30' |
| course_name | TEXT | NOT NULL | |
| room | TEXT | NULLABLE | |
| professor | TEXT | NULLABLE | |
| semester | TEXT | NOT NULL | e.g., 'Spring 2026' |
| is_active | BOOLEAN | DEFAULT true | |

#### `calendar_events`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| user_id | UUID | FK → users.id | Creator |
| title | TEXT | NOT NULL | |
| start_time | TIMESTAMPTZ | NOT NULL | |
| end_time | TIMESTAMPTZ | NOT NULL | |
| type | ENUM | `focus` \| `meeting` \| `deadline` \| `holiday` \| `custom` | |
| is_recurring | BOOLEAN | DEFAULT false | |
| recurrence_rule | TEXT | NULLABLE | iCal RRULE string |
| linked_event_id | UUID | FK → events.id, NULLABLE | |

#### `documents`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| title | TEXT | NOT NULL | |
| content | TEXT | NOT NULL | Markdown body |
| type | ENUM | `meeting_notes` \| `debrief` \| `technical` \| `template` \| `bookmark` \| `decision` | |
| folder | TEXT | NULLABLE | Folder path |
| tags | TEXT[] | DEFAULT `'{}'` | |
| created_by | UUID | FK → users.id | |
| linked_event_id | UUID | FK → events.id, NULLABLE | |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |
| updated_at | TIMESTAMPTZ | DEFAULT `now()` | |

#### `document_versions`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| document_id | UUID | FK → documents.id | |
| diff | JSONB | NOT NULL | Content diff |
| edited_by | UUID | FK → users.id | |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |

#### `check_ins`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| user_id | UUID | FK → users.id | |
| yesterday | TEXT | NOT NULL | What they did yesterday |
| today | TEXT | NOT NULL | What they're doing today |
| blockers | TEXT | NULLABLE | Any blockers |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |

#### `pulse_responses`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| user_id | UUID | FK → users.id | |
| energy | INTEGER | 1-5 | |
| workload | INTEGER | 1-5 | |
| excitement | INTEGER | 1-5 | |
| is_anonymous | BOOLEAN | DEFAULT false | |
| week_start | DATE | NOT NULL | Week this response covers |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |

#### `sprints`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| name | TEXT | NOT NULL | e.g., 'Sprint 5 — Hackathon Prep' |
| start_date | DATE | NOT NULL | |
| end_date | DATE | NOT NULL | |
| status | ENUM | `planning` \| `active` \| `completed` | |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |

#### `notification_log`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| user_id | UUID | FK → users.id | |
| type | TEXT | NOT NULL | Notification type key |
| title | TEXT | NOT NULL | |
| body | TEXT | NOT NULL | |
| channel | ENUM | `in_app` \| `push` \| `email` \| `telegram` \| `discord` | |
| read | BOOLEAN | DEFAULT false | |
| action_url | TEXT | NULLABLE | Link to relevant item |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |

#### `automation_rules`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| name | TEXT | NOT NULL | Rule name |
| trigger_type | TEXT | NOT NULL | e.g., 'event_discovered', 'task_overdue' |
| conditions | JSONB | NOT NULL | Rule conditions |
| actions | JSONB | NOT NULL | Actions to take |
| is_active | BOOLEAN | DEFAULT true | |
| created_by | UUID | FK → users.id | |

#### `audit_log`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| user_id | UUID | FK → users.id | |
| action | TEXT | NOT NULL | e.g., 'event.auto_register', 'task.create' |
| entity_type | TEXT | NOT NULL | Table name |
| entity_id | UUID | NOT NULL | Row ID |
| metadata | JSONB | DEFAULT `'{}'` | Additional context |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |

#### `integration_configs`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| service | TEXT | NOT NULL | e.g., 'luma', 'telegram', 'discord' |
| config | JSONB | NOT NULL | Encrypted config (API keys in Supabase Vault) |
| is_active | BOOLEAN | DEFAULT true | |
| updated_at | TIMESTAMPTZ | DEFAULT `now()` | |

#### `ai_conversations`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| user_id | UUID | FK → users.id | |
| messages | JSONB | NOT NULL | Array of {role, content, timestamp} |
| module_context | TEXT | NULLABLE | Which module triggered this |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |
| updated_at | TIMESTAMPTZ | DEFAULT `now()` | |

#### `push_subscriptions`

| Column | Type | Constraints | Description |
|--------|------|------------|-------------|
| id | UUID | PK | |
| user_id | UUID | FK → users.id | |
| subscription | JSONB | NOT NULL | Web Push subscription object |
| user_agent | TEXT | NULLABLE | Browser info |
| created_at | TIMESTAMPTZ | DEFAULT `now()` | |

---

## 8. API Architecture

The War Room uses a hybrid API approach: Supabase auto-generated REST API for standard CRUD, and Next.js API routes (Edge Runtime) for complex business logic.

### 8.1 API Structure

| Endpoint Group | Method | Path Pattern | Handler |
|---------------|--------|-------------|---------|
| Auth | POST | `/api/auth/*` | Supabase Auth (built-in) |
| Users | GET/PATCH | `/api/users/:id` | Supabase REST + RLS |
| Events | GET/POST/PATCH | `/api/events/*` | Next.js API Route (business logic) |
| Event Radar | POST | `/api/radar/scan` | Edge Function (cron-triggered) |
| Event Radar | POST | `/api/radar/auto-apply` | Edge Function (rule engine) |
| RSVPs | POST/PATCH | `/api/events/:id/rsvp` | Next.js API Route |
| Tasks | GET/POST/PATCH/DELETE | `/api/tasks/*` | Supabase REST + RLS |
| Calendar | GET | `/api/calendar/merged/:userId` | Next.js API Route (aggregation) |
| Calendar | GET | `/api/calendar/ics/:userId` | Next.js API Route (ICS generation) |
| Availability | GET | `/api/availability/matrix` | Next.js API Route (computation) |
| Availability | GET | `/api/availability/best-slots` | Next.js API Route |
| Timetable | GET/POST/PUT | `/api/timetable/:userId` | Supabase REST + RLS |
| Timetable OCR | POST | `/api/timetable/ocr` | Next.js API Route → Groq API |
| Check-ins | POST/GET | `/api/checkins/*` | Supabase REST + RLS |
| Documents | GET/POST/PATCH | `/api/vault/*` | Next.js API Route + Storage |
| AI Copilot | POST | `/api/brain/suggest` | Next.js API Route → Groq API |
| AI Copilot | POST | `/api/brain/summarize` | Next.js API Route → Groq API |
| AI Copilot | POST | `/api/brain/chat` | Next.js API Route → Groq API |
| Notifications | GET/POST | `/api/notifications/*` | Supabase Realtime + REST |
| Telegram Webhook | POST | `/api/telegram/webhook` | Next.js API Route |
| Analytics | GET | `/api/analytics/*` | Next.js API Route (aggregation) |
| Integrations | POST | `/api/integrations/:service/webhook` | Next.js API Route |
| Admin | GET/POST/PATCH | `/api/admin/*` | Next.js API Route (admin-only) |

### 8.2 Realtime Subscriptions

The following tables have Supabase Realtime enabled for live dashboard updates:

- `events` — new events discovered, status changes
- `event_rsvps` — RSVP changes update team cards in real-time
- `tasks` — status changes animate on Kanban board
- `users` — status changes reflect immediately on team pulse
- `check_ins` — new check-ins populate daily digest live
- `notification_log` — badge count updates without polling

---

## 9. UI/UX Design System

### 9.1 Design Principles

- **Dark Mode First:** Primary theme is dark (near-black background with high-contrast elements). Light mode is secondary.
- **Information Density:** More data per pixel. No wasted whitespace. Inspired by Bloomberg Terminal and gaming HUDs.
- **Keyboard-First:** Every action has a keyboard shortcut. Cmd+K opens global command palette.
- **Micro-Animations:** Subtle transitions that communicate state changes. Cards slide in. Numbers count up. Status dots pulse.
- **Color = Meaning:** Colors are never decorative. Every color communicates: red = urgent/event, green = available/done, blue = info/link, yellow = warning/pending.

### 9.2 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A1A` | Main background |
| `--bg-secondary` | `#12122A` | Card/panel backgrounds |
| `--bg-tertiary` | `#1A1A3E` | Hover states, elevated surfaces |
| `--accent-primary` | `#E94560` | CTAs, active states, alerts, Circle13 brand |
| `--accent-secondary` | `#0F3460` | Links, headers, informational |
| `--text-primary` | `#F5F5F5` | Main body text |
| `--text-secondary` | `#A0A0B0` | Labels, captions, metadata |
| `--success` | `#4CAF50` | Available, completed, on-track |
| `--warning` | `#FF9800` | Pending, review, soft conflicts |
| `--error` | `#F44336` | Overdue, hard conflicts, critical alerts |
| `--border` | `#2A2A4A` | Card borders, dividers |

### 9.3 Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 (Page Title) | Inter / Geist | 28-32px | Bold (700) |
| H2 (Section) | Inter / Geist | 22-24px | Semibold (600) |
| H3 (Subsection) | Inter / Geist | 18-20px | Medium (500) |
| Body | Inter / Geist | 14-16px | Regular (400) |
| Caption | Inter / Geist | 12px | Regular (400) |
| Code / Monospace | JetBrains Mono | 13px | Regular (400) |
| Dashboard Numbers | Geist Mono | 24-48px | Bold (700) |

### 9.4 Key Navigation Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + K` | Global search & command palette |
| `G then D` | Go to Dashboard |
| `G then C` | Go to Calendar |
| `G then E` | Go to Event Radar |
| `G then T` | Go to Tasks |
| `G then V` | Go to Knowledge Vault |
| `N` | New task (from anywhere) |
| `Shift + N` | New event (from anywhere) |
| `?` | Show keyboard shortcut overlay |

### 9.5 Component Library (Built on shadcn/ui)

All components are built on shadcn/ui with custom dark theme tokens applied. Key custom components to build:

- **EventCard:** Rich card showing event details, team RSVPs, relevance score, and quick actions
- **TaskRow / TaskCard:** Compact task display for list and kanban views
- **AvatarStack:** Overlapping user avatars showing team RSVP status
- **AvailabilityGrid:** Heat-map grid component for the availability matrix
- **StatusBadge:** Pulsing dot + label for team member statuses
- **TimelineItem:** Chronological feed item for the action stream
- **CalendarCell:** Custom cell for the calendar with multi-layer event dots
- **CommandPalette:** Cmd+K interface with fuzzy search across all entities
- **NotificationToast:** Non-blocking toast for real-time updates (react-hot-toast)

---

## 10. Security & Access Control

### Authentication

- Supabase Auth with email + password (primary)
- Magic link login (passwordless option)
- OAuth: Google login as secondary option
- Session management: JWT tokens with 1-hour expiry, refresh token rotation
- Multi-factor authentication (TOTP) available for admin accounts
- **All of this is included free in Supabase Auth (50,000 MAU)**

### Authorization (Row Level Security)

Every table in Supabase has RLS policies. Key rules:

- Users can only read/write their own timetable, check-ins, and notification preferences
- Members can read team events, tasks assigned to them, and shared documents
- Only admins can modify event radar rules, team settings, and view all analytics
- Collaborators can only see events and tasks explicitly shared with them
- AI Copilot uses a service-role key with read access to all data for context, but all write actions go through user-authenticated endpoints

### Data Protection

- All data encrypted at rest (Supabase default: AES-256)
- All data encrypted in transit (TLS 1.3)
- API keys for external services stored in Supabase Vault (encrypted secrets management)
- Audit log for all admin actions and sensitive data changes
- GDPR-ready: Data export and deletion endpoints for each user
- Rate limiting on all API endpoints (Vercel edge middleware + Supabase built-in)

---

## 11. Development Roadmap & Phasing

> **ESTIMATED TOTAL TIMELINE: 12-16 WEEKS** with a team of 2-3 developers at Integravity. Assumes full-time effort and no major scope changes. Each phase has a deployable milestone.

### Phase 1: Foundation (Weeks 1-4)

**Deliverable:** Working dashboard with auth, calendar, and basic task management

- Project setup: Next.js + Supabase + Vercel + CI/CD pipeline
- Database schema: All core tables + RLS policies
- Authentication: Email login + Google OAuth + role-based access
- Mission Control Dashboard: Layout shell with live clock, team status grid
- Unified Calendar: Basic week/month views with manual event creation
- Task Engine: CRUD tasks with Kanban board and list view
- UI Design System: Dark theme, component library setup, global search (Cmd+K)
- Telegram Bot: Basic setup with @BotFather, webhook endpoint, test notifications

### Phase 2: Event Intelligence (Weeks 5-8)

**Deliverable:** Event Radar scanning and auto-registration working

- Luma API integration: Bidirectional sync (events, RSVPs, guest management)
- Event Radar: Cron-based scanning for Luma events (pg_cron + Edge Function)
- Eventbrite + Meetup: Read-only event discovery integration
- Devpost + MLH: Cheerio web scraper for hackathon discovery
- Auto-Apply Rules Engine: Admin-configurable rules for automatic registration
- Event detail cards with team RSVP tracking
- Conflict detection: Cross-reference events with calendar and timetable
- Notification system: In-app (Supabase Realtime) + email digest (Resend) + Telegram bot alerts

### Phase 3: Team Sync (Weeks 9-11)

**Deliverable:** College timetable, availability matrix, and team pulse live

- College Timetable module: Manual entry + CSV import + ICS import
- Screenshot OCR: Upload timetable photo → Tesseract.js (browser) → Groq API parsing
- Availability Matrix: Heat grid + best-slot finder
- Team Pulse: Status system + async daily check-ins (with Telegram bot integration)
- Knowledge Vault: Markdown editor, document management, full-text search
- Calendar layers: All 6 layers toggleable and merged
- Discord webhook integration for team announcements

### Phase 4: Intelligence & Polish (Weeks 12-16)

**Deliverable:** AI Copilot, analytics, and production-ready polish

- Circle Brain AI: Event recommendations, conflict resolution, task generation (all via Groq free tier)
- Smart scheduling suggestions
- Analytics War Board: All 5 dashboards (event, task, calendar, health, knowledge)
- Weekly automated reports (Telegram + email)
- Sprint management features
- Mobile PWA optimization + Web Push notifications (VAPID keys)
- Performance optimization, load testing, security audit
- Documentation: User guide, admin guide, API docs
- Beta testing with Circle13 team + iteration

---

## 12. Success Metrics & KPIs

| Metric | Target (3 months post-launch) | Measurement Method |
|--------|------------------------------|-------------------|
| Team event participation rate | 95%+ (from current ~40-60%) | Events registered / events discovered per member |
| Daily active usage | 100% of team opens War Room daily | PostHog daily active users |
| Calendar sync adoption | All members have timetable entered | Timetable completion flag per user |
| Task completion rate | 80%+ tasks completed before due date | Tasks done on time / total tasks |
| Event discovery lead time | Events surfaced 7+ days before date | Avg days between discovery and event date |
| Time saved on scheduling | 5+ hours/week team-wide | Before/after survey |
| Knowledge vault docs | 10+ docs/month team-wide | Document creation count |
| Check-in participation | 90%+ daily check-in completion | Check-ins submitted / expected |
| Tool consolidation | Replace 4+ existing tools | Before/after tool usage survey |
| AI copilot helpfulness | 70%+ suggestions accepted | Accepted / total suggestions |
| Monthly infrastructure cost | $0 | Billing dashboard |

---

## 13. Risk Assessment & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| Luma API changes/breaks | Medium | High | Abstract Luma integration behind adapter pattern. Monitor API changelog. Have manual RSVP fallback. |
| Team adoption resistance | Medium | Critical | Involve team in beta testing. Start with highest-value feature (Event Radar). Gamify usage. |
| Meetup/Eventbrite API access limitations | High | Medium | Use Cheerio web scraping as fallback. Cache aggressively. Rotate user-agents. |
| Groq free tier rate limits hit | Low | Medium | Token budget is 10% of daily limit. If hit: queue requests, retry after 60s. Use LLaMA 8B (higher limits) for non-critical tasks. |
| Groq discontinues free tier | Very Low | High | Abstract AI behind adapter interface. Can swap to: Google Gemini free tier, OpenRouter free models, or self-hosted Ollama as fallback. |
| Supabase free tier pausing (7-day inactivity) | Low | High | Keep-alive cron: GitHub Actions pings Supabase every 5 days. Daily check-in bot activity also prevents pausing. Active team = no pausing risk. |
| Supabase 500MB storage limit | Medium | Medium | Implement aggressive data hygiene: archive old events after 6 months, compress documents, paginate aggressively. At team scale (<50), 500MB is massive. |
| AI hallucinations in Circle Brain | Medium | Medium | All AI-suggested actions require human confirmation. Log all AI outputs for review. |
| Scraper fragility (Devpost/MLH/LinkedIn) | High | Medium | Use resilient Cheerio selectors. Add health checks. Alert admin when scraper fails. Manual fallback. |
| Scope creep during development | High | Medium | Strict phase gating. Each phase has a demo milestone. No feature additions mid-phase. |
| Data privacy concerns | Low | High | RLS on all tables. Encrypted secrets via Supabase Vault. GDPR-compliant data handling. Regular audits. |
| Vercel hobby plan bandwidth limit (100GB) | Very Low | Low | Team app with <50 users won't come close. If selling as SaaS: upgrade to Pro ($20/month) when revenue starts. |

---

## 14. Free Tier Limits & Survival Guide

This is the cheat sheet for staying at $0 forever.

### Supabase Free Tier

| Resource | Limit | War Room Usage Estimate | Risk |
|----------|-------|------------------------|------|
| Database Storage | 500 MB | ~50-100 MB for <50 users | LOW |
| File Storage | 1 GB | ~200-400 MB (docs, images) | LOW |
| Monthly Active Users | 50,000 | <50 | ZERO |
| Database Egress | 2 GB/month | ~500 MB | LOW |
| Edge Function Invocations | 500,000/month | ~10,000 (cron + webhooks) | ZERO |
| Realtime Connections | 200 concurrent | <50 | ZERO |
| Projects | 2 | 1 (prod) + 1 (staging) | OK |
| Pausing | After 7 days inactivity | Keep-alive cron prevents this | MITIGATED |

**Survival Tactics:**
- Keep-alive: GitHub Actions workflow pings your Supabase project every 5 days
- Paginate all queries (never `SELECT *` without `LIMIT`)
- Cache with React Query (5-min stale time)
- Archive events older than 6 months to a `events_archive` table
- Compress images before upload (max 500KB per image)

### Groq Free Tier

| Resource | Limit | War Room Usage Estimate | Risk |
|----------|-------|------------------------|------|
| LLaMA 3.3 70B tokens/day | ~500,000 | ~50,000 | ZERO |
| LLaMA 3.1 8B tokens/min | ~30,000 | ~2,000 | ZERO |
| Requests per minute | ~30 (70B) | ~5 | ZERO |
| Credit card required | No | N/A | ZERO |

**Survival Tactics:**
- Use 8B model for quick tasks (tagging, classification), 70B only for complex reasoning
- Cache AI responses for identical queries (store in `ai_cache` table with TTL)
- Batch multiple scoring requests into single prompts where possible
- Implement exponential backoff on 429 errors

### Vercel Hobby Plan

| Resource | Limit | War Room Usage Estimate | Risk |
|----------|-------|------------------------|------|
| Bandwidth | 100 GB/month | ~5-10 GB | ZERO |
| Serverless Function Executions | 100,000/month | ~20,000 | ZERO |
| Build Minutes | 6,000/month | ~500 | ZERO |
| Deployments | Unlimited | Unlimited | ZERO |

### Other Free Services

| Service | Free Limit | Notes |
|---------|-----------|-------|
| PostHog | 1M events/month | Way more than needed |
| Sentry | 5K errors/month | Plenty |
| Resend | 3,000 emails/month | ~100 emails/day |
| Gmail SMTP (backup) | 500 emails/day | Fallback if Resend limits hit |
| Telegram Bot API | Unlimited | No limits at all |
| Discord Webhooks | Unlimited | No limits |
| GitHub Actions | 2,000 min/month | ~67 minutes/day |
| Luma API | 300 req/min | Way more than needed |

---

## 15. Appendix: API Reference for All Free Services

### Groq API (Circle Brain)

| Detail | Value |
|--------|-------|
| Endpoint | `https://api.groq.com/openai/v1/chat/completions` |
| Primary Model | `llama-3.3-70b-versatile` (complex reasoning, suggestions) |
| Fast Model | `llama-3.1-8b-instant` (quick classification, tagging, OCR parsing) |
| Auth | `Authorization: Bearer {GROQ_API_KEY}` header |
| Max Tokens per Request | 4096 (suggestions), 1024 (classification) |
| Free Tier | Forever free, no credit card, rate-limited only |
| Sign Up | https://console.groq.com (email or Google account) |

**Example Request:**
```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.3-70b-versatile",
    "messages": [
      {"role": "system", "content": "You are Circle Brain, the AI copilot for Circle13..."},
      {"role": "user", "content": "Score this event for relevance: {event_data}"}
    ],
    "max_tokens": 1024,
    "temperature": 0.3
  }'
```

### Luma API

| Detail | Value |
|--------|-------|
| Base URL | `https://public-api.luma.com` |
| Auth | `x-luma-api-key: {LUMA_API_KEY}` header |
| Rate Limit | 300 req/min |
| Key Endpoints | `POST /v1/event/create`, `GET /v1/event/get-guests`, `POST /v1/event/update-guest-status` |
| Cost | FREE |

### Telegram Bot API

| Detail | Value |
|--------|-------|
| Base URL | `https://api.telegram.org/bot{TOKEN}` |
| Create Bot | Talk to @BotFather on Telegram |
| Send Message | `POST /sendMessage` with `{chat_id, text, parse_mode: 'HTML'}` |
| Set Webhook | `POST /setWebhook` with `{url: 'https://yourapp.vercel.app/api/telegram/webhook'}` |
| Rate Limit | 30 messages/second (per bot), 20 messages/minute (per group) |
| Cost | FREE FOREVER |

### Supabase

| Service | Usage in War Room |
|---------|------------------|
| PostgreSQL | All application data (users, events, tasks, timetables, docs) |
| Auth | User authentication, session management, RLS integration |
| Realtime | WebSocket subscriptions for live dashboard updates |
| Storage | File uploads (documents, images, timetable screenshots) |
| Edge Functions | Cron jobs (event radar scan), webhook handlers |
| Vault | Encrypted storage for API keys and secrets |

### Discord Webhook

```bash
curl -X POST "https://discord.com/api/webhooks/{WEBHOOK_ID}/{WEBHOOK_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "content": "New event discovered!",
    "embeds": [{
      "title": "AI Builder Meetup",
      "description": "Relevance: 92/100. 5/6 team members are free.",
      "color": 15281456
    }]
  }'
```

### Resend (Email)

| Detail | Value |
|--------|-------|
| Endpoint | `https://api.resend.com/emails` |
| Auth | `Authorization: Bearer {RESEND_API_KEY}` |
| Free Tier | 3,000 emails/month, 100 emails/day |
| Cost | FREE |

### Gmail SMTP (Backup Email)

| Detail | Value |
|--------|-------|
| Host | `smtp.gmail.com` |
| Port | 587 (TLS) |
| Auth | Gmail address + App Password (2FA required) |
| Limit | 500 emails/day |
| Cost | FREE |

---

## COST SUMMARY

```
╔══════════════════════════════════════════════════════╗
║                                                      ║
║   TOTAL MONTHLY INFRASTRUCTURE COST:     $0.00       ║
║   TOTAL YEARLY INFRASTRUCTURE COST:      $0.00       ║
║   TOTAL LIFETIME INFRASTRUCTURE COST:    $0.00       ║
║                                                      ║
║   APIs requiring signup (no credit card):            ║
║   ✅ Groq (AI)         — console.groq.com            ║
║   ✅ Supabase (Backend) — supabase.com               ║
║   ✅ Vercel (Hosting)   — vercel.com                 ║
║   ✅ Resend (Email)     — resend.com                 ║
║   ✅ PostHog (Analytics) — posthog.com               ║
║   ✅ Sentry (Errors)    — sentry.io                  ║
║   ✅ Luma (Events)      — lu.ma                      ║
║   ✅ Telegram Bot       — @BotFather                 ║
║   ✅ Discord Webhook    — Server Settings             ║
║                                                      ║
║   Credit card required for ANY of the above: NO      ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

---

**END OF DOCUMENT**

*Circle13 War Room PRD v2.0 (Free Stack Edition) • March 2026 • Confidential*

*Designed with precision. Built for $0. Now go build it. 🚀*
