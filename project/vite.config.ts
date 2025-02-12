import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Отключает source maps в продакшене
    brotliSize: false, // Уменьшает размер сборки
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      input: {
        main: 'index.html',
        notfound: 'public/404.html' // Добавляем 404.html в билд
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true, // Убирает console.log в продакшене
        drop_debugger: true
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
});