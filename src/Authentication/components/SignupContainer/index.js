import React, { useState } from "react";
import { authApi } from "../../api/";
import { Signup } from "../Signup/";

//Container component
export const SignupContainer = ({ dispatch }) => {
  //Hooks
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ inputs, setInputs ] = useState({
    name            : "",
    lastname        : "",
    email           : "",
    password        : "",
    password_repeat : ""
  });

  //handlers
  async function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.name ||
      !inputs.lastname ||
      !inputs.password_repeat
    ) {
      setLoading(false);
      setError({
        message : "Alguno de los campos está vacio 🙅🏻‍♂️"
      });
    } else if (inputs.password !== inputs.password_repeat) {
      setLoading(false);
      setError({
        message : "Las contraseñas no coinciden 🤦‍♀️"
      });
    } else {
      //Everthing in the rigth place
      try {
        await fetchSignup(inputs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
  }

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }
  async function fetchSignup(userData) {
    const userLoged = await authApi.signup(userData);
    console.log("The token", userLoged);
  }

  //The UI
  return (
    <Signup
      handleClick={handleClick}
      handleChange={handleChange}
      loading={loading}
      error={error}
      setError={setError}
      formValues={inputs}
    />
  );
};
