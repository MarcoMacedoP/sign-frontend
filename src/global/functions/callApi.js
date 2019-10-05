const BASE_URL = "http://localhost:8080/api";

/**Makes a http request to usign fetch
 * @param endpoint the api endpoint to be called,
 * 						BASE_URL=http://localhost:8080/api
 *@param options the options to be used like method: 'post'
 */
export function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers
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
