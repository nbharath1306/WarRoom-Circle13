# CIRCLE13 // WAR ROOM

## DESIGN SYSTEM & UI/UX SPECIFICATION

```
╔══════════════════════════════════════════════════════════════╗
║  TRANSMISSION_ID: C13-WARROOM-DS-001                        ║
║  CLASSIFICATION: INTERNAL // INTEGRAVITY BUILD TEAM         ║
║  STATUS: ACTIVE                                             ║
║  VERSION: 2.0 — FREE STACK EDITION                          ║
║  DATE: MARCH 2026                                           ║
║  DIRECTIVE: MATCH circle13.space AESTHETIC EXACTLY           ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 0. DESIGN DIRECTIVE // READ THIS FIRST

The War Room is **not** a generic SaaS dashboard. It is a continuation of the Circle13 brand universe established at [circle13.space](https://circle13.space). That site speaks in the language of **military transmissions, encrypted uplinks, cyber-ops terminals, and controlled chaos**. The War Room must feel like the internal command center that the public website hints at.

If someone visits circle13.space and then opens the War Room, the transition must feel seamless — like they just got clearance to enter the operations floor.

### Design DNA Extracted from circle13.space

| Element | circle13.space Implementation | War Room Translation |
|---------|------------------------------|---------------------|
| **Background** | Pure black (`#000000`) with subtle noise/grain texture | Near-black (`#07070F`) with micro-grain overlay |
| **Brand Mark** | "C-13" monogram, "CIRCLE 13" wordmark | "C-13 // WAR ROOM" in top-left nav |
| **Language** | Military/transmission: "UPLINK", "DECRYPT", "TRANSMISSION", "SIGNAL_ACQUIRED" | Terminal language throughout: "SCANNING...", "INTEL_FEED", "STATUS: ACTIVE", "CONFLICT_DETECTED" |
| **Typography** | Monospace for labels/codes, clean sans-serif for headings | JetBrains Mono for all data/labels, Geist/Inter for headings |
| **Loading States** | "INITIALIZING... 000%", "WAITING FOR UPLINK..." | "SYNCING WARROOM... 000%", "ACQUIRING SIGNAL..." |
| **Section Labels** | "CREW_MANIFEST_V1.0", "SKILL_MATRIX" | "MISSION_CONTROL_V1.0", "EVENT_RADAR_FEED", "AVAILABILITY_GRID" |
| **Status Indicators** | "STATUS: ACTIVE", "STATUS: DEPLOYED", "STATUS: CLASSIFIED" | Same pattern for all modules and team members |
| **Color Accent** | Red/coral glow for CTAs and active states | `#E94560` (Circle13 signature red) for primary actions |
| **Navigation** | "MANIFESTO / ARCHITECTS / WORK / UPLINK" — all caps, monospace | "DASHBOARD / CALENDAR / RADAR / TASKS / VAULT" — same style |
| **Animations** | Glitch effects, fade-in reveals, typewriter text | Scanline animations, data-stream reveals, pulsing status dots |
| **Coordinates** | "COORD: 13.00.00 // V.3.0" | Event cards: "LOC: BENGALURU // 13.03.26 // REL: 87" |
| **Footer Vibe** | "// TRANSMISSION: OFFLINE" | "// SESSION: ACTIVE // UPTIME: 4h 23m" |
| **Profile Cards** | "PROFILE_ID: 001", "FOUNDER & CEO // THE ENTROPY BREAKER" | Team Pulse: "AGENT_ID: 003 // AKHIL // STATUS: BUILDING 🛠️" |
| **Call to Actions** | "INITIATE UPLINK", "ACCESS RECRUITMENT FORM ↗" | "DEPLOY EVENT", "INITIATE SCAN", "REGISTER ALL ↗" |
| **Section Breaks** | Double-line borders, ">> END OF TRANSMISSION" | Scanline dividers, ">> SECTION_COMPLETE" |

---

## 1. COLOR SYSTEM

### 1.1 Core Palette

