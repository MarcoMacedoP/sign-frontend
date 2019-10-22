//libs
import React from "react";
//components
import {
  Modal,
  Input,
  SecondaryButton,
  Button,
  ErrorMessage
} from "../../../global/components/";
//hooks
import {useHandleState} from "../../../global/hooks/";
import {useEffect, useState} from "react";
//redux
import {connect} from "react-redux";
import {fetchAddActivitie} from "../../../global/redux/actions/projects";
//styled components
import {Title, BaseForm} from "../../../global/styles/Forms";
import {blackColorLigth} from "../../../global/styles/variables";
//component
function AddActivitie({
  isShowed,
  onClose,
  projectId,
  fetchAddActivitie,
  isLoadingAddActivitie,
  errorOnAddingActivitie
}) {
  //handles
  const {state, addFormValueToState} = useHandleState({
    name: "",
    description: "",
    date: new Date().toLocaleDateString(),
    status: "PENDING"
  });
  //handling fetch
  const [isRequestSended, setIsRequestSended] = useState(false);
  const handleAddActivie = e => {
    e.preventDefault();
    fetchAddActivitie(state, projectId);
    setIsRequestSended(true);
  };
  useEffect(() => {
    if (
      isRequestSended &&
      !isLoadingAddActivitie &&
      !errorOnAddingActivitie
    ) {
      onClose();
    }
  }, [
    isRequestSended,
    isLoadingAddActivitie,
    errorOnAddingActivitie
  ]);
  //handling errors
  const [error, setError] = useState(errorOnAddingActivitie);
  useEffect(() => setError(errorOnAddingActivitie), [
    errorOnAddingActivitie
  ]);
  const setErrorToNull = () => setError(null);

  return (
    <Modal isOpen={isShowed} onClose={onClose}>
      <Title>Agrega una actividad al proyecto</Title>
      <BaseForm onSubmit={handleAddActivie}>
        <Input
          onChange={addFormValueToState}
          value={state.name}
          label="Nombre de la actividad"
          name="name"
          placeholder="Realizar pedido a proveedores"
        />
        <Input
          onChange={addFormValueToState}
          value={state.description}
          label="Descripción de la actividad"
          name="description"
          placeholder="Una descripción sobre lo que se tiene que hacer"
        />
        <Input
          onChange={addFormValueToState}
          value={state.date}
          label="Fecha de entrega"
          placeholder="La fecha en la que se tiene que realizar la actividad"
          name="date"
          type="date"
        />
        <ErrorMessage error={error} onClose={setErrorToNull} />
        <Button
          onClick={handleAddActivie}
          loading={isLoadingAddActivitie}
        >
          Agregar
        </Button>
        <SecondaryButton
          borderColor={blackColorLigth}
          onClick={onClose}
        >
          Cancelar
        </SecondaryButton>
      </BaseForm>
    </Modal>
  );
}

const mapStateToProps = ({projects}) => ({
  isLoadingAddActivitie: projects.status.isLoadingAddActivitie,
  errorOnAddingActivitie: projects.status.errorOnAddingActivitie
});
export default connect(
  mapStateToProps,
  {fetchAddActivitie}
)(AddActivitie);
