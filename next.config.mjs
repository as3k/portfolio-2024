/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from 'next-plausible'

const nextConfig = () => withPlausibleProxy()({
  // ...your next js config, if any
  // Important! it is mandatory to pass a config object, even if empty
});

export default nextConfig;