```css
:root {
  /* ═══ BACKGROUNDS ═══ */
  --bg-void:        #07070F;   /* Deepest black — main app background */
  --bg-surface:     #0D0D1A;   /* Card/panel background */
  --bg-elevated:    #131326;   /* Hover states, modals, dropdowns */
  --bg-overlay:     #1A1A35;   /* Tooltips, popovers, command palette bg */
  
  /* ═══ CIRCLE13 BRAND ═══ */
  --c13-red:        #E94560;   /* Primary accent — CTAs, urgency, brand signature */
  --c13-red-glow:   #E9456033; /* Red glow for box-shadows and borders */
  --c13-red-dim:    #E9456015; /* Subtle red tint for backgrounds */
  --c13-blue:       #0F3460;   /* Secondary — links, informational, headers */
  --c13-blue-light: #1A4A80;   /* Active nav items, selected states */
  
  /* ═══ SEMANTIC COLORS ═══ */
  --status-active:  #4CAF50;   /* Available, completed, on-track, "STATUS: ACTIVE" */
  --status-warning: #FF9800;   /* Pending, review, soft conflicts */
  --status-error:   #F44336;   /* Overdue, hard conflicts, critical */
  --status-info:    #29B6F6;   /* Informational, links, new items */
  --status-purple:  #9C27B0;   /* Focus blocks, deep work mode */
  
  /* ═══ TEXT ═══ */
  --text-primary:   #E8E8F0;   /* Main body text — slightly warm white */
  --text-secondary: #6B6B80;   /* Labels, metadata, timestamps */
  --text-tertiary:  #3D3D55;   /* Disabled, placeholder text */
  --text-code:      #A8D8A8;   /* Terminal green for code/data values */
  
  /* ═══ BORDERS & DIVIDERS ═══ */
  --border-default: #1E1E38;   /* Card borders */
  --border-active:  #E94560;   /* Focused inputs, active cards */
  --border-subtle:  #151528;   /* Faint dividers */
  
  /* ═══ CALENDAR LAYER COLORS ═══ */
  --layer-tasks:    #29B6F6;   /* Personal tasks — blue */
  --layer-events:   #E94560;   /* Team events — brand red */
  --layer-classes:  #4CAF50;   /* College classes — green */
  --layer-deadlines:#FF9800;   /* Company deadlines — orange */
  --layer-focus:    #9C27B0;   /* Focus blocks — purple */
  --layer-holidays: #6B6B80;   /* Holidays/breaks — gray */
}
```

### 1.2 Color Usage Rules

```
RULE 1: Color is NEVER decorative. Every color communicates status or category.
RULE 2: Red (#E94560) = Circle13 brand + urgency + primary CTA. Use sparingly.
RULE 3: Green = available/success/classes. Never mix with "go ahead" actions.
RULE 4: Backgrounds use only the 4 --bg-* values. No custom grays.
RULE 5: Text uses only 3 tiers: primary, secondary, tertiary.
RULE 6: Terminal green (#A8D8A8) only for data values, scores, coordinates.
RULE 7: Glow effects (box-shadow with --c13-red-glow) only on:
        - Hovered CTAs
        - Active/focused cards
        - Real-time updating values
```

### 1.3 Dark Mode / Light Mode

```
Dark mode is the ONLY mode.

There is no light mode toggle. This is a command center.
Command centers don't have light mode.

If stakeholders insist on light mode: schedule it for v2. Never.
```

---

## 2. TYPOGRAPHY

### 2.1 Font Stack

```css
:root {
  /* PRIMARY: Data, labels, all "terminal" text */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
  
  /* SECONDARY: Headings, page titles, large display text */
  --font-display: 'Geist', 'Inter', -apple-system, sans-serif;
  
  /* TERTIARY: Body text, descriptions, long-form content */
  --font-body: 'Inter', 'Geist', -apple-system, sans-serif;
}
```

### 2.2 Type Scale

| Element | Font | Size | Weight | Transform | Letter-Spacing | Usage |
|---------|------|------|--------|-----------|---------------|-------|
| **Module Title** | `--font-display` | 28px | 700 | uppercase | 0.05em | "MISSION CONTROL", "EVENT RADAR" |
| **Section Label** | `--font-mono` | 11px | 500 | uppercase | 0.15em | "CREW_MANIFEST_V1.0", "INTEL_FEED" |
| **Card Title** | `--font-display` | 18px | 600 | none | 0 | Event names, task titles |
| **Body Text** | `--font-body` | 14px | 400 | none | 0 | Descriptions, content |
| **Data Value** | `--font-mono` | 14px | 600 | none | 0.02em | Scores, times, counts |
| **Big Number** | `--font-mono` | 48px | 700 | none | -0.02em | Dashboard stats (e.g., "12" tasks) |
| **Timestamp** | `--font-mono` | 12px | 400 | uppercase | 0.08em | "13.03.26 // 14:30 IST" |
| **Button Label** | `--font-mono` | 13px | 600 | uppercase | 0.1em | "INITIATE SCAN", "REGISTER ALL" |
| **Nav Item** | `--font-mono` | 13px | 500 | uppercase | 0.12em | "DASHBOARD", "RADAR", "TASKS" |
| **Status Badge** | `--font-mono` | 10px | 700 | uppercase | 0.15em | "STATUS: ACTIVE", "CONFLICT" |
| **Caption** | `--font-body` | 12px | 400 | none | 0 | Helper text, descriptions |

### 2.3 Typography Rules

```
RULE 1: ALL labels, nav items, statuses, and metadata use --font-mono + uppercase.
        This creates the "terminal" feel that circle13.space establishes.

RULE 2: Headings use --font-display. Only headings. Never for body text.

RULE 3: Long-form text (descriptions, docs, check-ins) uses --font-body at 14px.

RULE 4: Numbers and data values ALWAYS use --font-mono. 
        Scores: "REL: 87"  Time: "14:30"  Count: "12"

RULE 5: Use "//" as a separator in labels, not "—" or "|".
        ✅ "CIRCLE13 // WAR ROOM"
        ✅ "BHARATH // FOUNDER // STATUS: BUILDING"
        ❌ "Bharath — Founder — Building"

RULE 6: Dates are formatted as: "13.03.26" not "March 13, 2026"
        Times are formatted as: "14:30 IST" not "2:30 PM"
        Coordinates: "LOC: BENGALURU // COORD: 12.97°N"

RULE 7: Section headers use the pattern: "SECTION_NAME_V1.0"
        ✅ "AVAILABILITY_GRID_V2.1"
        ✅ "INTEL_FEED // LIVE"
```

