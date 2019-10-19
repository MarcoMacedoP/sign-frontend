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
const teamsRoute = require("./routes/teams");
const redirectToMainApi = require("./routes/redirectToMainApi");

//middlewares
app.use(
  cors({
    origin: /.*192.168.0.4:3000.*/,
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(config.cookie.secret));
app.use(session(sessionOptions));

//router-middlewares
app.use("/api", authRoute);
app.use("/api/token", tokenRoute);
app.use("/api/users", refreshToken, usersRoute);
app.use("/api/teams", refreshToken, teamsRoute);
app.use("/", refreshToken, redirectToMainApi);
//initialize server
app.listen(config.server.port, () => {
  console.log("server initialized on port", config.server.port);
});
