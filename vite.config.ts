import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://election-sw.deno.dev
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'https://fast-bat-64.deno.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
    },
  },
})
