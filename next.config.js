/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/stumble",
        destination: "https://oddmenu.com/p/the-stumble",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
