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
    debug("good response:");
    debug(data);
    addTokenToCookies(data.token, res);
    sendGoodResponse({
      response: res,
      message: body.message,
      data: {user: data.user},
      statusCode
    });
  } catch (error) {
    debug("error:");
    debug(error);
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
    const {data: response} = await axios(`${apiRoute}/auth/signup/`, {
      method: "post",
      data: req.body
    });
    debug(response.data);
    addTokenToCookies(response.data.token, res);
    sendGoodResponse({
      response: res,
      message: response.message,
      statusCode: response.statusCode,
      data: response.data.user
    });
  } catch (error) {
    debug(error);
    sendBadResponse({
      response: res,
      message:
        "Ups, parece que tenemos un error interno. Intentalo más tarde 😅 ",
      error
    });
  }
});

/**This function encode the user data to put it into Auth header */
function encodeUserData(userData) {
  console.log(userData);
  const {email, password} = userData;
  return Buffer.from(email + ":" + password).toString("base64");
}

//exports
module.exports = router;
