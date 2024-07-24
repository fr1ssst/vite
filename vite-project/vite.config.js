import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
  server: {
    port: '1111',
    strictPort: true,
  },
  preview: {
    port: '9999',
    strictPort: true,
  },
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
}