const config = require("../config");

module.exports = {
  addTokenToCookies(token, response) {
    response.cookie("token", token, {
      httpOnly: false,
      secure: false,
      maxAge: 2592000
    });
  }
};
