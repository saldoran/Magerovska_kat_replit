import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      writeBundle() {
        // Copy index.html to 404.html for GitHub Pages SPA routing
        const indexPath = path.resolve(import.meta.dirname, "dist", "index.html");
        const notFoundPath = path.resolve(import.meta.dirname, "dist", "404.html");
        fs.copyFileSync(indexPath, notFoundPath);
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  base: "./",
});