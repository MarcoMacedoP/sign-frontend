import React from "react";
import { Redirect } from "react-router-dom";
//hooks
import { useRedirect } from "../../hooks";
//components
import { SecondaryButton, Icon } from "..";
//styled-components
import { ButtonContainer, StyledLoading } from "./styles";
import { AppContainer } from "../../styles/Containers";
import { H1 } from "../../styles/texts";
import { positiveStatusColor, errorColor } from "../../styles/variables";
interface EditPageProps {
  title: string;
  onSubmit: Function | any;
  onDelete: Function | any;
  isLoading?: boolean | any;
}
export const EditPage: React.FC<EditPageProps> = ({
  title,
  onSubmit,
  onDelete,
  children,
  isLoading
}) => {
  const { isRedirect, redirectToLastLocation, route } = useRedirect();

  return (
    <AppContainer>
      {isRedirect && <Redirect to={route} />}
      <Icon icon="arrow_back" onClick={redirectToLastLocation} />
      <H1 center>{title}</H1>
      {children}
      {isLoading ? (
        <StyledLoading size="2rem" />
      ) : (
        <ButtonContainer>
          <SecondaryButton bordercolor={positiveStatusColor} onClick={onSubmit}>
            Guardar
          </SecondaryButton>
          {onDelete && (
            <SecondaryButton bordercolor={errorColor} onClick={onDelete}>
              Eliminar
            </SecondaryButton>
          )}
        </ButtonContainer>
      )}
    </AppContainer>
  );
};
