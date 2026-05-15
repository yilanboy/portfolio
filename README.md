# Portfolio

Personal portfolio site introducing myself and showcasing projects I've worked on.

## Tech stack

- [SvelteKit](https://kit.svelte.dev/) v2 with [Svelte 5](https://svelte.dev/) (runes)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS](https://tailwindcss.com/) v4 (via `@tailwindcss/vite`)
- [Vite](https://vitejs.dev/) build tooling
- [`@sveltejs/adapter-cloudflare`](https://kit.svelte.dev/docs/adapter-cloudflare) for deployment

## Prerequisites

- [Node.js](https://nodejs.org/en) `24.15.0` (see [`.node-version`](./.node-version))
- [npm](https://www.npmjs.com/)

## Getting started

```bash
npm install
npm run dev -- --open
```

The dev server starts on Vite's default port. Visiting `/` redirects to `/zh-tw`.

## Scripts

| Script                | Description                              |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Start the Vite dev server                |
| `npm run build`       | Build for production                     |
| `npm run preview`     | Preview the production build             |
| `npm run check`       | Run `svelte-kit sync` and `svelte-check` |
| `npm run check:watch` | Same as `check`, in watch mode           |
| `npm run format`      | Format files with Prettier               |
| `npm run lint`        | Prettier check + ESLint                  |
| `npm run test:unit`   | Run Vitest (watch)                       |
| `npm run test:e2e`    | Run Playwright E2E tests                 |
| `npm run test`        | Run unit tests once, then E2E tests      |

## Project structure

```
src/
├── routes/
│   ├── +layout.svelte
│   ├── +page.server.ts        # root: redirects, locale + theme detection,
│   │                          # fetches posts from docfunc.com/api/posts
│   └── [locale]/              # all localized pages
├── lang/                      # statically-typed translation objects
│   ├── en/                    # English translations
│   ├── ja/                    # Japanese translations
│   ├── zh-CN/                 # Simplified Chinese translations
│   ├── zh-TW/                 # Traditional Chinese translations (default)
│   └── type/                  # per-section type definitions
├── lib/                       # shared components and utilities
├── app.css                    # Tailwind entry + theme tokens
└── app.html
e2e/                           # Playwright specs
```

The path alias `$lang` resolves to `src/lang`.

Section anchors used by the page: `#introduction`, `#project`, `#experience`, `#skill`, `#about`.

## Internationalization

Four locales are supported, with translations as statically-typed TypeScript objects (no runtime i18n library):

| Locale                        | Path     |
| ----------------------------- | -------- |
| Traditional Chinese (default) | `/zh-tw` |
| Simplified Chinese            | `/zh-cn` |
| English                       | `/en`    |
| Japanese                      | `/ja`    |

The root route `/` redirects to `/zh-tw`. Components receive `locale` as a prop and derive translations via `$derived(translations[locale].section)`.

## Theming

Dark mode is cookie-based, applied via the `data-theme` attribute on `<html>` (no reliance on `prefers-color-scheme`). The Tailwind dark variant is configured in `src/app.css` as:

```css
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

## Testing

Two Vitest project environments are configured in `vite.config.ts`:

| Environment | Matcher                                                  | Runner                                   |
| ----------- | -------------------------------------------------------- | ---------------------------------------- |
| Client      | `src/**/*.svelte.{test,spec}.{js,ts}`                    | Browser via `@vitest/browser-playwright` |
| Server      | `src/**/*.{test,spec}.{js,ts}` (excludes `.svelte.test`) | Node                                     |

`expect: { requireAssertions: true }` is enforced — every test must contain at least one assertion.

Playwright E2E specs live in `e2e/` and run against the built preview server on port `4173`.

## Code style

Tabs for indentation, single quotes, no trailing commas, 100-character print width. Prettier is configured with `prettier-plugin-svelte` and `prettier-plugin-tailwindcss`. ESLint uses the flat config format with `typescript-eslint` and `eslint-plugin-svelte`.

## Deployment

Built with `@sveltejs/adapter-cloudflare` for deployment to Cloudflare Page.
