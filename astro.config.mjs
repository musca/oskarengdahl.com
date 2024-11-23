import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  vite: {
    build: {
      minify: true,
    },
  },
});
