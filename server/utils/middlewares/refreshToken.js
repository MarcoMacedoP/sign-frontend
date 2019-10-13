const jwt = require("jsonwebtoken");
const {api} = require("../../config");
const debug = require("debug")("app:middlewares:refreshToken");
const axios = require("axios");
//utils
const {addTokenToCookies} = require("../addTokenToCookies");

async function refreshToken(req, res, next) {
  const {token} = req.cookies;
  debug("orignal token", token);

  const {exp} = jwt.decode(token);
  const jwtExpirationDate = exp * 1000;
  const currentDate = Date.now();

  if (currentDate >= jwtExpirationDate) {
    //redirect to /token to obtain a new token
    debug(res.location);
    res.redirect(307, "/api/token/");
  } else {
    next();
  }
}
module.exports = refreshToken;
