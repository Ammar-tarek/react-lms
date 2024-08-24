import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@vime/core": "/node_modules/@vime/core",
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress warnings related to annotations that Rollup cannot interpret
        if (
          warning.message.includes("annotation that Rollup cannot interpret")
        ) {
          return;
        }
        // Let other warnings through
        warn(warning);
      },
    },
  },
});
