import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), macrosPlugin()],
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: 'import { jsx } from "@emotion/react"',
  },
  define: {
    'process.env': {},
  },
})
