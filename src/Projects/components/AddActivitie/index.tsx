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
import { useHandleState, useError } from "../../../global/hooks/";
import { useEffect, useState } from "react";
//redux
import { connect } from "react-redux";
import { fetchAddActivitie } from "../../../global/redux/actions/projects";
//styled components
import { Title, BaseForm } from "../../../global/styles/Forms";
import { blackColorLigth } from "../../../global/styles/variables";
//types
import { ProjectsState, ActivitieProjectActions } from "../../types";
interface MapStateToProps {
  activiteStatus: ActivitieProjectActions;
}
interface AddActivitieProps extends MapStateToProps {
  isShowed: boolean | any;
  onClose: any;
  projectId: string;
  fetchAddActivitie: any;
}
//component
function AddActivitie(props: AddActivitieProps): JSX.Element {
  const {
    isShowed,
    onClose,
    projectId,
    fetchAddActivitie,
    activiteStatus
  } = props;
  //handles
  const { state, addFormValueToState } = useHandleState({
    name: "",
    description: "",
    date: new Date().toLocaleDateString(),
    status: "PENDING"
  });
  //handling fetch
  const [isRequestSended, setIsRequestSended] = useState(false);
  const handleAddActivie = (e: Event) => {
    e.preventDefault();
    fetchAddActivitie(state, projectId);
    setIsRequestSended(true);
  };
  useEffect(() => {
    if (
      isRequestSended &&
      activiteStatus.status !== "error" &&
      activiteStatus.status !== "loading"
    ) {
      onClose();
    }
  }, [isRequestSended, activiteStatus]);
  //handling errors
  const { error, setErrorToNull } = useError({
    updateErrorOnChange: activiteStatus.data || null
  });
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
          loading={activiteStatus.status === "loading"}
        >
          Agregar
        </Button>
        <SecondaryButton bordercolor={blackColorLigth} onClick={onClose}>
          Cancelar
        </SecondaryButton>
      </BaseForm>
    </Modal>
  );
}

const mapStateToProps = ({
  projects
}: {
  projects: ProjectsState;
}): MapStateToProps => ({
  activiteStatus: projects.status.activitiesProject
});
export default connect(mapStateToProps, { fetchAddActivitie })(AddActivitie);
