const express = require("express");
const router = express.Router();
const config = require("../config");

const {addTokenToCookies} = require("../utils/addTokenToCookies");

router.post("/", async (req, res, next) => {
  try {
    const {token} = req.cookies;
    const refreshToken = global.refreshTokens.find(
      refreshToken => token === refreshToken.token
    );
    const {data: body, statusCode} = await axios(
      `${config.api.route}/auth/token`,
      {
        method: "post",
        data: {token: refreshToken}
      }
    );
    const {data} = body;
    sendGoodResponse({
      response: res,
      message: body.message,
      statusCode,
      data
    });
    addTokenToCookies(data.token, res);
  } catch (error) {
    sendBadResponse({response: res, message: "Not authorized"});
  }
});
module.exports = router;
