import React from "react";
//components
import {Redirect} from "react-router-dom";
import {Input, AddPage} from "../../../global/components";
//hooks
import {useEffect, useState} from "react";
import {useHandleState} from "../../../global/hooks";
//redux
import {connect} from "react-redux";
import {fetchAddProvider} from "../../../global/redux/actions/providers";
//utils
import {PROVIDERS_ROUTE} from "../../../global/utils/routes";

function AddProvider({fetchAddProvider, isLoading, errorOnFetching}) {
  const initialState = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    incomes: []
  };
  const {state, addFormValueToState} = useHandleState(initialState);

  //handle ui effects
  const [error, setError] = useState(null);
  const setErrorToNull = () => setError(null);
  const [dataAreFetching, setDataAreFetching] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setDataAreFetching(true);
    fetchAddProvider(state);
  };

  useEffect(() => setError(errorOnFetching), [errorOnFetching]);

  return (
    <AddPage
      onErrorClose={setErrorToNull}
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      title="Agregar proveedor"
      aboutTitle="Sobre los proveedores"
      about="Tener un listado de los provedores  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie volutpat nisl a suscipit. Nullam non tortor lorem. Quisque purus urna, feugiat eu nulla ut, dictum venenatis tortor."
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
      {!isLoading && dataAreFetching && !errorOnFetching && (
        <Redirect to={PROVIDERS_ROUTE} />
      )}
    </AddPage>
  );
}
const mapStateToProps = ({providers}) => ({
  isLoading: providers.status.loadingAddProvider,
  errorOnFetching: providers.status.errorOnAddProvider
});
export default connect(
  mapStateToProps,
  {fetchAddProvider}
)(AddProvider);
