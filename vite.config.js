import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Site_internet/', // Nom exact du dépôt avec slash final
  plugins: [react()]
})