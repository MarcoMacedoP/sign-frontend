//components
import React from "react";
import { ProjectsList } from "../ProjectsList";
import { EmptyProjectsState } from "../EmptyProjectsState";
//redux
import { connect } from "react-redux";
import { addProject } from "../../../global/redux/actions/projects";
//routes
import { PROJECTS_ROUTE } from "../../../global/utils/routes";

function ProjectListContainer(props) {
  const { projects = [], addProject, history } = props;
  const handleAddProject = () => {
    addProject({
      name: "Projecto_2",
      description: "Helloooooo",
      cutDate: new Date(),
      id: 1
    });
  };
  const handleProjectClick = id => history.push(`${PROJECTS_ROUTE}${id}`);
  //main component
  if (projects.length === 0) {
    //no projects
    return <EmptyProjectsState addProject={handleAddProject} />;
  } else {
    //return projects
    return (
      <ProjectsList
        projects={projects}
        handleAddProject={handleAddProject}
        onProjectClick={handleProjectClick}
      />
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
