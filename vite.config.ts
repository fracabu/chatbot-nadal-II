import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Cambiato da './' a '/' per Vercel
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  },
  publicDir: 'public',
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  }
});