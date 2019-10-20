const BASE_URL = "http://localhost:8080/api";

/**Makes a http request to usign fetch
 * @param endpoint the api endpoint to be called,
 * 						BASE_URL=http://localhost:8080/api
 *@param options the options to be used like method: 'post'
 */
export function callApi(endpoint, options = {}, isJSON = true) {
  options = isJSON
    ? {
        ...options,
        credentials: "include",
        redirect: "follow",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...options.headers
        }
      }
    : {
        ...options,
        credentials: "include",
        redirect: "follow",
        headers: {
          ...options.headers,
          Accept: "application/json"
        }
      };

  const url = BASE_URL + endpoint;
  return fetch(url, options)
    .then(response => response.json())
    .then(({data, statusCode, message}) => ({
      data,
      statusCode,
      message
    }));
}
/**This function validate the server response,
 *  check the status code and throw friendly messages
 * @param { Object} statusCode the http number code
 */
export function validateStatusCode(statusCode) {
  const UNAUTHTORIZED_ERROR = 401;
  const SERVER_CODE_ERROR = 500;

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

      default:
        return true;
    }
  }
}
