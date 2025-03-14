import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  output: "static", 
  vite: {
    plugins: [tailwind()],
  },
  integrations: [react()],
});
