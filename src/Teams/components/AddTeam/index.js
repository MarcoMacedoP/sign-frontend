import React from "react";
import { Redirect } from "react-router-dom";
//components
import { Input, UploadImage, AddPage } from "../../../global/components/";

//redux
import { connect } from "react-redux";
import { fetchAddTeam } from "../../../global/redux/actions/teams";
//hooks
import { useHandleState, useError, useRedirect } from "../../../global/hooks";

const INITIAL_STATE = {
  name: "",
  description: "",
  picture: ""
};

function AddTeam({ fetchAddTeam, loadingAddTeam, errorOnAddTeam }) {
  const { state, addFormValueToState, addValueToState } = useHandleState(
    INITIAL_STATE
  );
  const { redirectToLastLocation, route, isRedirect } = useRedirect();
  const { error, setErrorToNull, setError } = useError({
    updateErrorOnChange: errorOnAddTeam
  });
  const [hasSubmit, setHasSubmit] = React.useState(false);

  React.useEffect(() => {
    if (hasSubmit && !error && !loadingAddTeam) {
      redirectToLastLocation();
    }
  }, [hasSubmit, error, loadingAddTeam]);

  const handleError = () => {
    setErrorToNull();
    setHasSubmit(false);
  };

  const handlePictureUpload = (pictureUrl) =>
    addValueToState("picture", pictureUrl);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.name || !state.description) {
      setError("Alguno de los campos está vacio.");
    } else {
      setHasSubmit(true);
      fetchAddTeam(state);
    }
  };

  return (
    <AddPage
      title="Crear un equipo"
      about="La herramienta para crear equipos 
        te permite mantener cominicación con otras personas
      y trabajar juntos en proyectos"
      error={error}
      onErrorClose={handleError}
      onSubmit={handleSubmit}
      isLoading={loadingAddTeam}
    >
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
        name="description"
        value={state.description}
        onChange={addFormValueToState}
      />
      {isRedirect && <Redirect to={route} />}
    </AddPage>
  );
}

const mapStateToProps = (state) => {
  return {
    loadingAddTeam: state.teams.status.loadingAddTeam,
    errorOnAddTeam: state.teams.status.errorOnAddTeam
  };
};

export default connect(mapStateToProps, { fetchAddTeam })(AddTeam);
