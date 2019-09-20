import React from "react";
import { List } from "../../../global/components";
import { Project } from "../Project";

export const ProjectsList = ({
  projects,
  handleAddProject,
  onProjectClick
}) => (
  <List title="Proyectos" onAddButtonClick={handleAddProject}>
    {projects.map(project => (
      <Project {...project} onClick={() => onProjectClick(project.id)} />
    ))}
  </List>
);
