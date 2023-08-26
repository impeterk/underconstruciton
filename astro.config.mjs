import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://peterkudelas.eu",
  integrations: [tailwind(), solidJs(), sitemap()],
  experimental: {
    assets: true,
    viewTransitions: true
  },
  output: 'server',
  adapter: vercel()
});
