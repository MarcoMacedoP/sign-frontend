const BASE_URL = "http://localhost:3001";

export async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type" : "application/json",
    Accept         : "application/json"
  };
  //Marco del futuro, aquí deberias de crear una
  //función que obtenga el Token (¿guardado en caché?),
  //es importante hacer esto en cada petición, para actulizar el token (creo).
  //Ten bonito día y dile a Gaby que la amas.
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
