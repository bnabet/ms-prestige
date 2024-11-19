import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/ms-prestige/" : "/",
  server: {
    proxy:
      mode === "development"
        ? {
            "/api": {
              target: "http://localhost:3000",
              changeOrigin: true,
              secure: false,
            },
          }
        : undefined,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
}));
