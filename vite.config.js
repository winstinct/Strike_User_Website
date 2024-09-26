import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows access from any IP  true, // Exposes the server to external IPs
    port: 3000, // Replace with the desired port
  },
})