---

## 3. LAYOUT SYSTEM

### 3.1 Grid Architecture

```
The War Room uses a 3-column dashboard layout:

┌─────────────────────────────────────────────────────────────┐
│  C-13 // WAR ROOM    [NAV ITEMS]           [CMD+K] [AVATAR]│  ← Top Bar: 56px
├─────────┬───────────────────────────────────┬───────────────┤
│         │                                   │               │
│  LEFT   │         MAIN CONTENT              │    RIGHT      │
│  RAIL   │         (Flexible)                │    PANEL      │
│  240px  │                                   │    320px      │
│         │                                   │               │
│  Nav    │  Dashboard / Calendar / Radar /   │  Quick Info   │
│  Links  │  Tasks / Vault / Analytics        │  Team Pulse   │
│  Quick  │                                   │  Upcoming     │
│  Stats  │                                   │  AI Suggest   │
│         │                                   │               │
├─────────┴───────────────────────────────────┴───────────────┤
│  // SESSION: ACTIVE // UPTIME: 4h 23m // v2.0              │  ← Bottom Bar: 32px
└─────────────────────────────────────────────────────────────┘

Mobile: Left rail collapses to hamburger. Right panel becomes bottom sheet.
```

### 3.2 Spacing Scale

```css
/* Base unit: 4px */
--space-1:  4px;    /* Tight: between icon and label */
--space-2:  8px;    /* Compact: within card elements */
--space-3:  12px;   /* Standard: between related items */
--space-4:  16px;   /* Card padding */
--space-5:  20px;   /* Between cards */
--space-6:  24px;   /* Section gap */
--space-8:  32px;   /* Major section breaks */
--space-12: 48px;   /* Page-level spacing */
```

### 3.3 Component Sizing

```css
/* Cards */
--card-radius:     8px;
--card-padding:    16px;
--card-border:     1px solid var(--border-default);

/* Inputs */
--input-height:    40px;
--input-radius:    6px;
--input-padding:   0 12px;

/* Buttons */
--btn-height:      40px;
--btn-height-sm:   32px;
--btn-radius:      6px;
--btn-padding:     0 16px;

/* Avatars */
--avatar-sm:       28px;
--avatar-md:       36px;
--avatar-lg:       48px;
```

---

## 4. COMPONENT LIBRARY

Every component below must be built on **shadcn/ui** with custom theme tokens applied. Import shadcn components, then override with Circle13 styles.

### 4.1 Navigation — Top Bar

```
┌─────────────────────────────────────────────────────────────┐
│ ◉ C-13 // WAR ROOM    DASH  CAL  RADAR  TASKS  VAULT  ANLYT│
│                                          [⌘K Search] [@AVT]│
└─────────────────────────────────────────────────────────────┘

- Background: var(--bg-void) with bottom border var(--border-subtle)
- Logo "C-13" in --c13-red, rest in --text-secondary
- Active nav item: --text-primary with --c13-red underline (2px)
- Inactive: --text-secondary
- All nav text: --font-mono, 13px, uppercase, letter-spacing: 0.12em
- Cmd+K search pill: border var(--border-default), --text-tertiary placeholder
- Avatar: circular, 28px, --c13-red border on hover
```

### 4.2 Left Rail — Sidebar

```
┌─────────┐
│ TODAY    │  ← Section label: --font-mono, 10px, --text-secondary
│          │
│ ■ 3      │  Events count (red square indicator)
│ ☐ 7      │  Tasks count
│ ⬤ 4/6   │  Team online
│          │
│ ──────── │  Scanline divider (1px, animated subtle glow)
│          │
│ NEXT UP  │
│ 14:30    │  ← --font-mono, --text-code (green)
│ AI Meetup│  ← --font-body, --text-primary
│ [2h 15m] │  ← Countdown, --c13-red if < 1h
│          │
│ 18:00    │
│ Sprint   │
│ Review   │
│          │
│ ──────── │
│          │
│ PULSE    │
│ ⬤ Bharath│  ← Green dot = available
│ ⬤ Akhil  │  ← 🛠️ = building
│ ⬤ Dave   │  ← 🎓 = in class
└─────────┘

- Width: 240px fixed
- Background: var(--bg-void)
- Right border: var(--border-subtle)
- Section labels: --font-mono, 10px, uppercase, --text-secondary, 0.15em spacing
- Dividers: 1px solid var(--border-subtle) with subtle left-to-right scanline animation
```

### 4.3 Event Card (Event Radar)

