# Dedrick Siddall Portfolio

## Overview

This is a personal portfolio website for Dedrick Siddall, built as a full-stack application using React frontend with Express backend. The application showcases professional work, resume, and contact information in a modern, responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Design System
- **Component Library**: shadcn/ui with "new-york" style
- **Theme**: Custom CSS variables for consistent theming
- **Typography**: Inter font family
- **Icons**: Lucide React icons and Font Awesome
- **Color Scheme**: Professional blue/neutral palette with accent colors

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Introduction**: Hero section with personal branding and call-to-action
3. **Resume**: Professional experience and education display
4. **Portfolio**: Project showcase with filtering and categorization
5. **Contact**: Contact form with validation and toast notifications
6. **Footer**: Simple footer with legal links

### Backend Structure
1. **Routes**: API route registration system (currently minimal)
2. **Storage**: In-memory storage with interface for future database integration
3. **Vite Integration**: Development server with HMR support

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Migrations**: Drizzle-based database migrations
- **Connection**: Neon Database (PostgreSQL) via connection string

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express handles requests with middleware logging
3. **Data Storage**: Currently uses in-memory storage, designed for PostgreSQL migration
4. **Response Handling**: Standardized JSON responses with error handling
5. **UI Updates**: React components update based on query state changes

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Components**: Extensive Radix UI component collection
- **State**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Utilities**: clsx, class-variance-authority for styling
- **Date Handling**: date-fns for date manipulation

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Session**: connect-pg-simple for session management
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Email Service**: SendGrid for contact form email delivery (added January 9, 2025)

### Database
- **Provider**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle with type-safe queries
- **Migrations**: Automated schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle pushes schema changes via `db:push` command

### Environment Configuration
- **Development**: Uses tsx with hot reload and Vite dev server
- **Production**: Serves built static files with Express
- **Database**: Requires `DATABASE_URL` environment variable

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `check`: TypeScript type checking
- `db:push`: Database schema deployment

### Hosting Considerations
- **Static Assets**: Frontend builds to dist/public for serving
- **API Routes**: Express server handles /api routes
- **Database**: PostgreSQL connection via environment variable
- **Session Storage**: PostgreSQL-backed sessions for scalability

The application is designed for easy deployment on platforms like Replit, Vercel, or traditional hosting providers with PostgreSQL database support.