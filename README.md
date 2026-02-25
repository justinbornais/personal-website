# Personal Website

A modern, responsive personal website showcasing my work as a Software Developer and Musician. Built with Astro, React, and TypeScript, featuring a blog powered by Markdown and interactive particle effects.

## 🌟 Features

- **Hero Section** - Eye-catching landing page with interactive particle web effect that responds to mouse movement
- **About Section** - Professional bio highlighting my experience at Tessonics and musical background, with dynamically loaded GitHub repositories
- **Blog** - Markdown-based blog system using Astro Content Collections for easy post creation and management
- **Contact Section** - Dedicated contact cards for development and music inquiries with social media links
- **Responsive Design** - Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Smooth Navigation** - Smooth scroll behavior for seamless section transitions

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator for optimal performance
- **[React](https://react.dev)** - Interactive UI components with TypeScript
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript for better development experience
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework for styling
- **[MDX](https://mdxjs.com)** - Markdown with JSX for blog posts
- **Canvas API** - Custom particle animation system

## 📁 Project Structure

```
personal-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components (Hero, Navbar, About, Contact, etc.)
│   ├── content/         # Content collections
│   │   ├── blog/        # Markdown blog posts
│   │   └── config.ts    # Content schema definitions
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   │   ├── index.astro  # Home page
│   │   └── blog/        # Blog pages
│   └── styles/          # Global styles
└── .github/workflows/   # GitHub Actions for deployment
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Deploying the Site

After cloning the repository, installing all dependencies via `npm i`, run `npm run dev` to start deploying the website. The site will be available at `http://localhost:4321`.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📝 Writing Blog Posts

Blog posts are written in Markdown and stored in `src/content/blog/`. To create a new post:

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields:

```markdown
---
title: 'Your Post Title'
description: 'Brief description of the post'
pubDate: 2026-02-25
author: 'Justin Bornais'
tags: ['tag1', 'tag2']
---

Your content here...
```

3. The post will automatically appear on the blog page

## 🎨 Customization

- **Colors**: Modify color schemes in `src/layouts/Layout.astro` (CSS custom properties)
- **Particle Effects**: Adjust particle count and behavior in `src/components/Hero.tsx`
- **About Section**: Update GitHub username in `src/components/About.tsx`
- **Contact Info**: Modify email addresses in `src/components/Contact.tsx`

## 🚀 Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when pushing to the `main` branch. The workflow:

1. Builds the Astro site
2. Pushes the built files to the `gh-pages` branch
3. GitHub Pages serves the site from that branch

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Justin Bornais**
- Website: [justinbornais.github.io/personal-website](https://justinbornais.github.io/personal-website)
- GitHub: [@justinbornais](https://github.com/justinbornais)
- Development Email: jmbornaisdeveloper@gmail.com
- Music Email: bornaismusic@gmail.com

## 🙏 Acknowledgments

Built with modern web technologies and deployed on GitHub Pages. Special thanks to the Astro team for creating an excellent static site generator.
