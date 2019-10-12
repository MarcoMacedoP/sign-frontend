module.exports = {
  dev: process.env.NODE_ENV !== "production",
  server: {
    port: process.env.SERVER_PORT
  },
  api: {
    route: process.env.API_ROUTE
  },
  cookie: {
    secret: process.env.COOKIE_SECRET
  },
  session: {
    secret: process.env.SESSION_SECRET
  }
};
