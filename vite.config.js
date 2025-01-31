import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Quizapp/',  // Change this to match your repo name
  plugins: [react()],
});
