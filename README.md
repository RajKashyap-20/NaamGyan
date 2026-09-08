# NaamKatha

**NaamKatha** is a small, human-focused name discovery website.

> Every name carries a little piece of history.

The first version intentionally keeps the result simple. For a searched name it shows:

1. Meaning
2. Origin
3. Language
4. Gender association
5. Cultural context
6. Similar names
7. Name variants

## Tech stack

- React
- Vite
- JavaScript
- CSS
- Free Dictionary API for a lightweight lookup check
- No database
- No Express server required

## Run locally

Make sure Node.js is installed.

```bash
npm install
npm run dev
```

Open the local address printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are created in `dist/`.

---

# Deploy to Vercel

### Option 1 — Import from GitHub

1. Create a GitHub repository.
2. Push this project to the repository.
3. Open Vercel and choose **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect Vite automatically.
6. Use:

**Build Command**
```text
npm run build
```

**Output Directory**
```text
dist
```

**Install Command**
```text
npm install
```

7. Deploy.

The included `vercel.json` keeps client-side routes working if routes are added later.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel
```

For production:

```bash
vercel --prod
```

---

# Deploy to GitHub Pages

This project is also prepared for GitHub Pages.

## 1. Update the Vite base

If your repository is named:

```text
NaamKatha
```

change `vite.config.js` to:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/NaamKatha/"
});
```

If the repository name is different, use that name instead.

## 2. Install the GitHub Pages deployment package

```bash
npm install --save-dev gh-pages
```

Add these scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Then run:

```bash
npm run deploy
```

GitHub Pages will publish the `dist` folder to the `gh-pages` branch.

## 3. GitHub Pages settings

In your GitHub repository:

**Settings → Pages**

Under **Build and deployment**, choose:

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

Save the setting.

---

# GitHub upload

From the project folder:

```bash
git init
git add .
git commit -m "Initial NaamKatha project"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Do not commit `node_modules`.

The included `.gitignore` already prevents that.

---

# About the API

The current project does **not** require a database.

It uses a free Dictionary API as a basic lookup check. That API is not a dedicated name-etymology service, so it should not be treated as an authoritative source for name origin or cultural information.

For a larger version of NaamKatha, a dedicated name API can be connected later.

Important: do not invent name meanings when an API does not have reliable information.

---

# Project structure

```text
NaamKatha/
├── src/
│   ├── main.jsx
│   └── style.css
├── .gitignore
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── README.md
```

## License

You can use and modify this project for your own portfolio and learning.
