import React from "react";
//components
import {SecondaryButton} from "../";
//styled-components
import {ButtonContainer} from "./styles";
import {AppContainer} from "../../styles/Containers";
import {H1} from "../../styles/texts";
import {
  positiveStatusColor,
  blackColorLigth,
  errorColor
} from "../../styles/variables";
/**
 *
 * @param {*} inputValues
 */
export const EditPage = ({
  title,
  onSubmit,
  onCancel,
  onDelete,
  children
}) => (
  <AppContainer>
    <H1 center>{title}</H1>
    {children}
    <ButtonContainer>
      <SecondaryButton
        bordercolor={positiveStatusColor}
        onClick={onSubmit}
        type="submit"
      >
        Guardar
      </SecondaryButton>
      {onDelete && (
        <SecondaryButton bordercolor={errorColor} onClick={onCancel}>
          Eliminar
        </SecondaryButton>
      )}
      <SecondaryButton
        bordercolor={blackColorLigth}
        onClick={onCancel}
      >
        Cancelar
      </SecondaryButton>
    </ButtonContainer>
  </AppContainer>
);
