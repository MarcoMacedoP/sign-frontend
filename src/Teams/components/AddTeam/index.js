import React from "react";
//components
import {
  InfoLayout,
  EditPage,
  Input,
  UploadImage,
  ErrorMessage
} from "../../../global/components/";

//redux
import {connect} from "react-redux";
import {addTeam} from "../../../global/redux/actions/teams";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
import {useState} from "react";

function AddTeam({addTeam}) {
  const initialState = {
    name: "",
    about: "",
    picture: "",
    id: 2
  };
  const {
    state,
    addFormValueToState,
    addValueToState
  } = useHandleState(initialState);

  const [error, setError] = useState(null);

  const handlePictureUpload = pictureUrl =>
    addValueToState("picture", pictureUrl);

  const handleSubmit = event => {
    event.preventDefault();
    debugger;
    if (!state.name || !state.about || !state.picture) {
      setError("Alguno de los campos está invalido!");
    } else {
      addTeam(state);
    }
  };

  const handleErrorClose = () => setError(false);

  return (
    <InfoLayout
      title="Crear un equipo"
      info="La herramienta para crear equipos 
        te permite mantener cominicación con otras personas
      y trabajar juntos en proyectos"
    >
      <EditPage onSubmit={handleSubmit}>
        <UploadImage
          name="picture"
          value={state.picture}
          onUpload={handlePictureUpload}
        />
        <Input
          placeholder="ej. Diseño de producto"
          name="name"
          value={state.name}
          onChange={addFormValueToState}
        />
        <Input
          placeholder="El equipo encargo de diseñar el producto en Nescafé"
          name="about"
          value={state.about}
          onChange={addFormValueToState}
        />
        {error && (
          <ErrorMessage error={error} onClose={handleErrorClose} />
        )}
      </EditPage>
    </InfoLayout>
  );
}

export default connect(
  null,
  {addTeam}
)(AddTeam);
