import React from "react";
import { SmallEmptyState, Button, List } from "../../../global/components";

export const ProjectsList = ({ projects = [] }) => (
  <List title="Projectos">
    {projects ? (
      projects.map(project => <p key={project.id}> {project.name}</p>)
    ) : (
      <SmallEmptyState
        message="Aún no tines ningún proyecto..."
        callToAction="Agrega ahora tu primer proyecto"
      >
        <Button>Empieza un proyecto</Button>
      </SmallEmptyState>
    )}
  </List>
);
