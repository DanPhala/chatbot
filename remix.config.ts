/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  server: "./app/server/index.js", // or "./app/server/index.ts" if using TypeScript and build outputs JS here
  ignoredRouteFiles: ["**/.*"],
};