/** @type {import('next').NextConfig} */



// import env library from 'dotenv'

// load env variables from .env file
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    images:{
        domains: ['res.cloudinary.com'],

    }
};

module.exports = nextConfig;