```
┌─────────────────────────────────────────────┐
│ ┌─────┐                                     │
│ │ IMG │  AI BUILDER SUMMIT 2026              │  ← --font-display, 16px, 600
│ │     │  LUMA // 15.03.26 // BENGALURU       │  ← --font-mono, 11px, --text-secondary
│ └─────┘                                      │
│                                              │
│  REL: 92  ████████████████████░░  STATUS: GO │  ← Green badge if >80
│                                              │
│  CREW RSVP:                                  │  ← --font-mono, 10px section label
│  ⬤⬤⬤⬤○○  4/6 CONFIRMED                     │  ← Avatar stack + count
│  ⚠ CONFLICT: Akhil has CS301 @ 14:00        │  ← --status-warning text
│                                              │
│  [ REGISTER ALL ↗ ]  [ SKIP ]  [ DISCUSS ]  │  ← Buttons
│                                              │
│  DISCOVERED: 2h AGO // SOURCE: lu.ma        │  ← --font-mono, 10px, --text-tertiary
└─────────────────────────────────────────────┘

Styles:
- Background: var(--bg-surface)
- Border: var(--border-default), on hover: var(--c13-red) + glow
- Border-radius: var(--card-radius)
- Image: 80x80px, border-radius: 4px, object-fit: cover
- Relevance Score:
  - > 80: --status-active (green) + "STATUS: GO"
  - 60-80: --status-warning (orange) + "STATUS: REVIEW"
  - < 60: --status-error (red) + "STATUS: LOW_SIGNAL"
- Progress bar: thin (3px), uses gradient from --c13-red to --status-active
- "REGISTER ALL" button: background --c13-red, --font-mono uppercase
- "SKIP" button: ghost style, border only
- Conflict warning: left-border 3px --status-warning
```

### 4.4 Task Card (Kanban)

```
┌───────────────────────────────────┐
│ P1 ▲  Fix login redirect bug      │  ← Priority indicator + title
│                                    │
│ ⬤ Akhil    DUE: 14.03.26         │  ← Assignee + due date
│ #hackprep  #frontend              │  ← Tags in --text-secondary
│                                    │
│ EST: 2h    ████░░░░  IN_PROGRESS  │  ← Time estimate + status badge
└───────────────────────────────────┘

Priority Indicators:
  P0: --status-error + pulsing animation (FIRE)
  P1: --status-warning (URGENT)
  P2: --status-info (NORMAL)
  P3: --text-secondary (LOW)

Status Badges (--font-mono, 10px, uppercase):
  BACKLOG    → --text-tertiary bg
  TODO       → --status-info bg, 15% opacity
  IN_PROGRESS → --status-warning bg, 15% opacity
  REVIEW     → --status-purple bg, 15% opacity
  DONE       → --status-active bg, 15% opacity
```

### 4.5 Availability Grid (Heat Map)

```
              MON    TUE    WED    THU    FRI
  08:00  │ ██ ██ │ ██ ██ │ ██ ██ │ ██ ██ │ ██ ██ │
  09:00  │ 🟢🟢 │ 🔴🟢 │ 🟢🟡 │ 🟢🟢 │ 🟢🟢 │
  10:00  │ 🟢🔴 │ 🔴🔴 │ 🟢🟡 │ 🟡🟢 │ 🟢🟢 │
  11:00  │ 🔴🔴 │ 🟢🟢 │ 🔴🔴 │ 🟢🟢 │ 🟡🟢 │
  ...

  🟢 = FREE (--status-active, 20% opacity fill)
  🟡 = SOFT-BOOKED (--status-warning, 20% opacity)
  🔴 = BLOCKED (--status-error, 20% opacity)

  Each cell: 24x24px minimum, CSS Grid
  Hover: show tooltip "Akhil: CS301 Lecture // 10:00-11:30"
  Row headers (time): --font-mono, 11px, --text-secondary
  Column headers (day): --font-mono, 12px, --text-primary, uppercase
```

### 4.6 Team Pulse Card

```
┌────────────────────────────────────┐
│ AGENT_ID: 001                      │  ← --font-mono, 10px, --text-tertiary
│                                    │
│ ⬤ N. BHARATH                       │  ← Avatar + name + pulsing status dot
│ FOUNDER // COMMANDER               │  ← --font-mono, 11px, --text-secondary
│                                    │
│ STATUS: BUILDING 🛠️                │  ← Status badge, green/yellow/red
│ LAST_ACTIVE: 3m AGO               │  ← --font-mono, 10px, --text-tertiary
│                                    │
│ CHECK-IN:                          │
│ "Working on Event Radar cron job.  │  ← --font-body, 13px, --text-primary
│  Blocked on Luma API rate limits." │
│                                    │
│ TASKS: 3 OPEN // 1 OVERDUE        │  ← Overdue count in --status-error
└────────────────────────────────────┘
```

### 4.7 Command Palette (Cmd+K)

