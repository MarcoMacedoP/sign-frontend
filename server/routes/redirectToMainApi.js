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
      Authorization: `Bearer ${req.cookies.token}`
    }
  };
  axios(API_URL, options)
    .then(({data}) => sendGoodResponse({...data, response: res}))
    .catch(erorr => sendBadResponse({...erorr}));
});

module.exports = router;
