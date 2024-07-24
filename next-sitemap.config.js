// next-sitemap.config.js
module.exports = {
  siteUrl: "https://cybercraftlabs.org",
  generateRobotsTxt: true, // (optional) generate a robots.txt file
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
