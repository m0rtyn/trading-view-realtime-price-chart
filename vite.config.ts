/* eslint-disable max-lines */
// import MillionLint from '@million/lint'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { checker } from 'vite-plugin-checker'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import mkcert from 'vite-plugin-mkcert'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

/// <reference types="vitest" />
export default defineConfig(({ mode }) => {
  const plugins = [
    tsconfigPaths(),
    react(),
    svgr(),
    checker({ typescript: true }),
    ...getOptionalPlugins(mode)
  ]

  return {
    server,
    build,
    css,
    test,
    plugins
  }
})

const server = {
  watch: {
    usePolling: true
  },
  host: true,
  strictPort: true,
  port: 3000,
  https: true
}

const build = {
  target: 'esnext',
  sourcemap: true,
  rollupOptions: {
    output: {
      manualChunks
    }
  }
}

const css = {
  modules: {
    scopeBehaviour: 'local' as const,
    localConvention: 'camelCaseOnly'
  },
  postcss: {
    plugins: [autoprefixer]
  }
}

const test = {
  css: false,
  include: ['src/**/__tests__/*', 'src/features/**/*.(spec|test).ts'],
  globals: true,
  environment: 'jsdom' as const,
  clearMocks: true,
  coverage: {
    provider: 'istanbul' as const,
    enabled: true,
    '100': true,
    reporter: ['text' as const, 'lcov' as const],
    reportsDirectory: 'coverage'
  }
}

// TODO: return and config PWA after release
const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  includeAssets: [
    'favicon.png',
    'robots.txt',
    'apple-touch-icon.png',
    'icons/*.svg',
    'fonts/*.woff2'
  ],
  manifest: {
    theme_color: '#000',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
})

const HEAVY_PACKAGES = [
  // '@radix-ui',
  // '@tanstack',
  '@sentry',
  'lightweight-charts',
  'react-datepicker',
  'date-fns',
  'cropperjs',
  'swiper',
  'floating-ui',
  'popperjs'
]

const devPlugins = [
  eslintPlugin(),
  // visualizer({
  //   filename: './dist/deps.html',
  //   open: true
  // }),
  mkcert()
  /* MillionLint.vite(), */
  /* vitePWA, */
]

const prodPlugins = [
  splitVendorChunkPlugin(),
  ViteImageOptimizer({
    logStats: false
  })
  // NOTE: uncomment to visualize the bundle
  // visualizer({
  //   filename: './dist/deps.html',
  //   open: false
]

function getOptionalPlugins(mode: string) {
  if (mode === 'development') return devPlugins
  if (mode === 'production') return prodPlugins
  return []
}

function manualChunks(id: string) {
  if (isReactRouterDependency(id)) {
    return '@react-router'
  }

  for (const pkg of HEAVY_PACKAGES) {
    if (id.includes(`node_modules/${pkg}`)) {
      return pkg
    }
  }
}

function isReactRouterDependency(id: string) {
  return (
    id.includes('react-router-dom') ||
    id.includes('react-router') ||
    id.includes('@remix-run')
  )
}