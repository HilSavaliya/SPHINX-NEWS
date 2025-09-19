import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect if running on GitHub Pages
const isGithubPages = process.env.GITHUB_ACTIONS || false

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? '/SPHINX-NEWS/' : '/', 
})
