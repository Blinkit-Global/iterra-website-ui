import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Dominio definitivo pendiente: PUBLIC_SITE_URL se define por entorno
// (Vercel / .env) y este fallback solo evita builds rotos mientras tanto.
const site = process.env.PUBLIC_SITE_URL ?? 'https://iterra-website.vercel.app';

export default defineConfig({
  site,
  adapter: vercel(),
  integrations: [
    sitemap(),
    partytown({
      config: {
        // GA4 necesita que Partytown reenvíe estas llamadas al worker
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
