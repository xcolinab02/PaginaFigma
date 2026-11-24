import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dentro de Figma Make se permite únicamente el host público de la vista previa.
const figmaHost = process.env.FIGMA_PUBLIC_URL
  ? new URL(/^https?:\/\//.test(process.env.FIGMA_PUBLIC_URL) ? process.env.FIGMA_PUBLIC_URL : `https://${process.env.FIGMA_PUBLIC_URL}`).hostname
  : null

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: figmaHost ? [figmaHost] : undefined,
  },
})
