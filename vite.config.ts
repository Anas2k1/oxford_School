// For Vercel deployment, use this config without Cloudflare
// For Cloudflare Workers, use the full @lovable.dev/vite-tanstack-config
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    build: {
      target: "es2020",
    },
  },
});
