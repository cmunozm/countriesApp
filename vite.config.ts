/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      provider: 'v8',
      exclude: [        
        ...configDefaults.exclude,
        'src/App.tsx',
        'src/main.tsx',
        'src/stories/**',
        'src/pages/homePage/HomePage.tsx',
        '.storybook',
        'src/infrastructure/apiTypes.ts',
        '.eslintrc.cjs',
        'src/vite-env.d.ts',
      ]
    },
  },
})
