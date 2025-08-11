import withPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';

export default withPWA({
  dest: 'public',
  disable: !isProd,
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    { urlPattern: /^https:\/\/\w+\.supabase\.co\/.*/, handler: 'NetworkFirst' },
    { urlPattern: /\/_next\//, handler: 'StaleWhileRevalidate' },
    { urlPattern: /\.(?:png|jpg|jpeg|svg|webp|ico)$/i, handler: 'CacheFirst' }
  ],
  workboxOptions: { clientsClaim: true }
})({
  reactStrictMode: true,
  experimental: { serverActions: { allowedOrigins: ['*'] } }
});
