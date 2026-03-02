/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env:{
    secret: 'f722820f40920467ada1c915bc260c321adce0142fe96b12e293addf9694faea',
    basePath: '/',
     NEXT_URL:"http://34.220.205.154:3000/",
NEXTAUTH_URL:"http://34.220.205.154:3000/",
EMPLOYEE_SERVER_URL:"http://34.220.205.154:3000",
INVENTORY_SERVER_URL:"http://34.220.205.154:3001",
AUTH_SERVER_URL:"http://34.220.205.154:3002",
    callbackUrl:"http://34.220.205.154:3000/api/auth/callback"
    
  },
  async rewrites() {
    return [
      // Anything your frontend calls under /api/authsvc/* will be proxied to 3002
      {
        source: "/api/employee/:path*",
        destination: "http://127.0.0.1:3002/:path*",
      },
      // If you have inventory on 3001, proxy it too
    ];
  },
}


module.exports = nextConfig
