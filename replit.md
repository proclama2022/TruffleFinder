# Lagotto & Truffle Week - Event Landing Page

## Overview

This is a modern, bilingual (Italian/English) event landing page for "Lagotto & Truffle Week" - a specialized event for Lagotto Romagnolo dogs and their owners. The application features a beautiful, responsive design with truffle-themed styling, comprehensive event information, and integrated booking/contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom truffle-themed color palette
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: React Context for theme and language switching
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query (React Query) for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful endpoints for bookings and contact submissions
- **Development**: TSX for TypeScript execution in development

### Database Schema
- **Users Table**: Basic user authentication (username, password)
- **Bookings Table**: Event booking submissions with personal and dog information
- **Contacts Table**: General contact form submissions
- **Schema Validation**: Zod schemas for runtime type checking

## Key Components

### Frontend Components
1. **Navigation**: Glassmorphism-styled floating navigation with smooth scrolling
2. **Hero Section**: Animated hero with gradient background and floating elements
3. **Program Timeline**: Interactive timeline showing 5-day event schedule
4. **Activities Grid**: Filterable activity cards with difficulty levels and duration
5. **Gallery**: Masonry-style photo gallery with category filters
6. **Contact Section**: Dual-purpose form for both bookings and general contact

### Backend Components
1. **Route Handlers**: Express routes for API endpoints (`/api/bookings`, `/api/contacts`)
2. **Storage Layer**: Abstract storage interface with in-memory implementation
3. **Validation**: Zod schema validation for all form submissions
4. **Error Handling**: Centralized error handling with proper HTTP status codes

### Shared Components
1. **Schema Definitions**: Shared TypeScript types and Zod schemas
2. **Type Safety**: End-to-end type safety between frontend and backend

## Data Flow

1. **User Interaction**: User fills out booking or contact form
2. **Client Validation**: Form data validated using React Hook Form with Zod resolvers
3. **API Request**: TanStack Query sends validated data to Express API
4. **Server Validation**: Server re-validates data using shared Zod schemas
5. **Data Storage**: Validated data stored in PostgreSQL via Drizzle ORM
6. **Response**: Success/error response sent back to client
7. **UI Update**: Toast notifications inform user of submission status

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit**: Development and deployment platform

### UI & Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library for decorative elements
- **Google Fonts**: Inter and Dancing Script fonts

### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **ESBuild**: Production bundling for server code
- **PostCSS**: CSS processing with Autoprefixer

## Deployment Strategy

### Development Environment
- **Hot Module Replacement**: Vite HMR for instant frontend updates
- **Server Restart**: TSX automatically restarts server on changes
- **Database**: Connected to Neon database for consistent data

### Production Build
1. **Frontend**: Vite builds optimized static assets to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations ensure schema consistency
4. **Deployment**: Replit autoscale deployment with PostgreSQL module

### Configuration
- **Environment Variables**: `DATABASE_URL` for database connection
- **Build Scripts**: Separate development and production configurations
- **Port Configuration**: Server runs on port 5000 with external port 80

## Changelog

Changelog:
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.