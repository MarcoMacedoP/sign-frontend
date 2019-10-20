import React from "react";
//components
import {Redirect} from "react-router-dom";
import {Input, AddPage} from "../../../global/components";
//hooks
import {useEffect, useState} from "react";
import {useHandleState} from "../../../global/hooks";
//redux
import {connect} from "react-redux";
import {fetchAddClient} from "../../../global/redux/actions/clients";
//utils
import {CLIENTS_ROUTE} from "../../../global/utils/routes";

function AddClient({fetchAddClient, isLoading, errorOnAddClient}) {
  const initialState = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    projects: []
  };
  const {state, addFormValueToState} = useHandleState(initialState);
  //handle ui effects
  const [error, setError] = useState(null);
  const [dataAreFetching, setDataAreFetching] = useState(false);
  const handleSubmit = () => {
    setDataAreFetching(true);
    fetchAddClient(state);
  };

  useEffect(() => setError(errorOnAddClient), [errorOnAddClient]);

  return (
    <AddPage
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      title="Agregar cliente"
      aboutTitle="Sobre los clientes"
      about="Tener tu lista de clientes te permite tener un seguimiento exacto para cada uno"
    >
      <Input
        label="Nombre (s)"
        placeholder="María"
        name="name"
        value={state.name}
        onChange={addFormValueToState}
      />
      <Input
        label="Apellido (s)"
        placeholder="Fernandez"
        name="lastname"
        value={state.lastname}
        onChange={addFormValueToState}
      />
      <Input
        label="Email"
        placeholder="test@example.com"
        name="email"
        value={state.email}
        onChange={addFormValueToState}
        type="email"
      />
      <Input
        label="Télefono"
        placeholder="222335774"
        name="phone"
        value={state.phone}
        onChange={addFormValueToState}
        type="number"
      />
      {!isLoading && dataAreFetching && (
        <Redirect to={CLIENTS_ROUTE} />
      )}
    </AddPage>
  );
}
const mapStateToProps = state => ({
  isLoading: state.clients.status.loadingAddCient,
  errorOnFetching: state.clients.status.errorOnAddClient
});
export default connect(
  mapStateToProps,
  {fetchAddClient}
)(AddClient);
