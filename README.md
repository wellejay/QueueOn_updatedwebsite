# QueueOn

A modern, multilingual landing page for QueueOn - a smart queue management system for businesses in Saudi Arabia.

## Features

- **Multilingual Support**: Seamlessly switch between English and Arabic with full RTL support
- **Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive Components**:
  - Hero section with call-to-action
  - App showcase with screenshots
  - Industry-specific solutions
  - Merchant features overview
  - Pricing plans
  - FAQ section
  - How it works guide

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **Supabase** - Backend infrastructure

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env` file and configure Supabase credentials if needed

### Development

Run the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
├── contexts/         # React contexts (Language, Theme)
├── hooks/           # Custom hooks
├── translations.ts  # Translation strings
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Vercel auto-detects Vite settings
4. Deploy

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Environment Variables

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## License

Private project - All rights reserved
