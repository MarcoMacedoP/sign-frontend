const router = require("express").Router();
const {api} = require("../config");
const debug = require("debug")("app:routes:redirectToMainApi");
const axios = require("axios");
const {
  sendBadResponse,
  sendGoodResponse
} = require("../utils/responses");

router.all("*", (req, res) => {
  const API_URL = `${api.host}${req.originalUrl}`;
  const options = {
    data: req.body,
    method: req.method,
    headers: {
      ...req.headers,
      withCredentals: true,
      Authorization: `Bearer ${req.cookies.token}`
    }
  };
  const sessionId = req.session.id;
  debug(sessionId);
  axios(API_URL, options)
    .then(({data}) => {
      debug(data);
      sendGoodResponse({
        data: data.data,
        response: res,
        statusCode: data.statusCode,
        message: data.message
      });
    })
    .catch(err => {
      const {error, data, statusCode} = err.response.data;
      sendBadResponse({error, response: res, data, statusCode});
    });
});

module.exports = router;
