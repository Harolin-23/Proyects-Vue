import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Proyects-Vue/webRiwi/',
  build: {
    outDir: 'dist',
  }
  
})
