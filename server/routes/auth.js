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
    const {accessToken, refreshToken} = data.token;
    req.session.refreshToken = refreshToken;
    debug(req.session.refreshToken);
    req.session.save(err => debug("err", err));
    addTokenToCookies(accessToken, res);
    sendGoodResponse({
      response: res,
      message: body.message,
      data: {
        user: data.user,
        userNotifications: data.userNotifications
      },
      statusCode
    });
  } catch (error) {
    sendBadResponse({
      response: res,
      message: error.message,
      statusCode: error.response.status || 500,
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
    debug(response);
    const {accessToken, refreshToken} = response.data.token;
    req.session.refreshToken = refreshToken;
    req.session.save(err => debug(err));

    debug(req.session.refreshToken);
    addTokenToCookies(accessToken, res);

    sendGoodResponse({
      response: res,
      message: response.message,
      statusCode: response.statusCode,
      data: {
        user: response.data.user,
        userNotifications: response.data.userNotifications
      }
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
router.get("/logout/", async (req, res) => {
  try {
    //remove refreshToken from external list.
    await axios(`${apiRoute}/auth/token/`, {
      method: "delete",
      data: {refreshToken: req.session.refreshToken}
    });
  } catch (error) {
    debug(error);
    sendBadResponse({
      response: res,
      error,
      message: "Error cerrando sesión"
    });
  } finally {
    //delete all session elements
    req.session.destroy(error => console.log(error));
    res.clearCookie("token");
    res.clearCookie("connect.sid");
    //make response
    sendGoodResponse({
      response: res,
      message: "Session eliminada",
      statusCode: 401
    });
  }
});
/**This function encode the user data to put it into Auth header */
function encodeUserData(userData) {
  const {email, password} = userData;
  return Buffer.from(email + ":" + password).toString("base64");
}

//exports
module.exports = router;
