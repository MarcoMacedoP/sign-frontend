const BASE_URL = "http://localhost:8080/api";

/**Makes a http request to usign fetch
 * @param endpoint the api endpoint to be called,
 * 						BASE_URL=http://localhost:8080/api
 *@param options the options to be used like method: 'post'
 */
export function callApi(endpoint, options = {}) {
  const url = BASE_URL + endpoint;
  return fetch(url, {
    ...options,
    credentials: "include",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers
    }
  })
    .then(response => response.json())
    .then(
      ({data, statusCode}) => statusCodeIsValid(statusCode) && data
    );
}
export function callApiWithFormData(endpoint, options) {
  return callApi(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      Accept: "application/json"
    }
  });
}

/**This function validate the server response,
 *  check the status code and throw friendly messages
 * @param { Object} statusCode the http number code
 */
export function statusCodeIsValid(statusCode) {
  const UNAUTHTORIZED_ERROR = 401;
  const SERVER_CODE_ERROR = 500;
  const BAD_REQUEST = 400;

  console.log("checking statusCode: ", statusCode);
  if (!statusCode) {
    throw "No sé especifico un código en la respuesta.";
  } else if (typeof statusCode !== "number") {
    throw "Él código de la respuesta no es un error";
  } else {
    switch (statusCode) {
      case SERVER_CODE_ERROR:
        throw "Parece que tenemos un problema interno, intentalo más tarde 🙊";
      case UNAUTHTORIZED_ERROR:
        throw "Parece qué tu sesión ha expirado 😅";
      case BAD_REQUEST:
        throw "Uno de los campos introducidos no es válido  🤐";
      default:
        return true;
    }
  }
}
