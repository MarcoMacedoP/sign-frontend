import React from "react";
//components
import {Redirect} from "react-router-dom";
import {Input, AddPage} from "../../../global/components";
//hooks
import { useState} from "react";
import {useHandleState, useError} from "../../../global/hooks";
//redux
import {connect} from "react-redux";
import {fetchAddProvider} from "../../../global/redux/actions/providers";
//utils
import {PROVIDERS_ROUTE} from "../../../global/utils/routes";
import { ActionOnProvider } from "../../../global/redux/reducers/providers";

function AddProvider({fetchAddProvider, actionOnProvider}:{fetchAddProvider: Function, actionOnProvider: ActionOnProvider}) {
  
  const initialState = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    about: ""
  };
  const {state, addFormValueToState} = useHandleState(initialState);

  //handle ui effects
  const {error, setErrorToNull} = useError({
    updateErrorOnChange: actionOnProvider.errorDetails
  });
 
  const [hasSubmited, setHasSubmited] = useState(false);
  const handleSubmit = (e:Event) => {
    e.preventDefault();
    setHasSubmited(true);
    fetchAddProvider(state);
  };


  return (
    <AddPage
      onErrorClose={setErrorToNull}
      error={error}
      isLoading={actionOnProvider.status === "loading"}
      onSubmit={handleSubmit}
      title="Agregar proveedor"
      aboutTitle="Sobre los proveedores"
      about="Tener un listado de los provedores te ayuda a hacer cosas cool"
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
        label="Acerca de"
        placeholder="Cuentanos un poco sobre él"
        name="about"
        value={state.about}
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
      {actionOnProvider.status ==="success" && hasSubmited && (
        <Redirect to={PROVIDERS_ROUTE} />
      )}
    </AddPage>
  );
}
const mapStateToProps = ({providers}: {providers:any}) => ({
  actionOnProvider: providers.status.actionOnProvider
});
export default connect(
  mapStateToProps,
  {fetchAddProvider}
)(AddProvider);