```
┌─────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────┐ │
│ │ > SEARCH_WARROOM: |                     │ │  ← --font-mono, blinking cursor
│ └─────────────────────────────────────────┘ │
│                                             │
│ RECENT_COMMANDS                             │  ← Section label
│ → Go to Calendar               ⌘ G then C  │
│ → Create new task              ⌘ N          │
│ → Scan Event Radar             ⌘ Shift+S    │
│                                             │
│ RESULTS                                     │
│ 📅 AI Meetup — 15.03.26          EVENT      │
│ ☐ Fix auth redirect bug          TASK       │
│ 👤 Akhil Vipin Nair              PERSON     │
│ 📄 Sprint 3 Retrospective        DOCUMENT   │
│                                             │
└─────────────────────────────────────────────┘

- Overlay: full-screen semi-transparent black (--bg-void, 80% opacity)
- Modal: var(--bg-surface), border: var(--border-default)
- Max-width: 640px, centered
- Input: --font-mono, 16px, no visible border, transparent background
- Results: --font-body for titles, --font-mono for type badges
- Keyboard navigation: arrow keys, enter to select
- Built with: cmdk library
```

### 4.8 Notification Toast

```
┌─────────────────────────────────────────┐
│ ⚡ EVENT_RADAR // NEW SIGNAL             │
│                                         │
│ "AI Agents Workshop" discovered on Luma │
│ REL: 88 // 3 members free              │
│                                         │
│ [ VIEW ] [ REGISTER ALL ]              │
└─────────────────────────────────────────┘

- Position: bottom-right, 16px from edge
- Background: var(--bg-elevated) with --c13-red left-border (3px)
- Slide-in animation from right (300ms, ease-out)
- Auto-dismiss: 8 seconds (with progress bar at bottom)
- Stacks: max 3 visible, older ones collapse
- Built with: react-hot-toast (custom styled)
```

### 4.9 Buttons

```
PRIMARY (CTA):
  Background: var(--c13-red)
  Text: white, --font-mono, uppercase, 13px, 0.1em letter-spacing
  Hover: lighten 10%, box-shadow: 0 0 20px var(--c13-red-glow)
  Active: scale(0.98)
  Examples: "REGISTER ALL ↗", "DEPLOY EVENT", "INITIATE SCAN"

SECONDARY:
  Background: transparent
  Border: 1px solid var(--border-default)
  Text: var(--text-primary), --font-mono, uppercase
  Hover: border-color var(--c13-red), text-color var(--c13-red)
  Examples: "SKIP", "CANCEL", "VIEW DETAILS"

GHOST:
  Background: transparent
  Border: none
  Text: var(--text-secondary), --font-mono, uppercase
  Hover: text-color var(--text-primary)
  Examples: "DISCUSS", "ARCHIVE"

DANGER:
  Background: var(--status-error)
  Text: white, --font-mono, uppercase
  Hover: lighten 10%
  Examples: "DELETE TASK", "REMOVE MEMBER"

All buttons:
  Height: var(--btn-height) [40px default, 32px small]
  Border-radius: var(--btn-radius)
  Transition: all 0.2s ease
  Cursor: pointer
  Disabled: opacity 0.4, cursor not-allowed
```

### 4.10 Status Badges

```
These are used EVERYWHERE — events, tasks, team members, modules.
Always --font-mono, 10px, uppercase, letter-spacing: 0.12em.
Pill shape with 4px padding horizontal, 2px vertical.

ACTIVE      → bg: --status-active 15% opacity, text: --status-active
DEPLOYED    → bg: --status-info 15%, text: --status-info
PENDING     → bg: --status-warning 15%, text: --status-warning
CRITICAL    → bg: --status-error 15%, text: --status-error, pulsing animation
CLASSIFIED  → bg: --status-purple 15%, text: --status-purple
OFFLINE     → bg: --text-tertiary 15%, text: --text-tertiary
SCANNING    → bg: --c13-red 15%, text: --c13-red, loading dot animation

Pattern: "STATUS: {VALUE}" — always include the "STATUS:" prefix.
```

---

## 5. ANIMATIONS & MICRO-INTERACTIONS

### 5.1 Core Animation Tokens

```css
:root {
  --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:    cubic-bezier(0.7, 0, 0.84, 0);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   500ms;
}
```

### 5.2 Animation Catalog

| Animation | Where Used | Implementation |
|-----------|-----------|----------------|
| **Scanline Sweep** | Section dividers, loading states | Horizontal gradient sweep left-to-right, --c13-red to transparent, infinite loop, 3s |
| **Pulse Dot** | Online status indicators | Scale 1→1.3→1 + opacity 1→0.6→1, infinite, 2s |
| **Data Stream Reveal** | Dashboard feed items, new events | translateY(8px) → 0 + opacity 0→1, staggered by 50ms per item |
| **Typewriter** | Loading screen text | Characters appear one-by-one, --font-mono, 40ms per character |
| **Glow Pulse** | Active CTA buttons, critical alerts | box-shadow pulsing with --c13-red-glow, 2s infinite |
| **Count Up** | Dashboard big numbers | Number counts from 0 to value, 800ms, --ease-out |
| **Card Hover Lift** | All cards on hover | translateY(-2px) + border-color → --c13-red + shadow appear, 200ms |
| **Kanban Drag** | Task cards while dragging | scale(1.02) + box-shadow + slight rotation (1deg), opacity: 0.9 |
| **Toast Slide** | Notifications | translateX(100%) → 0, 300ms --ease-out |
| **Conflict Flash** | Calendar conflict overlay | Red overlay blinks twice (opacity 0→0.3→0→0.3→0), 400ms |

