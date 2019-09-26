import React from "react";
import {Login} from "../Login/";

//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
import {useCallApi} from "../../../global/hooks/useCallApi";
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
  const handleOnErrorClose = () => setError(null);
  async function handleClick(e) {
    e.preventDefault();

    if (!state.email || !state.password) {
      setError("Campos vacios");
    } else {
      //Everything ok
      await fetchData();
    }
  }

  return (
    <Login
      handleClick={handleClick}
      handleChange={addFormValueToState}
      handleOnErrorClose={handleOnErrorClose}
      loading={loading}
      error={error}
      formValues={state}
    />
  );
};
