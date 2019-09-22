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
router.post("/login/", async (req, res, next) => {
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
    sendGoodResponse(res, "User loged successfully", 200, data);
  } catch (error) {
    sendBadResponse(res, "Not authorized");
  }
});
//functions
/**This function encode the user data to put it into Auth header */
function encodeUserData(userData) {
  const {user, password} = userData;
  return Buffer.from(user + ":" + password).toString("base64");
}
//exports
module.exports = router;
