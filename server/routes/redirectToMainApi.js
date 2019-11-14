const router = require("express").Router();
const {api} = require("../config");
const debug = require("debug")("app:routes:redirectToMainApi");
const axios = require("axios");
const {sendGoodResponse} = require("../utils/responses");

router.all("*", (req, res, next) => {
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
      debug(err);
      next(err);
    });
});

module.exports = router;
