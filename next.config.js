/** @type {import('next').NextConfig} */

// import env library from 'dotenv'

// load env variables from .env file
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
 
}

module.exports = nextConfig
