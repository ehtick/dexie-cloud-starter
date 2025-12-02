import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack configuration (opt-in with: npm run dev -- --turbo)
  turbopack: {
    resolveAlias: {
      yjs: path.resolve('node_modules/yjs/dist/yjs.cjs'),
    },
  },
  // Webpack configuration (default)
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.resolve.alias.yjs = path.resolve('node_modules/yjs/dist/yjs.cjs')
    return config
  },
}

export default nextConfig
