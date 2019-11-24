import React, { useEffect } from "react";
//hooks
import { useHandleState, useError } from "../../../global/hooks/";
import { useState } from "react";
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
import { StyledFormContainer } from "./styles";
import { USER_PAGE } from "../../../global/utils/routes";
//redux
import { connect } from "react-redux";
import { fetchUserUpdate } from "../../../global/redux/actions/users";

function EditUser({ user, fetchUserUpdate, location, history }) {
  const { errorOnUpdate, loadingUpdate, hasUpdated } = user.status;
  const [userHasSubmited, setUserHasSubmit] = useState(false);
  const { state, addFormValueToState, addValueToState } = useHandleState(user);
  const [userSubmitPhoto, setUserSubmitPhoto] = useState(false);
  const { error, setErrorToNull } = useError({
    updateErrorOnChange: errorOnUpdate
  });
  const redirectToUserPage = () => history.push(USER_PAGE);
  useEffect(() => {
    if (userHasSubmited && hasUpdated && !error) {
      setTimeout(redirectToUserPage, 3000);
    }
  }, [userHasSubmited, hasUpdated, error]);

  //handlers
  const handleUploadImage = fileImage => {
    setUserSubmitPhoto(true);
    addValueToState("profilePic", fileImage);
  };
  const handleSubmit = event => {
    event.preventDefault();
    setErrorToNull(true);
    setUserHasSubmit(true);
    if (userSubmitPhoto) {
      let userFormData = new FormData();
      Object.keys(state).map(key => userFormData.append(key, state[key]));
      fetchUserUpdate(user, userFormData, userSubmitPhoto);
    } else {
      fetchUserUpdate(user, state, userSubmitPhoto);
    }
  };
  //logic for show a message query params firstTime exists
  const urlParams = new URLSearchParams(location.search);
  const firstTime = urlParams.get("firstTime");
  const [showInfoMessage, setShowInfoMessage] = useState(firstTime);
  const handleCloseInfoMessage = () => setShowInfoMessage(false);

  return (
    <StyledFormContainer>
      <EditPage title="Editar perfil" onSubmit={handleSubmit} isLoading={loadingUpdate}>
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
            <ErrorMessage error={error} onClose={setErrorToNull} />
          </InputContainer>
        </FormWithPhotoUpload>
      </EditPage>
    </StyledFormContainer>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { fetchUserUpdate })(EditUser);
