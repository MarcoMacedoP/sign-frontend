const debug = require("debug")("app:responses");

function sendBadResponse({ response, message, statusCode = 500, data = [] }) {
  debug("message", Object.keys(message));
  response.set("Content-Type", "application/json");
  response.status(statusCode).json({
    message,
    data,
    statusCode
  });
}
function sendGoodResponse({ response, message, statusCode = 200, data = [] }) {
  response.status(statusCode).json({ message, data, statusCode });
}
module.exports = { sendBadResponse, sendGoodResponse };
