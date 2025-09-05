import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying under a subpath (e.g., GitHub Pages repo), set base:
// export default defineConfig({
//   base: '/your-repo-name/',
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
})


