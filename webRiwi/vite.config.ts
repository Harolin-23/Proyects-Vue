import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: 'https://Harolin-23.github.io/Proyects-Vue/',
  build: {
    outDir: 'dist',
  }
})
