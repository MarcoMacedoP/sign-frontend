module.exports = {
  dev: process.env.NODE_ENV !== "production",
  server: {
    port: process.env.SERVER_PORT
  },
  api: {
    host: process.env.API_HOST,
    route: process.env.API_ROUTE
  },
  cookie: {
    secret: process.env.COOKIE_SECRET
  },
  session: {
    secret: process.env.SESSION_SECRET
  },
  db: {
    mongoURI: process.env.MONGO_URI,
    mongoDB: process.env.MONGO_DB_NAME
  }
};
