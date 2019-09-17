import React from "react";
import { SmallEmptyState, Button } from "../../../global/components/";

export const EmptyProjectsState = ({ addProject }) => (
  <SmallEmptyState
    message="Aún no tines ningún proyecto..."
    callToAction="Agrega ahora tu primer proyecto"
  >
    <Button onClick={addProject}>Empieza un proyecto</Button>
  </SmallEmptyState>
);
