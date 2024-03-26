import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Load environment variables from Laravel .env file
dotenv.config({ path: '../.env' });
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  'process.env': {
    GOOGLE_MAPS_API_KEY: JSON.stringify(process.env.VITE_MAPBOX_KEY)
  }
})
