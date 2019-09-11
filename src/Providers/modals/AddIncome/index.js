//Components
import React from "react";
import { Modal } from "../../../global/components/Modal";
import { Input } from "../../../global/components/Input";
import { SecondaryButton } from "../../../global/components/SecondaryButton";
import { Switch } from "@material-ui/core";
//Styles
import { FormControlLabel, Title } from "../utils/styles";
import {
  blackColorLigth,
  positiveStatusColor
} from "../../../global/styles/variables";

//Functions
import { handleClose } from "../../../global/components/Modal/index";

//The component
export const AddIncome = ({ closeModal, isOpen, incomeName }) => {
  const [ state, setState ] = React.useState({
    costPerHour : false
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <Modal onClose={closeModal} isOpen={isOpen}>
      <Title>Agregar {incomeName}</Title>
      <Input
        name="Nombre del servicio"
        placeholder="Reparación eléctrica"
        type="text"
      />
      <Input
        name="Descripción"
        placeholder="Está es la descripción"
        type="text"
      />

      <Input name="Costo" placeholder="800" type="text" />
      <FormControlLabel
        control={
          <Switch
            checked={state.costPerHour}
            onChange={handleChange("costPerHour")}
            value="costPerHour"
            color="primary"
          />
        }
        label="¿Costo por hora?"
      />
      <SecondaryButton borderColor={positiveStatusColor} width="80%">
        Agregar
      </SecondaryButton>
      <SecondaryButton
        borderColor={blackColorLigth}
        onClick={() => handleClose(closeModal)}
        width="80%">
        Cancelar
      </SecondaryButton>
    </Modal>
  );
};
