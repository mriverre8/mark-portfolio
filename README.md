# My Portfolio

This is the repository for my Portfolio. It is built using Astro, a JavaScript web framework optimized for building fast, content-driven websites.

Work experience, projects and stack are defined in their own JSON file on `src/data/` directory.

## 🌍 Translations

The site is served under a language prefix (`/es/`, `/en/`, `/ca/`) from a single set of dynamic routes in `src/pages/[lang]/`.

- **UI strings** live in `src/i18n/ui.ts`, one flat dictionary per language.
- **Content** lives in `src/data/*.json`. Each entry is stored once; only the fields that actually differ per language are objects keyed by locale:

    ```json
    {
        "name": "Foslog",
        "stack": ["React", "Next.js"],
        "description": { "es": "…", "en": "…", "ca": "…" }
    }
    ```

    `src/data/content.ts` resolves those into plain objects for the current language, falling back to the default one when a translation is missing.

To add a language: add its key to `languages`, `ogLocales` and `ui` in `src/i18n/ui.ts`, add it to `locales` in `astro.config.mjs`, and add the new locale key to each translated field in `src/data/*.json`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
