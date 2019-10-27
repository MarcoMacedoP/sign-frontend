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

export function AddClient({
  fetchAddClient,
  isLoading,
  errorOnAddClient
}) {
  const initialState = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    projects: []
  };
  const {state, addFormValueToState} = useHandleState(initialState);
  const validateFields = () => {
    if (state.name.length < 4) {
      setError("Nombre demasiado corto");
      return false;
    } else if (state.lastname.length < 4) {
      setError("Apellido demasiado corto");
      return false;
    } else if (state.email.length < 5) {
      setError("Email invalido");
    } else if (
      !state.phone.match(/^\d+$/) ||
      state.phone.length < 8
    ) {
      setError(
        "El telefono solo puede ser númerico y debe tener 8 digitos minimo"
      );
      return false;
    } else {
      return true;
    }
  };
  //handle ui effects
  const [error, setError] = useState(null);
  const setErrorToNull = () => setError(null);
  const [dataAreFetching, setDataAreFetching] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (validateFields()) {
      setDataAreFetching(true);
      fetchAddClient(state);
    }
  };
  useEffect(() => setError(errorOnAddClient), [errorOnAddClient]);

  const [isRedirect, setIsRedirect] = useState(false);
  useEffect(() => {
    if (!errorOnAddClient && dataAreFetching && !isLoading) {
      setIsRedirect(true);
    }
  }, [errorOnAddClient, dataAreFetching, isLoading]);

  return (
    <AddPage
      onErrorClose={setErrorToNull}
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
      {isRedirect && <Redirect to={CLIENTS_ROUTE} />}
    </AddPage>
  );
}
const mapStateToProps = state => ({
  isLoading: state.clients.status.loadingAddCient,
  errorOnAddClient: state.clients.status.errorOnAddClient
});
export default connect(
  mapStateToProps,
  {fetchAddClient}
)(AddClient);
