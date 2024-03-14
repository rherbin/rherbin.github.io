/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://raw.githubusercontent.com/",
        port: "",
        pathname: "/rherbin/**",
      },
    ],
  },
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
