/** @type {import('next').NextConfig} */
const nextConfig = {
  // Local previews are shared over Tailscale, so Next's dev client must accept
  // the tailnet hostname instead of treating its HMR requests as cross-origin.
  allowedDevOrigins: ['lunamor.husky-chickadee.ts.net'],
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
