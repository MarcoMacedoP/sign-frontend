import React from "react";
import { SmallEmptyState, Button } from "../../../global/components/";

export const EmptyProjectsState = () => (
  <SmallEmptyState
    message="Aún no tines ningún proyecto..."
    callToAction="Agrega ahora tu primer proyecto"
  >
    <Button>Empieza un proyecto</Button>
  </SmallEmptyState>
);
