import React from "react";
import {List} from "../../../global/components";
import {Project} from "../Project";

export const ProjectsList = ({
  projects,
  onProjectClick,
  handleAddClick
}) => (
  <List title="Proyectos" onAddButtonClick={handleAddClick}>
    {projects.map(project => (
      <Project
        key={project.id}
        {...project}
        onClick={() => onProjectClick(project.id)}
      />
    ))}
  </List>
);
