/** @type {import('next').NextConfig} */

// import env library from 'dotenv'

// load env variables from .env file
const nextConfig = {
  experimental: {
    runtime: "experimental-edge",
  },

  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
