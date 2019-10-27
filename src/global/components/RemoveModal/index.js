import React from "react";
//components
import {Modal, SecondaryButton} from "../";
//styled-components
import {H2} from "../../styles/texts";
//vars
import {errorColor} from "../../styles/variables";
export const RemoveModal = ({
  onRemove,
  onCancel,
  isOpen,
  headline,
  message
}) => (
  <Modal isOpen={isOpen} onClose={onCancel}>
    <H2>{headline}</H2>
    <p>{message}</p>
    <SecondaryButton onClick={onCancel}>Cancelar</SecondaryButton>
    <SecondaryButton onClick={onRemove} bordercolor={errorColor}>
      Eliminar
    </SecondaryButton>
  </Modal>
);
