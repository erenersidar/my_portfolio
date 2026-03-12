# Apply10 — Portfolio System
## Identity
- Developer: Sidar Erener
- Brand: Apply10
- Location: Mülheim an der Ruhr, Ruhr Region, Germany
- Business model: Demo-first freelance web development
- Target clients: Small local service businesses in the Ruhr region
- Languages: Turkish (personal), German (client), English (technical)
## This Project
- Purpose: Apply10 personal portfolio and developer showcase
- Also serves as: Live demo of Apply10 capabilities for potential clients
- Primary deploy: Vercel (active)
- Secondary deploy: Firebase App Hosting (inactive — kept for Genkit/Google AI integration)
- NEVER touch apphosting.yaml or vercel.json without explicit instruction
- NEVER modify /agb, /datenschutz, /impressum without explicit instruction
## Tech Stack
### Active
- Framework: Next.js 16 + React 18 + TypeScript 5
- Styling: Tailwind CSS + shadcn/ui (Radix UI)
- Animation: Framer Motion
- AI: Google Genkit (@genkit-ai/google-genai)
- Forms: react-hook-form + Zod
- Email: Nodemailer + Cloudflare Turnstile
- Database: Firebase (this project), Supabase (client projects)
### Planned / Client Projects
- Design: Figma, Stitch
- Automation: n8n, Make
- Payments: Stripe
- DevOps: Docker, GitHub Actions
## Dev Rules
- TypeScript only — no plain .js files
- Use existing shadcn/ui components before creating new ones
- Dev server: `next dev --turbopack -p 9002`
- Build always runs typecheck first: `npm run typecheck && next build`
## Apply10 Principles
- Demo-first: Build working demos before sales conversations
- Every project = client deliverable + portfolio/brand material
- SDLC: Discovery → Design → Development → QA → Launch
- One session = one concrete deliverable
## Workflow
- Skills: .claude/skills/
- One session = one deliverable, no open-ended sessions
- After each session: log successful patterns to MEMORY.md
