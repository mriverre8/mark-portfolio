// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: 'https://mark-portfolio-virid.vercel.app',

    redirects: {
        '/': '/es/',
    },

    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en', 'ca'],
        routing: { prefixDefaultLocale: true },
    },

    vite: {
        plugins: [tailwindcss()],
    },

    adapter: vercel(),
});
