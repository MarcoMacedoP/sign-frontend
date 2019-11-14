const debug = require("debug")("app:error");
const { sendBadResponse } = require("../responses");
function logError(error, req, res, next) {
  debug(error);
  next(error.response || error);
}
function wrapError(error, req, res, next) {
  if (!error.status) {
    error.status = 500;
    error.statusText = "Internal server error";
  }
  next(error);
}
function responseError(error, req, res, next) {
  sendBadResponse({
    response: res,
    message: error.statusText,
    statusCode: error.status
  });
}

module.exports = { logError, wrapError, responseError };
