//libs
const express = require("express");
const axios = require("axios");
const debug = require("debug")("app:routes:auth");
//init
const router = express.Router();
const config = require("../config");
const {route: apiRoute} = config.api;
//utils
const {
  sendBadResponse,
  sendGoodResponse
} = require("../utils/responses");
const {addTokenToCookies} = require("../utils/addTokenToCookies");
//routes
router.post("/login/", async (req, res) => {
  try {
    debug(req.body);
    const encodedUser = encodeUserData(req.body);
    const {data: body, statusCode} = await axios(
      `${apiRoute}/auth/login/`,
      {
        method: "post",
        headers: {
          Authorization: `Basic ${encodedUser}`
        }
      }
    );
    const {data} = body;
    addTokenToCookies(data.token, res);
    sendGoodResponse({
      response: res,
      message: body.message,
      statusCode
    });
  } catch (error) {
    debug(error.response.status);
    sendBadResponse({
      response: res,
      message: error.message,
      statusCode: error.response.status,
      error
    });
  }
});

router.post("/signup/", async (req, res) => {
  try {
    const {data: body, statusCode} = await axios(
      `${apiRoute}/auth/signup/`,
      {
        method: "post",
        data: req.body
      }
    );
    const {data} = body;
    addTokenToCookies(data.token, res);
    sendGoodResponse({
      response: res,
      message: body.message,
      statusCode
    });
  } catch (error) {
    sendBadResponse({response: res, message: "Not authorized"});
  }
});

/**This function encode the user data to put it into Auth header */
function encodeUserData(userData) {
  const {user, password} = userData;
  return Buffer.from(user + ":" + password).toString("base64");
}

//exports
module.exports = router;