/** @type {import('next').NextConfig} */
const nextConfig = {
    //Next.js can statically type links to prevent typos and other errors when using next/link, improving type safety when navigating between pages.
    //https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
    experimental: {
      typedRoutes: true,
    },
};

module.exports = nextConfig;
