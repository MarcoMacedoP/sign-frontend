const express = require("express");
const router = express.Router();
const {api} = require("../config");
const debug = require("debug")("app:routes:refreshToken");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const {addTokenToCookies} = require("../utils/addTokenToCookies");

router.all("/", async (req, res, next) => {
  try {
    const {token} = req.cookies;
    debug("orignal token", token);
    debug("actualizando token...");
    debug(req.session.refreshToken);
    const response = await axios(`${api.route}/auth/token/`, {
      method: "post",
      data: {
        refreshToken: req.session.refreshToken
      }
    });
    const {data} = response.data;
    debug(data);
    addTokenToCookies(data.accessToken, res);
    res.redirect(307, "back");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
