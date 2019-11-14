function addTokenToCookies(token, response) {
  addCookie("token", token, response);
}
function addCookie(name, value, response) {
  response.cookie(name, value, {
    httpOnly: false,
    secure: false,
    maxAge: 2592000
  });
}

module.exports = { addTokenToCookies, addCookie };
