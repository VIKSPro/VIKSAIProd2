import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Отключает source maps в продакшене
    chunkSizeWarningLimit: 600, // Оставляем предупреждение о размере чанков
    rollupOptions: {
      input: {
        main: 'index.html'
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
  },
  publicDir: "public", // Загружаем файлы из public
  define: {
    "process.env.NODE_ENV": JSON.stringify("production") // Исправляет ошибки с process.env
  }
});