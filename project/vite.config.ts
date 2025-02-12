import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Если ранее здесь была опция brotliSize, удалите её:
    // brotliSize: false, // <-- удалите или закомментируйте эту строку
  }
})
