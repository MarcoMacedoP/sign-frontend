//libs
import React from "react";
//components
import {
  Modal,
  Input,
  SecondaryButton
} from "../../../global/components/";
//hooks
import {useHandleState} from "../../../global/hooks/";
//redux
import {connect} from "react-redux";
import {addActivite} from "../../../global/redux/actions/projects";
//styled components
import {Title, BaseForm} from "../../../global/styles/Forms";
import {
  positiveStatusColor,
  blackColorLigth
} from "../../../global/styles/variables";
//component
function AddActivitie({isShowed, onClose, project, addActivite}) {
  //handles
  const {state, addFormValueToState} = useHandleState({
    name: "",
    description: "",
    date: new Date().toLocaleDateString()
  });

  const handleAddActivie = e => {
    e.preventDefault();
    addActivite({project, activitie: {...state, type: "PENDING"}});
    onClose();
  };

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
        <SecondaryButton
          borderColor={positiveStatusColor}
          onClick={handleAddActivie}
        >
          Agregar
        </SecondaryButton>
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
export default connect(
  null,
  {addActivite}
)(AddActivitie);
