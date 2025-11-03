# Unibonds React Frontend

This is the React version of the Unibonds website, converted from the HTML version.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
frontend_react/
├── public/
│   └── Final-Unibonds-Logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── BondsSection.jsx
│   │   ├── OtherProductsSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Features

- ✅ Responsive design matching the original HTML
- ✅ Tailwind CSS for styling
- ✅ All main sections from the home page
- ✅ Interactive components with hover effects
- ✅ Mobile-friendly navigation
- ✅ WhatsApp integration button

## Notes

- The logo image needs to be in the `public` folder (already copied)
- All colors and styles match the original HTML design
- Uses React hooks for interactive components
- Fully responsive with Tailwind's responsive utilities

