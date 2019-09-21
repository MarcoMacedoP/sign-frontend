//libs
const express = require("express");
const bodyParser = require("body-parser");
//config
const config = require("./config");
//initialize app
const app = express();

//middlewares
app.use(bodyParser.json());

//router-middlewares
app.get("/", (req, res, next) => {
  res.json({message: "Hello there"});
});

//initialize server
app.listen(config.server.port, () => {
  console.log("server initialized on port", config.server.port);
});
