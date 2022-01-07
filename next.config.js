/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      '*.midowe.co.mz',
      'midowe-backend-prd-data.s3.af-south-1.amazonaws.com',
      'picsum.photos',
    ],
  },
};
