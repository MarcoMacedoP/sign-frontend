export function getCookieByName(name) {
  var match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return match ? true : false;
}
/**
 * Sets an old date to the cookie, this will made that browser remove the cookie.
 *
 * @param {*} name the name of the cookie to be removed.
 * @param {*} path the path of the cookie (opt)
 */
export function removeCookieByName(name, path = "/") {
  document.cookie = `${name}=; Path=${path}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
/**
 * Removes all the cookies that allow session to be stored
 */
export function removeSessionCookies() {
  removeCookieByName("token");
  removeCookieByName("connect.sid");
}
