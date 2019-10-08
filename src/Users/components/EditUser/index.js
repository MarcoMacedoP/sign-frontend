import React from "react";
//hooks
import {useHandleState} from "../../../global/hooks/";
//components
import {Input, UploadImage} from "../../../global/components/";
import {EditPage} from "../../../global/components/EditPage";
//redux
import {connect} from "react-redux";
import {fetchUserUpdate} from "../../../global/redux/actions/users";

function EditUser({user, loading, error, fetchUserUpdate}) {
  const initialState = {
    name: user.name,
    lastname: user.lastname,
    bio: user.bio,
    job: user.job,
    profilePic: user.profilePic
  };

  const {
    state,
    addFormValueToState,
    addValueToState
  } = useHandleState(initialState);

  const handleUploadImage = fileImage =>
    addValueToState("profilePic", fileImage);

  const handleSubmit = event => {
    event.preventDefault();
    let userFormData = new FormData();
    //add all elements to form data
    Object.keys(state).map(key =>
      userFormData.append(key, state[key])
    );
    fetchUserUpdate(user, userFormData);
  };

  return (
    <EditPage
      title="Editar perfil"
      onDelete={true}
      onSubmit={handleSubmit}
    >
      <UploadImage
        name="picture"
        onUpload={handleUploadImage}
        value={state.profilePic}
      />
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

const mapStateToProps = state => ({user: state.user});

export default connect(
  mapStateToProps,
  {fetchUserUpdate}
)(EditUser);
