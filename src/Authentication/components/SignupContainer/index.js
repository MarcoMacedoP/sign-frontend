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
    const {
      email,
      password,
      name,
      lastname,
      password_repeat
    } = inputs;
    if (
      !email ||
      !password ||
      !name ||
      !lastname ||
      !password_repeat
    ) {
      // prettier-ignore
      setLoading(false);
      setError({
        message : "Alguno de los campos está vacio 🙅🏻‍♂️"
      });
    }
    if (password != password_repeat) {
      setLoading(false);
      setError({
        message : "Las contraseñas no coinciden 🤦‍♀️"
      });
    } else {
      try {
        await fetchSignup(inputs);
        setLoading(false);
      } catch (error) {
        console.log(error);
        // setError(error);
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
    if (userLoged) {
      alert("usuario loged");
    }
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
