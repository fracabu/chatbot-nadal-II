import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Usa percorsi relativi per il deploy
  build: {
    outDir: 'dist', // Directory di output
  },
  publicDir: 'public', // Directory per i file statici
});
