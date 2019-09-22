//libs
const express = require("express");
const bodyParser = require("body-parser");
//config
const config = require("./config");
//initialize app
const app = express();
//routes
const authRoute = require("./routes/auth");
//refreshtokens list
const refreshTokens = [];

//middlewares
app.use(bodyParser.json());

//router-middlewares
app.use("/api", authRoute);

app.get("/", (req, res, next) => {
  res.json({message: "Hello there"});
});

//initialize server
app.listen(config.server.port, () => {
  console.log("server initialized on port", config.server.port);
});
