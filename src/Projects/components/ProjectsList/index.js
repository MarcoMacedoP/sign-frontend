import React from "react";
import { List } from "../../../global/components";
import { EmptyProjectsState } from "../EmptyProjectsState";
import { Projects } from "../Projects";
export const ProjectsList = ({ projects = [] }) => (
  <List title="Projectos">
    {projects ? (
      projects.map(project => <Projects {...project} />)
    ) : (
      <EmptyProjectsState />
    )}
  </List>
);
