import React from "react";
import { List } from "../../../global/components";
import { EmptyProjectsState } from "../EmptyProjectsState";
export const ProjectsList = ({ projects = [] }) => (
  <List title="Projectos">
    {projects ? (
      projects.map(project => <p key={project.id}> {project.name}</p>)
    ) : (
      <EmptyProjectsState />
    )}
  </List>
);
