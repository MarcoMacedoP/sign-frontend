import React from "react";
import { List } from "../../../global/components";
import { Projects } from "../Projects";

export const ProjectsList = ({ projects, handleAddProject }) => (
  <List title="Projectos" onAddButtonClick={handleAddProject}>
    {projects.map(project => (
      <Projects {...project} />
    ))}
  </List>
);
