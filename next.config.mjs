import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    // This is a workaround for the issue with yjs not being able to resolve
    // the correct path for the yjs module in Next.js.
    // See:
    //  * https://github.com/yjs/yjs/issues/438
    //  * https://github.com/facebook/lexical/issues/3113
    config.resolve.alias.yjs = path.resolve('node_modules/yjs/dist/yjs.cjs')
    return config
  },
}

export default nextConfig
