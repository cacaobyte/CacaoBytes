import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare"; 

export default defineConfig({
  adapter: cloudflare(), 
  vite: {
    plugins: [tailwind()],
  },
  integrations: [react()],
});
