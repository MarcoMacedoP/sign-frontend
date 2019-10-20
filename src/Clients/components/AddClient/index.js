import React from "react";
//components
import {Input, AddPage} from "../../../global/components";
//hooks
import {useHandleState} from "../../../global/hooks";
//redux
import {connect} from "react-redux";
function AddClient() {
  const initialState = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    projects: []
  };

  const {state, addFormValueToState} = useHandleState(initialState);

  return (
    <AddPage
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
    </AddPage>
  );
}
export default connect(
  null,
  null
)(AddClient);
