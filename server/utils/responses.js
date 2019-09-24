function sendBadResponse({
  response,
  message,
  statusCode = 500,
  data = []
}) {
  response.status(statusCode).json({message, data, statusCode});
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
