# Aya Hussein — Portfolio (Angular)

Modern full-stack developer portfolio built with Angular, featuring geometric shaped cards and a dark violet theme.

**Live site:** https://ayahusseinaly.github.io/portfolio-angular/

## Tech Stack

- Angular 22
- SCSS with clip-path shapes
- GitHub Pages + GitHub Actions

## Features

- Shaped cards (circles, triangles, hexagons, diamonds)
- Hero with floating geometric decorations
- About section with skill cards and stats
- Experience timeline with company logos
- Filterable project cards with SVG illustrations
- Contact cards and GitHub Pages auto-deploy

## Prerequisites

- Node.js 20+
- npm 10+

## Local Development

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200)

## Production Build

```bash
npm run build          # standard build
npm run build:pages    # GitHub Pages build (correct base href)
```

## Customize Content

Edit `src/app/data/portfolio.data.ts` for profile, skills, experience, and projects.

Replace the profile photo URL in the data file or add `public/profile-photo.jpg`.

## Deploy to GitHub Pages

### 1. Create repository

1. Go to [github.com/new](https://github.com/new)
2. Name: `portfolio-angular`
3. Visibility: **Public**
4. Click **Create repository**

### 2. Push code

```bash
git init
git add .
git commit -m "Initial commit: Aya Hussein Angular portfolio"
git branch -M main
git remote add origin https://github.com/AyaHusseinAly/portfolio-angular.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. **Settings → Pages**
2. Source: **GitHub Actions**
3. Site URL: `https://ayahusseinaly.github.io/portfolio-angular/`

> If the repo name differs, update `baseHref` in `angular.json` and the workflow artifact path.

## Contact

- **Email:** aya.hussein3107@gmail.com
- **GitHub:** [AyaHusseinAly](https://github.com/AyaHusseinAly)
- **LinkedIn:** [aya-hussein-19a359134](https://linkedin.com/in/aya-hussein-19a359134)
- **WhatsApp:** +20 101 183 3038

---

Built with Angular by Aya Hussein
