import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // Ruta base para archivos estáticos
  build: {
    outDir: 'dist',
  }
})
