import React, {useState} from "react";
import {Login} from "../Login/";

//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";

import {callApi} from "../../../global/functions/callApi";
/**Custom hook to call an API.
 *
 */
function useCallApi({endpoint = "", options = {}}) {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: []
  });

  const fetchData = async () => {
    try {
      const response = await callApi(endpoint, options);
      console.log("response:", response);
      setState({
        ...state,
        loading: false,
        data: response
      });
    } catch (error) {
      console.log("Error en el hook");
      setState({
        loading: false,
        error
      });
    }
  };

  // useEffect(() => fetchData(), []);

  return {
    setError: error => setState({...state, error}),
    loading: state.loading,
    data: state.data,
    error: state.error,
    fetchData
  };
}

//Container component
export const LoginContainer = () => {
  //state handlers
  const {state, addFormValueToState} = useHandleState({
    email: "",
    password: ""
  });

  //api
  const {loading, data, error, fetchData, setError} = useCallApi({
    options: {method: "post", body: JSON.stringify(state)},
    endpoint: "/login/"
  });
  console.log(data);
  async function handleClick(e) {
    e.preventDefault();

    if (!state.email || !state.password) {
      setError("No hay emial o password");
      console.log("no emial or password");
    } else {
      debugger;
      //Everything ok
      await fetchData();
    }
  }

  return (
    <Login
      handleClick={handleClick}
      handleChange={addFormValueToState}
      loading={loading}
      error={error}
      setError={() => console.log("set error called")}
      formValues={state}
    />
  );
};
