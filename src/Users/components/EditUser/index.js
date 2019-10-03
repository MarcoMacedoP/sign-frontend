import React from "react";
//hooks
import {useHandleState} from "../../../global/hooks/";
//components
import {Input} from "../../../global/components/";
import {EditPage} from "../../../global/components/EditPage";
//redux
import {connect} from "react-redux";

function EditUser({name, lastname, bio, job}) {
  const initialState = {name, lastname, bio, job};
  const {state, addFormValueToState} = useHandleState(initialState);
  return (
    <EditPage title="Editar perfil" onDelete={true}>
      <Input
        name="name"
        label="Nombre (s)"
        value={state.name}
        onChange={addFormValueToState}
      />
      <Input
        name="lastname"
        label="Apellido (s)"
        value={state.lastname}
        onChange={addFormValueToState}
      />
      <Input
        name="bio"
        type="textarea"
        label="Sobre ti"
        placeholder="ej. Soy una persona alegre, dispuesta a triunfar."
        value={state.bio}
        onChange={addFormValueToState}
      />
      <Input
        name="job"
        label="Título de trabajo"
        placeholder="ej. Ing. Industrial"
        value={state.job}
        onChange={addFormValueToState}
      />
    </EditPage>
  );
}

const mapStateToProps = state => ({...state.user});

export default connect(
  mapStateToProps,
  null
)(EditUser);
