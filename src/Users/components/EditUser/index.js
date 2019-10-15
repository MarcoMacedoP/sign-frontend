import React from "react";
//hooks
import {useHandleState} from "../../../global/hooks/";
import {useState, useEffect} from "react";
//components
import {
  Input,
  UploadImage,
  EditPage,
  InfoMessage,
  ErrorMessage
} from "../../../global/components/";
//styled-components
import {
  FormWithPhotoUpload,
  InputContainer
} from "../../../global/styles/Forms";
//redux
import {connect} from "react-redux";
import {fetchUserUpdate} from "../../../global/redux/actions/users";

function EditUser({user, fetchUserUpdate, location}) {
  const initialState = {
    name: user.name || "",
    lastname: user.lastname || "",
    bio: user.bio || "",
    job: user.job || "",
    profilePic: user.profilePic || ""
  };

  const {
    state,
    addFormValueToState,
    addValueToState
  } = useHandleState(initialState);

  //status ui handling
  const {errorOnUpdate, loadingUpdate} = user.status;
  const [loading, setLoading] = useState(loadingUpdate);
  const [error, setError] = useState(errorOnUpdate);
  useEffect(() => {
    setLoading(loadingUpdate);
    if (errorOnUpdate) {
      setError(errorOnUpdate);
    }
  }, [errorOnUpdate, loadingUpdate]);
  //handlers
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
  //logic for show a message query params firstTime exists
  const urlParams = new URLSearchParams(location.search);
  const firstTime = urlParams.get("firstTime");
  const [showInfoMessage, setShowInfoMessage] = useState(firstTime);
  const handleCloseInfoMessage = () => setShowInfoMessage(false);

  return (
    <EditPage
      title="Editar perfil"
      onDelete={true}
      onSubmit={handleSubmit}
    >
      {showInfoMessage && (
        <InfoMessage
          onClose={handleCloseInfoMessage}
          message={`¡Bienvenido a SIGN ${user.name}! \n
          ¿Qué te parece si antes de empezar nos cuentas un poco más de ti?`}
        />
      )}
      <FormWithPhotoUpload>
        <UploadImage
          name="picture"
          onUpload={handleUploadImage}
          value={state.profilePic}
        />
        <InputContainer>
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
          {error && (
            <ErrorMessage
              error={error}
              onClose={() => setError(null)}
            />
          )}
          {loading && <p>Cargando...</p>}
        </InputContainer>
      </FormWithPhotoUpload>
    </EditPage>
  );
}

const mapStateToProps = state => ({user: state.user});

export default connect(
  mapStateToProps,
  {fetchUserUpdate}
)(EditUser);
