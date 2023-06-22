import { defineConfig,loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: process.env["VITE_BASE"] ?? "/"
});

