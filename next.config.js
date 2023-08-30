/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.myschoolsports.us/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
