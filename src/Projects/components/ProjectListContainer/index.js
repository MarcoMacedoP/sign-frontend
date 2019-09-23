//components
import React from "react";
import {ProjectsList} from "../ProjectsList";
import {Redirect} from "react-router-dom";
import {EmptyProjectsState} from "../EmptyProjectsState";
//redux
import {connect} from "react-redux";
import {addProject} from "../../../global/redux/actions/projects";
//routes
import {
  PROJECTS_ROUTE,
  ADD_PROJECTS_ROUTE
} from "../../../global/utils/routes";

//hooks
import {useState} from "react";
const useRedirect = () => {
  const [isRedirect, setRedirect] = useState(false);
  const [route, setRoute] = useState("");

  function toggleRedirect(route) {
    setRoute(route);
    if (isRedirect) {
      setRedirect(false);
    } else {
      setRedirect(true);
    }
  }
  return [isRedirect, route, toggleRedirect];
};
//main

function ProjectListContainer({projects = [], addProject}) {
  const [isRedirect, route, toggleRedirect] = useRedirect();
  //handles
  const handleAddProject = () => {
    addProject({
      name: "Projecto_2",
      description: "Helloooooo",
      cutDate: new Date(),
      id: 1
    });
  };
  const handleAddClick = () => toggleRedirect(ADD_PROJECTS_ROUTE);
  const handleProjectClick = id =>
    toggleRedirect(`${PROJECTS_ROUTE}${id}`);
  //main component
  if (projects.length === 0) {
    //no projects
    return <EmptyProjectsState addProject={handleAddProject} />;
  }
  if (isRedirect) {
    return <Redirect to={route} />;
  } else {
    //return projects
    return (
      <ProjectsList
        projects={projects}
        handleAddProject={handleAddProject}
        onProjectClick={handleProjectClick}
        handleAddClick={handleAddClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  {addProject}
)(ProjectListContainer);
