import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "src/main.ts",
        popupMain: "src/popupMain.ts",
        "scripts/chesscom-content-script":
          "src/scripts/chesscom-content-script.ts",
      },
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    outDir: "dist",
  },
  plugins: [vue()],
});
