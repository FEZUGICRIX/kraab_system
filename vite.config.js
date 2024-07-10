import { defineConfig } from 'vite';
import alias from '@rollup/plugin-alias';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: '@PRODUCTS',
          replacement: path.resolve(__dirname, 'src/store/products.js'),
        },
        {
          find: '@components',
          replacement: path.resolve(__dirname, 'src/components'),
        },
        {
          find: '@Breadcrumbs',
          replacement: path.resolve(
            __dirname,
            'src/components/Breadcrumbs/Breadcrumbs.jsx'
          ),
        },
      ],
    }),
  ],
});
