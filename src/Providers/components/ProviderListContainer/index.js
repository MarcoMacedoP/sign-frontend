import React, { useEffect, useState, Fragment } from "react";
import { ProviderList } from "../ProviderList";
import { providersApi } from "../../api/index";
import { Loading } from "../../../global/components";
export const ProviderListContainer = () => {
  //Hooks
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const providers = await providersApi.list();
        setData(providers);
        setError(null);
        setLoading(false);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    }
    fetchData();
  });
  //Check the request status
  if (loading) {
    return <Loading />;
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
