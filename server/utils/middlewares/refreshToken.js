const jwt = require("jsonwebtoken");
const debug = require("debug")("app:middlewares:refreshToken");
const {sendBadResponse} = require("../responses");
async function refreshToken(req, res, next) {
  req.cookies["connect.sid"] = req.cookies.sessionId;
  const {token} = req.cookies;
  const {refreshToken} = req.session;
  debug("refreshToken : ", refreshToken);
  debug("accessToken", token);
  const sessionId = req.session.id;
  debug("sessionId", sessionId);
  req.session.reload(err => debug("err", err));
  debug(req.headers);
  if (refreshToken) {
    const {exp} = jwt.decode(token);
    const jwtExpirationDate = exp * 1000;
    const currentDate = Date.now();
    if (currentDate >= jwtExpirationDate) {
      //redirect to /token to obtain a new token
      debug("location: ", req.originalUrl);
      res.redirect(307, `/api/token/?lastUrl=${req.originalUrl}`);
    } else next();
  } else {
    sendBadResponse({
      response: res,
      statusCode: 401,
      message: "Not logged"
    });
  }
}
module.exports = refreshToken;
