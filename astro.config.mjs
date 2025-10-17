// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en', 'ca'],
        routing: { prefixDefaultLocale: true },
    },

    vite: {
        plugins: [tailwindcss()],
    },

    site: 'https://mark-portfolio-virid.vercel.app/es/',

    adapter: vercel(),
});
