# Kaito Tabor - Personal Portfolio Website

A modern, responsive portfolio website showcasing my work as a Machine Learning Engineer and Software Developer. Built with React, TypeScript, and featuring dynamic animations.

**Live Site:** [ktabor.dev](https://ktabor.dev)
Currently working on an issue that prevents the wifi from being open on eduroam campus wifi and certain wifi typesd

## Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling framework
- **Shadcn/ui** - Modern component library

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Turbo** - Monorepo build system
- **Vitest** - Unit testing framework

## Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KaitoTabor/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
personal-website/
├── apps/
│   ├── frontend/           # Main React application
│   │   ├── src/
│   │   │   ├── components/ # Reusable UI components
│   │   │   ├── routes/     # Page components
│   │   │   ├── blocks/     # Custom UI blocks (Waves, etc.)
│   │   │   └── lib/        # Utility functions
│   │   ├── public/         # Static assets & resume files
│   │   └── index.html      # Entry point with SEO metadata
│   └── backend/            # Express.js API (future expansion)
├── packages/
│   ├── common/             # Shared utilities
│   └── database/           # Database schema (Prisma)
├── configs/                # ESLint, Prettier, TypeScript configs
├── docker/                 # Docker configuration
└── scripts/                # Deployment scripts
```
