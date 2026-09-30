/** @type {import('next').NextConfig} */
const nextConfig = {
  // Local previews are shared over Tailscale, so Next's dev client must accept
  // the tailnet hostname instead of treating its HMR requests as cross-origin.
  allowedDevOrigins: ['lunamor.husky-chickadee.ts.net'],
  async rewrites() {
    const rybbitHost = process.env.NEXT_PUBLIC_RYBBIT_HOST || 'https://stats.zkg.io';

    return [
      // Tracking scripts
      {
        source: '/analytics/script.js',
        destination: `${rybbitHost}/api/script.js`,
      },
      {
        source: '/analytics/replay.js',
        destination: `${rybbitHost}/api/replay.js`,
      },
      {
        source: '/analytics/metrics.js',
        destination: `${rybbitHost}/api/metrics.js`,
      },
      // Tracking endpoints
      {
        source: '/analytics/track',
        destination: `${rybbitHost}/api/track`,
      },
      {
        source: '/analytics/identify',
        destination: `${rybbitHost}/api/identify`,
      },
      {
        source: '/analytics/session-replay/record/:siteId',
        destination: `${rybbitHost}/api/session-replay/record/:siteId`,
      },
      {
        source: '/analytics/site/tracking-config/:siteId',
        destination: `${rybbitHost}/api/site/tracking-config/:siteId`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
