import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "src/main.ts",
        "chesscom-content-script": "src/scripts/chesscom-content-script.ts",
      },
      output: {
        entryFileNames: `scripts/[name].js`,
        assetFileNames: `assets/[name].js`,
      },
    },
    outDir: "dist",
  },
  plugins: [vue()],
});
