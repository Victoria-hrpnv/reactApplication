import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://victoria-hrpnv.github.io/reactApplication/',
  plugins: [react()],
  base: '/reactApplication/'
})
