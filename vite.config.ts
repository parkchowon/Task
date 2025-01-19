import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "parkchowon",
    project: "javascript-react"
  })],

  define: {
    "process.env": {},
  },

  build: {
    sourcemap: true
  }
});