# Jenis Onn — Personal Portfolio

A minimal, responsive **single-page React portfolio** based on the original multi-page `App.js` structure, with Intro / About, Skills, Experience, Projects, and a Contact section.

## Get started

Prerequisites: Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

Build for deployment:

```bash
npm run build
```

The deployable static files will be in `dist/`.

## Editing your information

- `src/App.jsx` — introduction copy, skills, experience, projects and nav.
- `src/styles.css` — colors, layout, animations and responsive design.
- `index.html` — page title and description.

### Before publishing

1. Review organization, role and date labels for accuracy, especially the KPMG internship title.
2. Update ongoing project descriptions as you complete and ship them.
3. Replace the clearly marked sample contact links in the `contactLinks` array near the top of `src/App.jsx` (email, LinkedIn, and GitHub).
4. Replace the decorative project mockups with your actual screenshots when available.

No personal photos or external images required. Google Fonts are optional; system font fallbacks are included.

## Contact placeholders

In `src/App.jsx`, edit the `contactLinks` array. Replace both the `value` (displayed text) and `href` (actual destination). The defaults (`your.email@example.com`, `linkedin.com/in/your-username`, `github.com/your-username`) are examples and **are not real contact details**.

