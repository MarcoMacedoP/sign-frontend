import React, { useState, useEffect } from "react";
import { ProviderPage } from "../ProviderPage";
import { providersApi } from "../../api/index";
export const ProviderPageContainer = () => {
  //State
  const [ state, setState ] = useState({
    addProduct  : false,
    editProduct : false,
    addService  : false,
    editService : false
  });
  //Life-cycle
  useEffect(() => {
    fetchData();
  });
  //Handlers
  const handleChange = (name, status) => {
    setState({ ...state, [name]: status });
  };
  async function fetchData() {
    const data = await providersApi.read(1);
    // console.log(data);
  }

  return <ProviderPage state={state} handleChange={handleChange} />;
};
