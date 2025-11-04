import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Interactive-Product-Filter-Display/', // required for GitHub Project Pages
})
