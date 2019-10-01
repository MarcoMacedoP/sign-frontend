const BASE_URL = "http://localhost:8080/api";

/**Makes a http request to usign fetch
 * @param endpoint the api endpoint to be called,
 * 						BASE_URL=http://localhost:8080/api
 *@param options the options to be used like method: 'post'
 */
export async function callApi(endpoint, options = {}) {
  options.headers = {
    ...options.headers,
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  if (data.statusCode >= 200 && data.statusCode < 300) {
    console.log("Buena respuesta");
    return data;
  } else {
    console.log("malo");
    throw data;
  }
}
