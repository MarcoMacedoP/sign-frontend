import React from "react";
import { List } from "../../../global/components";
import { Projects } from "../Projects";

export const ProjectsList = ({
  projects,
  handleAddProject,
  onProjectClick
}) => (
  <List title="Proyectos" onAddButtonClick={handleAddProject}>
    {projects.map(project => (
      <Projects {...project} onClick={() => onProjectClick(project.id)} />
    ))}
  </List>
);
