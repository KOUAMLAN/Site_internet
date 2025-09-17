import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/enseignement-pour-tous/', // Chemin relatif pour GitHub Pages
  plugins: [react()]
})
