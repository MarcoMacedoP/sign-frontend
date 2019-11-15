import React from "react";
//components
import { ClientFormBase } from "../ClientFormBase";
//hooks
import { useEffect, useState } from "react";
import { useHandleState } from "../../../global/hooks";
//redux
import { connect } from "react-redux";
import { fetchAddClient } from "../../../global/redux/actions/clients";
//utils

export function AddClient({ fetchAddClient, isLoading, errorOnAddClient }) {
  const { state, addFormValueToState } = useHandleState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    projects: []
  });
  //handle ui effects
  const [error, setError] = useState(null);
  const setErrorToNull = () => setError(null);
  const handleSubmit = () => {
    fetchAddClient(state);
  };
  useEffect(() => setError(errorOnAddClient), [errorOnAddClient]);

  return (
    <ClientFormBase
      formValues={state}
      isLoading={isLoading}
      title="Agregar cliente"
      onSubmit={handleSubmit}
      onInputChange={addFormValueToState}
      error={error}
      setError={setError}
      onErrorClose={setErrorToNull}
    />
  );
}
const mapStateToProps = state => ({
  isLoading: state.clients.status.loadingAddCient,
  errorOnAddClient: state.clients.status.errorOnAddClient
});
export default connect(mapStateToProps, { fetchAddClient })(AddClient);
