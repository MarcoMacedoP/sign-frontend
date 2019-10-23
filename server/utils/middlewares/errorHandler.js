const debug = require("debug")("app:error");
const {sendBadResponse} = require("../responses");
function logError(error, req, res, next) {
  debug(error);
  next(error);
}
function wrapError(error, req, res, next) {
  if (!error.statusCode) {
    error.statusCode = 500;
    error.message = "Something goe wrong";
  }
  next(error);
}
function responseError(error, req, res) {
  sendBadResponse({
    response: res,
    statusCode: error.statusCode,
    message: error.message
  });
}
module.exports = {logError, wrapError, responseError};
