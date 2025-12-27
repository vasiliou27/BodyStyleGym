# Body Style Gym Website

A modern, premium fitness website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏋️ **Modern Design**: Dark theme with black and green accents
- 📱 **Mobile-First**: Fully responsive design
- ⚡ **Fast Performance**: Built with Next.js 14
- 🎨 **Smooth Animations**: Hover effects and transitions throughout
- 📄 **5 Pages**: Home, About, Timetable, Memberships, Contact

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
BodyStyleGym/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── memberships/    # Memberships & pricing page
│   ├── timetable/      # Class schedule page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Logo.tsx        # Gym logo component
│   └── Navigation.tsx  # Navigation bar
└── public/             # Static assets
```

## Customization

- Update contact information in `app/contact/page.tsx`
- Modify membership pricing in `app/memberships/page.tsx`
- Adjust class schedules in `app/timetable/page.tsx`
- Customize colors in `tailwind.config.ts`

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

