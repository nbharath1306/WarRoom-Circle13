# Circle13: The War Room
**The Ultimate Command Center for Circle13 Builders.**

## 🚀 Features
- **Mission Control**: Unified dashboard for events, tasks, and team status.
- **Event Radar**: Automated discovery and scanning for hackathons (Luma, Devpost).
- **Team Sync**: Collective availability matrix and college timetable OCR.
- **Task Engine**: Kanban-style sprint management.
- **Circle Brain**: AI-powered copilot for team coordination.
- **Knowledge Vault**: Centralized builder's documentation.

## 🛠 Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Database/Auth**: Supabase
- **AI**: Groq (LLaMA 3.3 70B)
- **OCR**: Tesseract.js
- **Automation**: GitHub Actions

## ⚙️ Environment Setup
Copy `.env.example` to `.env` and fill in the following:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `LUMA_API_KEY` (Luma Public API)
- `GROQ_API_KEY` (Groq SDK)
- `TELEGRAM_BOT_TOKEN` (Telegram Bot API)

## 📦 Deployment
1. Push to GitHub.
2. Connect to Vercel.
3. Add all environment variables from `.env` to Vercel Settings.
4. Add GitHub Secrets for the **Event Radar Scanner** workflow.

## 🏃 Local Development
```bash
npm install
npm run dev
```

---
Built with 100% free stack for Circle13.