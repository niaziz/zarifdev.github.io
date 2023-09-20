/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const millionConfig = {
  auto: true,
  // if you're using RSC:
  // auto: { rsc: true },
};

module.exports = nextConfig;
