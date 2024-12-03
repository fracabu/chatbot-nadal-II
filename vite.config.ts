import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Cambia il base path per percorsi relativi
  build: {
    outDir: 'dist',
  },
});