### 5.3 Loading Screen (App Boot)

```
Match circle13.space's loading screen exactly:

┌──────────────────────────────────┐
│                                  │
│        C-13 // WAR ROOM          │  ← --c13-red, --font-mono, 24px
│                                  │
│        INITIALIZING...           │  ← Typewriter animation
│        ████████░░░░░░░  058%     │  ← Progress bar, --c13-red fill
│                                  │
│        SYNCING MODULES...        │  ← Cycling through:
│                                  │     "CONNECTING TO SUPABASE..."
│                                  │     "LOADING CALENDAR DATA..."
│                                  │     "SCANNING EVENT RADAR..."
│                                  │     "ACQUIRING TEAM PULSE..."
│                                  │     "SIGNAL ACQUIRED ✓"
│                                  │
└──────────────────────────────────┘

Background: var(--bg-void) with subtle grain overlay
Duration: 1.5-2s (or until data loads, whichever is longer)
On complete: fade-out 300ms → reveal dashboard
```

---

## 6. PAGE-BY-PAGE SPECIFICATIONS

### 6.1 Mission Control Dashboard

```
HEADER:
  "MISSION_CONTROL // LIVE"  (--font-mono, 11px, --text-secondary)
  "MISSION CONTROL"          (--font-display, 28px, bold)
  Current date: "13.03.26 // WEDNESDAY // 14:32 IST" (--font-mono, --text-code)

LAYOUT:
  ┌────────────────────────────────────────────────────────┐
  │  NEXT_EVENT: AI Builder Meetup  ████  STARTS IN 2h 15m│  ← Hero banner
  │  LOC: KORAMANGALA // CREW: 5/6 CONFIRMED              │     --bg-surface + --c13-red left border
  ├─────────────────────┬──────────────────┬───────────────┤
  │ TODAY_AGENDA        │ ACTION_STREAM    │ QUICK_OPS     │
  │                     │                  │               │
  │ 09:00 CS301 🎓      │ 14:21 Akhil      │ [+ TASK]      │
  │ 10:30 — FREE —      │   completed      │ [+ EVENT]     │
  │ 12:00 Sprint Review │   "Fix auth bug" │ [SCAN RADAR]  │
  │ 14:30 AI Meetup 📡  │                  │ [PING TEAM]   │
  │ 18:00 Focus Block 🟣│ 14:18 RADAR      │               │
  │                     │   New event:     │ FOCUS_TIMER   │
  │                     │   "GenAI Conf"   │ [START 25m]   │
  │                     │   REL: 78        │               │
  │                     │                  │               │
  │                     │ 13:45 Dave       │               │
  │                     │   checked in     │               │
  ├─────────────────────┴──────────────────┴───────────────┤
  │ HORIZON_7D // UPCOMING                                 │
  │ MON ████ │ TUE ██ │ WED ████████ │ THU █ │ FRI ████  │
  │ 3 events │ 1 task │ 5 items     │ light │ hackathon  │
  └────────────────────────────────────────────────────────┘

All data: Supabase Realtime subscriptions — ZERO polling, ZERO refresh
```

### 6.2 Event Radar

```
HEADER:
  "EVENT_RADAR // SCANNING"  (with animated scanline)
  Filter bar: [ALL] [LUMA] [DEVPOST] [MLH] [MEETUP] [THIS WEEK] [FREE ONLY]

LAYOUT:
  Grid of EventCards (see 4.3), 2 columns on desktop, 1 on mobile
  Sort: Relevance (default), Date, Source
  
  Empty state: 
    "NO_SIGNALS_DETECTED"
    "Radar is scanning. Next sweep: 2h 14m."
    (with rotating radar animation SVG)

ADMIN SECTION (visible to admins only):
  "AUTO_APPLY_RULES // CONFIG"
  Rule editor: JSON-based with visual builder
  Source management: Toggle sources on/off
  Interest tags: Tag input field
  Relevance threshold: Slider (0-100, default 60)
```

### 6.3 Calendar

```
HEADER:
  "UNIFIED_CALENDAR // V2.0"
  View toggle: [DAY] [WEEK] [MONTH] [TEAM]
  Layer toggles: colored dots for each layer, click to show/hide

WEEK VIEW (default):
  Standard time grid (07:00 - 23:00)
  Events rendered as blocks with layer colors
  Conflicts: overlapping blocks show red diagonal stripe overlay
  
  Drag-to-create: Mousedown → drag → release opens event modal
  Click event: Opens detail panel in right sidebar
  
TEAM VIEW:
  Horizontal rows per team member
  Each row shows their week's blocks
  Overlap analysis: columns where everyone is free are highlighted green
```

