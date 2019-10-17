const debug = require("debug")("app:responses");

function sendBadResponse({
  response,
  message,
  error = "",
  statusCode = 500,
  data = []
}) {
  response.status(statusCode).json({
    message,
    data,
    statusCode,
    error
  });
}
function sendGoodResponse({
  response,
  message,
  statusCode = 200,
  data = []
}) {
  response.status(statusCode).json({message, data, statusCode});
}
module.exports = {sendBadResponse, sendGoodResponse};
