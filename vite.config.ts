import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import crx from 'vite-plugin-crx-mv3'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    crx( {manifest: './manifest.json'} ),
  ],
})
