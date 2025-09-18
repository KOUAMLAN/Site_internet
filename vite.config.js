import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Racine car domaine personnalisé
  plugins: [react()]
});