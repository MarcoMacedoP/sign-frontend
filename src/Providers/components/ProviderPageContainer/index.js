import React, { useState, useEffect } from "react";
import { ProviderPage } from "../ProviderPage";
import { providersApi } from "../../api/index";
import { Loading } from "../../../global/components/";
export const ProviderPageContainer = ({ match }) => {
  //State
  const [ state, setState ] = useState({
    addProduct  : false,
    editProduct : false,
    addService  : false,
    editService : false
  });
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState(null);
  const providerId = match.params.providerId;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await providersApi.read(providerId);
        setData(data);
        setError(null);
        setLoading(false);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    }
    fetchData();
  });

  //Handlers
  const handleChange = (name, status) => {
    setState({ ...state, [name]: status });
  };

  if (loading) return <Loading />;

  return (
    <ProviderPage
      state={state}
      handleChange={handleChange}
      provider={data}
    />
  );
};

//Api Hook