### 6.4 Tasks (Kanban)

```
HEADER:
  "TASK_ENGINE // SPRINT {NAME}"
  View toggle: [KANBAN] [LIST] [MY TASKS] [SPRINT]
  Filters: assignee, priority, tag, due date

KANBAN:
  5 columns: BACKLOG → TODO → IN_PROGRESS → REVIEW → DONE
  Column headers: --font-mono, uppercase, with task count
  
  Column styling:
    BACKLOG:     --text-tertiary header
    TODO:        --status-info header
    IN_PROGRESS: --status-warning header  
    REVIEW:      --status-purple header
    DONE:        --status-active header
  
  Drag-and-drop: @dnd-kit/sortable
  On drop: optimistic update → Supabase mutation → realtime broadcast
  
  Empty column: "NO_TASKS // CLEAR" with faint dashed border
```

### 6.5 Knowledge Vault

```
HEADER:
  "KNOWLEDGE_VAULT // ENCRYPTED"
  Tabs: [ALL] [NOTES] [DEBRIEFS] [DOCS] [TEMPLATES] [BOOKMARKS] [DECISIONS]
  Search: Full-text search bar (pg_trgm powered)

LAYOUT:
  Left: Folder tree (collapsible)
  Right: Document list → click to open editor

EDITOR:
  Markdown editor with live preview (split pane)
  Toolbar: bold, italic, code, heading, list, link, image upload
  Auto-save indicator: "SAVED // 14:32:05" or "SAVING..."
  Version history: sidebar with diffs
```

---

## 7. RESPONSIVE BEHAVIOR

```
DESKTOP (>1280px):    Full 3-column layout. All panels visible.
TABLET (768-1280px):  Left rail collapses to icons only (48px). 
                       Right panel hidden, accessible via swipe.
MOBILE (<768px):      Single column. Bottom tab bar for navigation.
                       Right panel becomes bottom sheet.
                       Cards stack vertically.
                       Calendar defaults to Day view.
                       Kanban becomes horizontal scroll.

CRITICAL: Mobile is READ-HEAVY. Optimize for consuming information,
not creating it. Quick actions (RSVP, status update) must be 
accessible. Heavy creation (new docs, task details) defers to desktop.
```

---

## 8. REAL-TIME BEHAVIOR SPEC

```
The War Room must feel ALIVE. These elements update without any user action:

| Element                  | Update Trigger                    | Animation            |
|--------------------------|-----------------------------------|----------------------|
| Dashboard action stream  | New event/task/check-in created   | Slide-in from top    |
| Team pulse status dots   | User status change                | Dot color transition |
| Event RSVP avatars       | Someone RSVPs                     | Avatar pop-in        |
| Task kanban position     | Someone moves a task              | Card animate to new column |
| Notification badge       | New notification                  | Count increment + bounce |
| "Next Event" countdown   | Every second                      | Timer tick           |
| Calendar conflicts       | New event overlaps                | Red flash on cell    |

Implementation: Supabase Realtime subscriptions on 6 tables (see PRD §8.2).
Client receives broadcast → Zustand store updates → React re-renders affected components.
No polling. No manual refresh. Ever.
```

---

## 9. ICONOGRAPHY

```
Icon library: Lucide React (lucide-react) — free, consistent, works with shadcn/ui.

Custom usage mapping:
  Dashboard    → LayoutDashboard
  Calendar     → CalendarDays  
  Event Radar  → Radar (or Radio)
  Tasks        → CheckSquare
  Knowledge    → BookOpen
  Analytics    → BarChart3
  Team Pulse   → Heart (or Users)
  Settings     → Settings
  Notifications → Bell
  Search       → Search
  AI Copilot   → Brain (or Sparkles)
  
Status icons:
  Building     → Hammer
  In Class     → GraduationCap
  At Event     → MapPin
  Available    → Circle (filled, green)
  Away         → MinusCircle (red)
  Offline      → Circle (outline, gray)

Size: 16px (inline), 20px (nav), 24px (feature icons)
Stroke width: 1.5px (matches the thin, technical aesthetic)
Color: inherit from parent text color
```

---

## 10. LANGUAGE & COPY GUIDE

### 10.1 Voice Rules

```
The War Room speaks like a military command system operated by hackers.

✅ DO:
  - Use uppercase for labels, headers, statuses
  - Use "//" as separator: "CIRCLE13 // WAR ROOM"
  - Use underscores in compound labels: "EVENT_RADAR", "TEAM_PULSE"
  - Use technical prefixes: "STATUS:", "LOC:", "REL:", "EST:", "ETA:"
  - Use action verbs: "INITIATE", "DEPLOY", "SCAN", "ACQUIRE", "SYNC"
  - Use coordinate-style dates: "13.03.26 // 14:30 IST"
  - Include version numbers: "V1.0", "V2.1"
  - End transmissions: ">> SECTION_COMPLETE"

❌ DON'T:
  - Say "Welcome back!" or "Hello, [Name]!"
  - Use emoji in labels (emoji OK in status indicators only)
  - Use corporate speak: "synergize", "leverage", "optimize"
  - Say "Loading..." — say "ACQUIRING DATA..."
  - Say "No results" — say "NO_SIGNALS_DETECTED"
  - Say "Error" — say "TRANSMISSION_FAILED // RETRY"
  - Say "Are you sure?" — say "CONFIRM_ACTION: DELETE TASK?"
```

