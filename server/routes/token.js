const express = require("express");
const router = express.Router();
const {api} = require("../config");
const debug = require("debug")("app:routes:token");
const axios = require("axios");

const {addTokenToCookies} = require("../utils/addTokenToCookies");

router.all("/", async (req, res, next) => {
  try {
    const {lastUrl} = req.query;
    const sessionId = req.session.id;
    debug(sessionId);
    debug("url:", lastUrl);
    const response = await axios(`${api.route}/auth/token/`, {
      method: "post",
      data: {
        refreshToken: req.session.refreshToken
      }
    });
    const {data} = response.data;
    // debug(data);
    addTokenToCookies(data.accessToken, res);
    res.redirect(307, lastUrl);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
