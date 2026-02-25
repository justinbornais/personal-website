# Frontend Development Guide

This document explains the frontend architecture and development practices for the personal website project built with **Astro**, **React**, **TypeScript**, and **Tailwind CSS**.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Components](#components)
- [Pages](#pages)
- [Blog System](#blog-system)
- [Styling](#styling)
- [TypeScript](#typescript)
- [Building for Production](#building-for-production)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Astro** | Static site generator and framework |
| **React** | Interactive UI components |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first CSS framework |
| **MDX** | Markdown with JSX support for blog posts |

---

## Project Structure

```
src/
├── components/       # React TypeScript components
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Navbar.tsx
├── content/          # Content collections (blog posts)
│   ├── config.ts     # Collection schema definitions
│   └── blog/         # Markdown blog posts
├── layouts/          # Astro layout templates
│   └── Layout.astro
├── pages/            # Route-based pages
│   ├── index.astro
│   └── blog/
│       ├── index.astro
│       └── [slug].astro
└── styles/           # Global styles
    └── global.css
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

---

## Development Workflow

### Creating Components

React components live in `src/components/` and use TypeScript with the `.tsx` extension.

#### Basic Component Structure

```tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  description?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div className="p-4 bg-neutral-800 rounded-lg">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      {description && <p className="text-gray-400">{description}</p>}
    </div>
  );
};

export default MyComponent;
```

### Using React Components in Astro

Import React components into `.astro` files and use client directives for interactivity:

```astro
---
import MyComponent from '../components/MyComponent.tsx';
---

<!-- Static rendering (no JavaScript) -->
<MyComponent title="Static" />

<!-- Hydrate on page load (for interactive components) -->
<MyComponent client:load title="Interactive" />

<!-- Hydrate when visible in viewport -->
<MyComponent client:visible title="Lazy Loaded" />
```

#### Client Directives Reference

| Directive | When to Use |
|-----------|-------------|
| `client:load` | Interactive components needed immediately (navbar, forms) |
| `client:visible` | Components below the fold that need interactivity |
| `client:idle` | Low-priority interactive components |
| `client:only="react"` | Components that should only render on the client |
| *(none)* | Static components with no JavaScript |

---

## Components

### Navbar (`Navbar.tsx`)

Responsive navigation with mobile hamburger menu.

```tsx
import Navbar from '../components/Navbar.tsx';

// Use with client:load for menu toggle functionality
<Navbar client:load />
```

### Hero (`Hero.tsx`)

Full-screen hero section with gradient text animation.

```tsx
import Hero from '../components/Hero.tsx';

<Hero 
  client:load 
  title="Your Name" 
  subtitle="Your Tagline" 
/>
```

### Footer (`Footer.tsx`)

Simple footer with dynamic copyright year.

```tsx
import Footer from '../components/Footer.tsx';

<Footer />  // Static, no client directive needed
```

### Card (`Card.tsx`)

Reusable card component for displaying linked content.

```tsx
import Card from '../components/Card.tsx';

<Card 
  title="Project Name"
  body="Project description"
  href="/projects/my-project"
/>
```

---

## Pages

### Astro Pages

Pages are created in `src/pages/` and automatically become routes:

| File | Route |
|------|-------|
| `index.astro` | `/` |
| `blog/index.astro` | `/blog` |
| `blog/[slug].astro` | `/blog/:slug` (dynamic) |

### Creating a New Page

```astro
---
// src/pages/about.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="About">
  <main class="min-h-screen bg-neutral-900 py-12 px-6">
    <h1 class="text-4xl font-bold text-white">About Me</h1>
    <!-- Content here -->
  </main>
</Layout>
```

---

## Blog System

The blog uses Astro's Content Collections with Markdown files.

### Content Collection Schema

Defined in `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Justin Bornais'),
    tags: z.array(z.string()).default([]),
  }),
});
```

### Writing a Blog Post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: 'My New Post'
description: 'A brief description of the post'
pubDate: 2026-02-25
tags: ['typescript', 'react']
---

# My New Post

Write your content here using standard Markdown syntax.

## Code Examples

```typescript
const greeting = "Hello, World!";
console.log(greeting);
```

## Lists

- Item one
- Item two
- Item three
```

### Querying Blog Posts

```astro
---
import { getCollection } from 'astro:content';

// Get all posts sorted by date
const posts = (await getCollection('blog')).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
---
```

---

## Styling

### Tailwind CSS

This project uses Tailwind CSS for styling. Classes are applied directly in JSX/HTML:

```tsx
<div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:bg-neutral-700 transition-colors">
  <h2 className="text-2xl font-bold text-white mb-4">Title</h2>
  <p className="text-gray-400">Description</p>
</div>
```

### Global Styles

Global styles are defined in:
- `src/styles/global.css` - Tailwind imports
- `src/layouts/Layout.astro` - CSS custom properties and global rules

### CSS Custom Properties

```css
:root {
  --accent: rgb(207, 171, 70);
  --accent-light: rgb(28, 60, 165);
  --accent-gradient: linear-gradient(45deg, var(--accent), var(--accent-light) 30%, white 60%);
}
```

### Dark Mode

The site uses dark mode by default. Tailwind's `dark:` prefix is available for conditional dark mode styles:

```tsx
<div className="bg-white dark:bg-neutral-900 text-black dark:text-white">
  Content
</div>
```

---

## TypeScript

### Configuration

TypeScript is configured in `tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

### Type Definitions

- Component props should always have interfaces
- Use `React.FC<Props>` for functional components
- Astro provides types for content collections

```typescript
// Type-safe content collection entry
import type { CollectionEntry } from 'astro:content';

type Props = CollectionEntry<'blog'>;
```

### Type Checking

Run type checking with:

```bash
npx astro check
```

This is also run automatically during `npm run build`.

---

## Building for Production

### Build Command

```bash
npm run build
```

This will:
1. Run TypeScript type checking (`astro check`)
2. Build static files to `dist/`

### Preview Production Build

```bash
npm run preview
```

### Deployment

The built `dist/` folder can be deployed to any static hosting:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

---

## Best Practices

### Component Guidelines

1. **Keep components focused** - Each component should do one thing well
2. **Use TypeScript interfaces** - Always define prop types
3. **Prefer composition** - Build complex UIs from simple components
4. **Use semantic HTML** - Proper heading hierarchy, landmarks, etc.

### Performance Tips

1. **Minimize client directives** - Only hydrate components that need interactivity
2. **Use `client:visible`** - For components below the fold
3. **Optimize images** - Use Astro's `<Image />` component
4. **Lazy load** - Split code when possible

### Accessibility

1. **Alt text** - Always include for images
2. **Keyboard navigation** - Ensure interactive elements are focusable
3. **ARIA labels** - Use when semantic HTML isn't sufficient
4. **Color contrast** - Maintain WCAG AA compliance

---

## Troubleshooting

### Common Issues

**"Cannot find module 'react'"**
- Run `npm install` to ensure dependencies are installed
- Restart the TypeScript server in VS Code (Cmd/Ctrl + Shift + P → "Restart TS Server")

**Content collection not updating**
- Restart the dev server after modifying `src/content/config.ts`

**Styles not applying**
- Check that Tailwind classes are spelled correctly
- Ensure `global.css` is imported in the layout

---

## Resources

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
