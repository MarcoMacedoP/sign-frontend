const config = require("../config");

module.exports = {
  addTokenToCookies(token, response) {
    response.cookie("token", token, {
      httpOnly: !config.dev,
      secure: !config.dev
    });
  }
};
