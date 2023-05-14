import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()]
});