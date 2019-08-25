/*
    Function for obtainig the user token. 

*/

export function getToken() {
  const token = localStorage.getItem("user");
  //Decode the token and return it.
  if (token) {
    return token;
  } else {
    return false;
  }
}
