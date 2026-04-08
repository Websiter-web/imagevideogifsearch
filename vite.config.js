import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // vite locale not auto reloading problem fix
  server:{
    watch: {
      usePolling: true,
    }
  },
  // problem fixed
  plugins: [react(),tailwindcss()],
})
