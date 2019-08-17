import React, { useEffect, useState, Fragment } from "react";
import { ProviderList } from "../ProviderList";
import { providersApi } from "../../api/index";

export const ProviderListContainer = () => {
  //Hooks
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState(null);
  // console.log("on render", data, error, loading);

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
      try {
        const providers = await providersApi.list();
        setData(providers);
        setError(null);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    }
    fetchData();
    // console.log("on useEffect", data, error, loading);
  });
  //Check the request status
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return (
      <Fragment>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Fragment>
    );
  } else if (data) {
    //Everything ok
    return <ProviderList data={data} />;
  } else {
    return null;
  }
};
