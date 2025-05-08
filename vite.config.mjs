import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";

import index_locals from "./src/index.json";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  root: "src",
  plugins: [vitePugPlugin({ pugLocals: index_locals })],
});
