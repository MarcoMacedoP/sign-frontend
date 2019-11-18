import React from "react";
import { StyledEmptyState, StyledButton } from "./styles";

interface EmptyProjectsStateProps {
  addProject: Function;
}

export const EmptyProjectsState = (props: EmptyProjectsStateProps) => (
  <StyledEmptyState
    message="Aún no tines ningún proyecto..."
    callToAction="Agrega ahora tu primer proyecto"
  >
    <StyledButton onClick={props.addProject}>Empieza un proyecto</StyledButton>
  </StyledEmptyState>
);
