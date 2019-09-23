import React from "react";
import {List} from "../../../global/components";
import {Project} from "../Project";

export const ProjectsList = ({
  projects,
  handleAddProject,
  onProjectClick,
  handleAddClick
}) => (
  <List title="Proyectos" onAddButtonClick={handleAddClick}>
    {projects.map(project => (
      <Project
        {...project}
        onClick={() => onProjectClick(project.id)}
      />
    ))}
  </List>
);