### 10.2 Copy Templates

```
LOADING STATES:
  App boot:     "INITIALIZING WAR ROOM..."
  Data fetch:   "ACQUIRING DATA..."
  Event scan:   "SCANNING FREQUENCIES..."
  AI thinking:  "CIRCLE_BRAIN // PROCESSING..."
  Saving:       "TRANSMITTING..."
  Saved:        "TRANSMISSION_COMPLETE ✓"

EMPTY STATES:
  No events:    "NO_SIGNALS_DETECTED // Radar sweep in {time}"
  No tasks:     "ALL_CLEAR // No active missions"
  No check-ins: "AWAITING_TRANSMISSION // Check-in not received"
  No docs:      "VAULT_EMPTY // Start documenting"

ERROR STATES:
  API failure:  "UPLINK_FAILED // Retrying in {n}s..."
  Auth error:   "ACCESS_DENIED // Invalid credentials"
  404:          "SIGNAL_LOST // Route not found"
  Rate limit:   "FREQUENCY_OVERLOADED // Cooling down..."

SUCCESS STATES:
  Event registered: "DEPLOYED ✓ // Team registered for {event}"
  Task completed:   "MISSION_COMPLETE ✓ // {task} marked done"
  Timetable saved:  "SCHEDULE_SYNCED ✓ // {n} blocks imported"

CONFIRMATIONS:
  Delete:     "CONFIRM_PURGE: Delete {item}? This is irreversible."
  Register:   "CONFIRM_DEPLOY: Register all {n} members for {event}?"
  Auto-apply: "AUTO_DEPLOY_ARMED: {rule_description}. Activate?"
```

---

## 11. ACCESSIBILITY

```
Despite the military-terminal aesthetic, accessibility is non-negotiable.

- Color contrast: All text meets WCAG 2.1 AA (4.5:1 for body, 3:1 for large)
  - --text-primary (#E8E8F0) on --bg-void (#07070F) = 15.3:1 ✓
  - --text-secondary (#6B6B80) on --bg-void (#07070F) = 4.8:1 ✓
  - --c13-red (#E94560) on --bg-void (#07070F) = 5.2:1 ✓

- Keyboard navigation: Full tab-through for all interactive elements
- Cmd+K: Opens command palette (keyboard-first search)
- Screen readers: ARIA labels on all icon buttons, status indicators
- Focus rings: 2px --c13-red outline, 2px offset
- Motion: Respect prefers-reduced-motion — disable animations, keep content
- Alt text: All event images, user avatars
```

---

## 12. IMPLEMENTATION CHECKLIST

```
For Integravity dev team — check off as you build:

PHASE 1 DESIGN:
[ ] Install fonts: JetBrains Mono (Google Fonts), Geist (Vercel), Inter (Google Fonts)
[ ] Set up Tailwind config with all CSS variables from §1
[ ] Configure shadcn/ui with dark theme overrides
[ ] Build loading screen matching circle13.space (§5.3)
[ ] Build top nav bar (§4.1)
[ ] Build left sidebar rail (§4.2)
[ ] Build command palette with cmdk (§4.7)
[ ] Create all button variants (§4.9)
[ ] Create all status badges (§4.10)
[ ] Set up Supabase Realtime subscriptions
[ ] Build notification toast system (§4.8)

PHASE 2 DESIGN:
[ ] Build EventCard component (§4.3)
[ ] Build Event Radar page layout (§6.2)
[ ] Build calendar with layer system (§6.3)
[ ] Build conflict detection overlay

PHASE 3 DESIGN:
[ ] Build availability heat grid (§4.5)
[ ] Build team pulse cards (§4.6)
[ ] Build timetable grid editor
[ ] Build knowledge vault with markdown editor (§6.5)

PHASE 4 DESIGN:
[ ] Build analytics dashboards (Recharts)
[ ] Build AI copilot chat panel
[ ] Build task kanban with drag-and-drop (§6.4)
[ ] PWA manifest + service worker + Web Push
[ ] Mobile responsive pass (§7)
[ ] Animation polish pass (§5)
[ ] Accessibility audit (§11)
```

---

```
>> END_OF_TRANSMISSION

// C-13 // WAR ROOM DESIGN SYSTEM V2.0
// CLASSIFICATION: INTERNAL
// PREPARED FOR: INTEGRAVITY BUILD TEAM
// STATUS: READY_FOR_DEPLOYMENT

// Now go build it. 🚀
```
