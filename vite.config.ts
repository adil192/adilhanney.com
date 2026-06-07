import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8000,
  },
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset({
        panicThreshold: 'all_errors'
      })]
    }),
  ],
});
