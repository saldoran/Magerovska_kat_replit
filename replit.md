# replit.md

## Overview

This is a modern single-page landing website for permanent makeup artist Katerina Magerovskaya (Instagram: magerovska_permanent). The application is built as a full-stack web application using React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence. The landing page showcases professional permanent makeup services including eyebrows, lip blush, and eyelash enhancement, featuring a modern design with coral accents and warm beige tones.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form handling
- **Design System**: Custom color palette with coral and beige theme, using CSS variables for theming

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submissions
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot module replacement via Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL connection
- **Fallback**: In-memory storage implementation for development/testing scenarios

### Component Architecture
- **UI Components**: Reusable shadcn/ui components (Button, Form, Input, etc.)
- **Page Sections**: Modular components for each landing page section (Hero, Services, Portfolio, etc.)
- **Responsive Design**: Mobile-first approach with responsive navigation (hamburger menu on mobile)
- **Animations**: Intersection Observer API for scroll-based fade-in animations

### External Dependencies
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Radix UI**: Headless UI components for accessibility (@radix-ui/react-*)
- **Lucide Icons**: Icon library for consistent iconography
- **Fonts**: Google Fonts integration (Inter, Playfair Display)
- **Images**: Unsplash for placeholder portfolio images

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting with connection pooling
- **Database URL**: Environment variable-based connection string configuration

### UI Component Libraries
- **Radix UI**: Comprehensive collection of headless, accessible UI primitives
- **shadcn/ui**: Pre-built component library built on Radix UI primitives
- **Lucide React**: Feather-inspired icon library with React components

### Development Tools
- **Vite**: Fast build tool with Hot Module Replacement for development
- **Drizzle Kit**: Database migration and introspection toolkit
- **ESBuild**: JavaScript bundler for production builds
- **TypeScript**: Static type checking for both frontend and backend

### Form and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema declaration and validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Library for creating variant-based component APIs
- **PostCSS**: CSS post-processor with autoprefixer

### Third-party Integrations
- **Google Fonts**: Inter and Playfair Display font families
- **Unsplash**: Stock photography for portfolio showcase images
- **Instagram**: Referenced for brand imagery and portfolio content inspiration