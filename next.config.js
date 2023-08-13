/** @type {import('next').NextConfig} */

const API_KEYS = process.env.API_KEYS;

const nextConfig = {
  reactStrictMode: true,

  // 새로운 경로로 reroute, URL 변경사항이 보임
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },

  // 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보임
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEYS}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEYS}`,
      },
    ];
  },
};

module.exports = nextConfig;
