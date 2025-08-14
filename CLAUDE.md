# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TaskHub is a household task management application built with Next.js 14+ using a separated database/UI architecture. The project enables families to collaborate on household tasks with features like recurring schedules, priority management, and analytics.

## Architecture

### Unified Project Structure
- All components are now in a single directory structure
- Database client is generated in `/prisma/generated/client/`
- Prisma schema and migrations are in `/prisma/`

### Key Technologies
- **Frontend**: Next.js 14+ with App Router, TypeScript, Tailwind CSS v4
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: NextAuth.js with Google OAuth and credentials
- **State Management**: Zustand stores for client-side state
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion
- **Drag & Drop**: @dnd-kit for task rescheduling

## Database Schema Architecture

The schema supports multi-tenant household management:

- **User** - Authentication and user profiles
- **Household** - Family/group containers for tasks
- **HouseholdMember** - Junction table managing user roles in households
- **Category** - Task categorization with emojis and colors (user or household-scoped)
- **Task** - Main task entity with priorities, due dates, assignments, subtasks
- **RecurrenceRule** - Flexible recurring task patterns
- **TaskHistory** - Audit trail for task actions and analytics

Tasks can be assigned to users, belong to categories, support subtask hierarchies, and have recurring patterns.

## Development Commands

### Development Commands
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
```

### Database Operations
```bash
npx prisma generate           # Generate client after schema changes
npx prisma db push           # Push schema to database (development)
npx prisma migrate dev       # Create and apply migration (production)
npx prisma studio           # Open database GUI
```

## State Management

### Zustand Stores
- `useTaskStore` - Task management, filtering, CRUD operations
- `useHouseholdStore` - Household management, member management

Stores include computed properties (e.g., `filteredTasks()`) and are designed for real-time updates.

## Authentication Flow

1. NextAuth.js configured in `/lib/auth.ts` with Prisma adapter
2. Protected routes use middleware in `middleware.ts`
3. Session management integrated with Zustand stores
4. Supports both OAuth (Google) and credentials authentication

## UI Component System

### Design System
- Custom Tailwind configuration with CSS variables for theming
- HSL color space for light/dark theme support
- Consistent component API following Radix patterns
- Utility-first approach with `cn()` helper for conditional classes

### Key Components
- Reusable UI primitives in `/components/ui/`
- Layout components in `/components/layout/`
- Dashboard uses collapsible sidebar pattern with Framer Motion

## Environment Configuration

Required environment variables in `.env.local`:
```
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="..."
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

## Development Patterns

### Database Client Usage
Import Prisma client:
```typescript
import { prisma } from "@/lib/prisma"
// lib/prisma.ts imports from '../prisma/generated/client'
```

### Type Safety
- Prisma generates TypeScript types automatically
- Zustand stores use Prisma types for consistency
- Custom type extensions (e.g., `TaskWithCategory`) for complex queries

### File Organization
- API routes in `/app/api/` following Next.js 14 conventions
- Page components use Client Components for interactivity
- Server Components for initial data loading where appropriate

## Known Issues & Considerations

- Some Radix UI components (like `@radix-ui/react-button`) don't exist - use custom implementations
- Database URL in environment uses a cloud provider (appears to be set up with a hosted solution)
- Middleware currently has an unused `req` parameter