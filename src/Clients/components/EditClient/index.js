import React from "react";
//components
import {ClientFormBase} from "../ClientFormBase";
//redux
import {connect} from "react-redux";
import {fetchEditClient} from "../../../global/redux/actions/clients";
//hooks
import {useHandleState} from "../../../global/hooks";
import {useState, useEffect} from "react";

function EditClient({
  client,
  loadingUpdateClient,
  errorOnUpdateClient,
  fetchEditClient,
  match
}) {
  const {clientId} = match.params;

  const initialState = {
    name: client.name || "",
    lastname: client.lastname || "",
    email: client.email || "",
    phone: client.phone || "",
    projects: client.projects || []
  };
  const {state, addFormValueToState} = useHandleState(initialState);

  //error handing
  const [error, setError] = useState(false);
  const setErrorToNull = () => setError(null);
  useEffect(() => setError(errorOnUpdateClient), [
    errorOnUpdateClient
  ]);

  //fetch handling
  const handleSubmit = () => {
    fetchEditClient(state, parseInt(clientId));
  };

  return (
    <ClientFormBase
      isLoading={loadingUpdateClient}
      title="Editar cliente"
      onSubmit={handleSubmit}
      formValues={state}
      onInputChange={addFormValueToState}
      error={error}
      setError={setError}
      onErrorClose={setErrorToNull}
    />
  );
}

const mapStateToProps = ({clients}, props) => {
  const {clientId} = props.match.params;
  const [client] = clients.list.filter(
    client => client.client_id === parseInt(clientId)
  );

  return {
    loadingUpdateClient: clients.status.loadingUpdateClient,
    errorOnUpdateClient: clients.status.errorOnUpdateClient,
    client
  };
};
export default connect(
  mapStateToProps,
  {fetchEditClient}
)(EditClient);
