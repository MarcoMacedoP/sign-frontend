//libs
const express = require("express");
const axios = require("axios");
//init
const router = express.Router();
const config = require("../config");
const {route: apiRoute} = config.api;
//utils
const {
  sendBadResponse,
  sendGoodResponse
} = require("../utils/responses");
//routes
router.post("/login/", async (req, res) => {
  try {
    const encodedUser = encodeUserData(req.body);
    const {data, statusCode} = await axios(
      `${apiRoute}/auth/login/`,
      {
        method: "post",
        headers: {
          Authorization: `Basic ${encodedUser}`
        }
      }
    );
    sendGoodResponse({
      response: res,
      message: "User loged successfully",
      statusCode,
      data
    });
  } catch (error) {
    sendBadResponse({response: res, message: "Not authorized"});
  }
});

router.post("/signup/", async (req, res) => {
  try {
    const user = await axios(`${apiRoute}/auth/signup/`, {
      method: "post",
      data: req.body
    });
    console.log(user);
    sendGoodResponse({
      response: res,
      message: "User signed successfully"
    });
  } catch (error) {
    console.log(error);
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
