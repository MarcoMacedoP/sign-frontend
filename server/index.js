//libs
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
//own middlewares
const refreshToken = require("./utils/middlewares/refreshToken");
//config
const config = require("./config");
const sessionOptions = {
  resave: false,
  saveUninitialized: false,
  secret: config.session.secret,
  cookie: {maxAge: 100000}
};
//initialize app
const app = express();
//routes
const authRoute = require("./routes/auth");
const tokenRoute = require("./routes/token");
const usersRoute = require("./routes/users");

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(config.cookie.secret));
app.use(session(sessionOptions));

//router-middlewares
app.use("/api", authRoute);
app.use("/api/token", tokenRoute);
app.use("/api/users", refreshToken, usersRoute);

//initialize server
app.listen(config.server.port, () => {
  console.log("server initialized on port", config.server.port);
});
