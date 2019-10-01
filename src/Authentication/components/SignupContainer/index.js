import React from "react";
import {Signup} from "../Signup/";
//hooks
import {useHandleState, useCallApi} from "../../../global/hooks/";
//Container component
export const SignupContainer = () => {
  //Hooks
  const {state, addFormValueToState} = useHandleState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password_repeat: ""
  });
  const {loading, error, setError, fetchData} = useCallApi({
    endpoint: "/signup/",
    options: {method: "post", body: JSON.stringify(state)}
  });

  //handlers
  async function handleClick(e) {
    e.preventDefault();
    if (
      !state.email ||
      !state.password ||
      !state.name ||
      !state.lastname ||
      !state.password_repeat
    ) {
      setError("Alguno de los campos está vacio 🙅🏻‍♂️");
    } else if (state.password !== state.password_repeat) {
      setError("Las contraseñas no coinciden 🤦‍♀️");
    } else {
      //Everthing in the rigth place
      try {
        debugger;
        const {data: user} = await fetchData();
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    }
  }
  const handleErrorClose = () => setError(null);

  //The UI
  return (
    <Signup
      handleClick={handleClick}
      handleChange={addFormValueToState}
      loading={loading}
      error={error}
      formValues={state}
      onErrorClose={handleErrorClose}
    />
  );
};
