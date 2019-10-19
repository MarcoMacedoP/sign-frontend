export function getCookieByName(name) {
  var match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return match ? true : false;
}
