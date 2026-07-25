# teviq.in

Teviq Support AI marketing website built with React, Vite, Tailwind CSS, and Framer Motion.

## Local Development

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Production Integrations

- Dashboard: `https://dashboard.teviq.in`
- Backend: `https://teviq-support-ai-backend.onrender.com`
- Widget: `https://teviq-support-ai-widget.vercel.app/v1.0.0/widget.js`

The widget script is preloaded on page load so the live-demo assistant is ready before a visitor reaches the demo section.

## Deployment

The site deploys to Vercel. Static assets and the hero video use long-lived immutable cache headers; hashed Vite assets are safe to cache indefinitely.
