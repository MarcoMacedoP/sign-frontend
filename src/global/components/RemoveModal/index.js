import React from "react";
//components..
import { SecondaryButton } from "../";
//styled-components
import { H2 } from "../../styles/texts";
import { StyledModal, StyledButtonContainer, StyledHeader } from "./styles";
//vars
import { errorColor } from "../../styles/variables";

export const RemoveModal = ({
  onRemove,
  onCancel,
  isOpen,
  headline,
  message
}) => (
  <StyledModal isOpen={isOpen} onClose={onCancel}>
    <StyledHeader>
      <H2>{headline}</H2>
      <p>{message}</p>
    </StyledHeader>
    <StyledButtonContainer>
      <SecondaryButton onClick={onCancel}>Cancelar</SecondaryButton>
      <SecondaryButton onClick={onRemove} bordercolor={errorColor}>
        Eliminar
      </SecondaryButton>
    </StyledButtonContainer>
  </StyledModal>
);
