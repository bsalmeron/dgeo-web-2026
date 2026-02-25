# Copilot instructions — dgeo-web-2026

This repo is a small static website (plain HTML/CSS/JS). The goal of these instructions is to help an AI coding agent be productive quickly by describing architecture, conventions, and important guardrails specific to this project.

- **Project type:** Static site (no build step). Pages are individual HTML files (e.g. index.html, blog.html, investigacion-geotecnica.html).
- **Primary assets:** `assets/img/` contains photos, icons and the `Logo/` folder. Preserve relative paths when editing images or HTML.

- **Entry points to read first:** `index.html` (site structure, nav anchors, contact form), `app.js` (all client behavior), `styles.css` (design system, CSS variables, dark mode). See examples in these files.

- **Runtime & deployment:** Intended for static hosting (Netlify / GitHub Pages). The contact form uses Netlify-compatible attributes (`data-netlify="true"`) and the in-page form currently constructs a `mailto:` as fallback — do not remove the `form-name` hidden input or the `id`s used by `app.js`.

- **Important IDs and selectors used by JavaScript (do not rename lightly):** `#themeToggle`, `#menuToggle`, `#nav`, `#header`, `#contactForm`, `#name`, `#email`, `#phone`, `#message`. These are referenced across `app.js` functions such as `initThemeToggle()` and `initContactForm()`.

- **Theme and style conventions:** The site uses CSS custom properties (variables) and toggles dark mode by setting `data-theme='dark'` on `document.documentElement` (see `styles.css`). Prefer editing variables in `:root` rather than scattering color values.

- **JS conventions & patterns:** Vanilla ES6+; `app.js` organizes features into small `init*()` functions (e.g. `initMobileMenu()`, `initSmoothScroll()`). Keep new features modular and follow the existing pattern: small initializer + helper functions, DOMContentLoaded bootstrapping.

- **Debugging & logs:** `app.js` contains many `console.log()` calls used for runtime debugging. When changing behavior, update or add logging to help manual verification in the browser console.

- **Accessibility & semantics:** Navigation uses anchor links to `section` ids. Preserve these anchor targets and header offset logic in `initSmoothScroll()` (header offset ~80px). Maintain ARIA attributes on interactive controls where present (e.g. `aria-expanded`, `aria-label`).

- **Forms & leads:** The contact form depends on specific field names and hidden inputs for hosting integration. If you change form submission behavior, ensure serverless-hosting compatibility or document the new flow.

- **Performance & images:** Images are referenced directly in `assets/img/`. Use `loading="lazy"` where appropriate (already used in many images). Avoid changing inline image sizes without checking layout in multiple viewport widths.

- **Testing & verification workflow (manual):**
  - Open `index.html` in the browser (Chrome/Edge) from the project folder.
  - Use DevTools -> Console to view logs from `app.js` and to confirm `init*()` functions run.
  - Test mobile menu and theme toggle at narrow viewport widths and by toggling `data-theme`.
  - Submit contact form to confirm validation logic runs (the code currently opens mail client via `mailto:`).

- **When editing HTML/CSS/JS:**
  - Keep changes small and local; commit logical units (one feature or fix per commit).
  - Preserve IDs and data attributes used by `app.js` and `styles.css` unless you update both files and verify in-browser.
  - Update textual content in Spanish consistently (site language is `lang="es"`).

- **Files to inspect for patterns or examples:**
  - [index.html](index.html) — primary layout, sections, contact form, navigation anchors.
  - [app.js](app.js) — client logic, initializers, validation, and UX behaviors.
  - [styles.css](styles.css) — design tokens, responsive rules, dark mode variables.

Notes:
- There is no package.json or build pipeline in this repo. If a change requires a bundler or preprocess step, document the reason and provide explicit instructions for adding the toolchain.
- I did not find any existing AI agent instruction files in the repo — this file is the initial guidance.

If any section is unclear or you want more examples (e.g., which lines in `app.js` reference a particular selector), tell me which area to expand and I'll iterate.
