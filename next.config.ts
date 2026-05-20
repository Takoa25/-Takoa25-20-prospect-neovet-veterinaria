import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clarity.ms https://www.clarity.ms https://*.clarity.ms https://c.bing.com https://*.bing.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://www.google.com https://www.google.com.br https://maps.gstatic.com https://*.googleusercontent.com https://clarity.ms https://*.clarity.ms https://c.bing.com https://*.bing.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google.com https://www.google.com.br https://clarity.ms https://www.clarity.ms https://*.clarity.ms https://c.bing.com https://*.bing.com",
      "frame-src https://www.google.com",
      "form-action 'self'",
      "base-uri 'self'",
      "frame-ancestors 'self'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
