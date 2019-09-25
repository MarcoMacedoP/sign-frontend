//libs
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//config
const config = require("./config");
//initialize app
const app = express();
//routes
const authRoute = require("./routes/auth");
const tokenRoute = require("./routes/token");
//refreshtokens list
global.refreshTokens = [];

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser(config.cookie.secret));

//router-middlewares
app.use("/api", authRoute);
app.use("/api/token", tokenRoute);

//initialize server
app.listen(config.server.port, () => {
  console.log("server initialized on port", config.server.port);
});
