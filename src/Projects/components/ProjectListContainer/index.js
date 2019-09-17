//components
import React from "react";
import { ProjectsList } from "../ProjectsList";
import { EmptyProjectsState } from "../EmptyProjectsState";
//redux
import { connect } from "react-redux";
import { addProject } from "../../../global/redux/actions/projects";

function ProjectListContainer({ projects = [], addProject }) {
  const handleAddProject = () => {
    addProject({
      name: "Projecto_2",
      description: "Helloooooo",
      cutDate: new Date()
    });
  };
  //main component
  if (projects.length === 0) {
    //no projects
    return <EmptyProjectsState addProject={handleAddProject} />;
  } else {
    //return projects
    return (
      <ProjectsList projects={projects} handleAddProject={handleAddProject} />
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { addProject }
)(ProjectListContainer);
