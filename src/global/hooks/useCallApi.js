import {useState} from "react";

import {callApi} from "../functions/callApi";

/**Custom hook to call an API.*/
export function useCallApi({endpoint = "", options = {}}) {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: []
  });

  const fetchData = async () => {
    try {
      const response = await callApi(endpoint, options);
      setState({
        ...state,
        loading: false,
        data: response
      });
    } catch (error) {
      setState({
        loading: false,
        error: setErrorFromStatusCode(error.statusCode)
      });
    }
  };

  return {
    setError: error => setState({...state, error}),
    loading: state.loading,
    data: state.data,
    error: state.error,
    fetchData
  };
}

/**Return an error from a given status code
 * @param {*} statusCode the error status code
 * @returns a string with the user-friendly error description
 */
function setErrorFromStatusCode(statusCode) {
  switch (statusCode) {
    case 401:
      return "Usuario o contraseña incorrecto ☹";

    default:
      return "Parece que estamos teniendo dificultades  😅 ";
  }
}
