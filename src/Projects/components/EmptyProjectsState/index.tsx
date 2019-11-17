import React from "react";
import { SmallEmptyState, Button } from "../../../global/components/";

interface EmptyProjectsStateProps {
  addProject: Function;
}

export const EmptyProjectsState = (props: EmptyProjectsStateProps) => (
  <SmallEmptyState
    message="Aún no tines ningún proyecto..."
    callToAction="Agrega ahora tu primer proyecto"
  >
    <Button onClick={props.addProject}>Empieza un proyecto</Button>
  </SmallEmptyState>
);
