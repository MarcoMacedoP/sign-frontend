import React, { useState } from "react";
import { authApi } from "../../api/";
import { Login } from "../Login/";
import { getToken } from "../../../global/functions/getToken";
//Container component
export const LoginContainer = ({ dispatch }) => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ formValues, setFormValues ] = useState({});
  async function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { email, password } = formValues;
    if (!email || !password) {
      setLoading(false);
      setError({
        message : "Alguno de los campos está vacio 🙅🏻‍♂️"
      });
    } else {
      //Everything ok

      getTokenFromRequest(email, password);
    }
  }

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  async function getTokenFromRequest(email, password) {
    try {
      setLoading(false);
      setError(null);
      const token = await authApi.login({
        user     : email,
        password : password
      });
      if (token) {
        dispatch({ type: "login" });
        // console.log(token);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return (
    <Login
      handleClick={handleClick}
      handleChange={handleChange}
      loading={loading}
      error={error}
      setError={setError}
      formValues={formValues}
    />
  );
};
