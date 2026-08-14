// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://jamestaylor.dev',
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()]
    },
    server: {
        host: true,
        port: 4321,
        allowedHosts: ['jamestaylor.dev'],
    }
});