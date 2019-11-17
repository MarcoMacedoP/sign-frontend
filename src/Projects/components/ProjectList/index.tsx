//components
import React from "react";
import { List, LongCard } from "../../../global/components";
import { Redirect } from "react-router-dom";
import { EmptyProjectsState } from "../EmptyProjectsState/index";
//redux
import { connect } from "react-redux";
import {
  addProject,
  fetchProjects
} from "../../../global/redux/actions/projects";
//routes
import {
  PROJECTS_ROUTE,
  ADD_PROJECTS_ROUTE
} from "../../../global/utils/routes";
//hooks
import { useEffect } from "react";
import { useRedirect, useError } from "../../../global/hooks";
//styled-components
import { BigList } from "../../../global/styles/Lists";
//types
import { ProjectsState, GetProjectsStatus, Project } from "../../types";

interface ProjectListState {
  getProjectStatus: GetProjectsStatus;
  projectList: Array<Project>;
}
interface ProjectListActions {
  fetchProjects: Function;
  addProject: Function;
}
interface ProjectListProps extends ProjectListActions, ProjectListState {}
//main
function ProjectListContainer(props: ProjectListProps): JSX.Element {
  const { projectList = [], getProjectStatus, fetchProjects } = props;
  //fetching handler
  useEffect(() => {
    if (getProjectStatus.shouldFetchProjects) {
      fetchProjects();
    }
  }, [getProjectStatus]);
  //handling errors
  const { error, setErrorToNull } = useError({
    updateErrorOnChange: getProjectStatus.data
  });
  //onClick handlers
  const { isRedirect, route, toggleRedirect } = useRedirect();
  const handleAddClick = () => toggleRedirect(ADD_PROJECTS_ROUTE);
  const handleProjectClick = (id: string) =>
    toggleRedirect(`${PROJECTS_ROUTE}${id}`);

  return (
    <List
      error={error}
      onErrorClose={setErrorToNull}
      isLoading={getProjectStatus.status === "loading" && true}
      title="Proyectos"
      onAddButtonClick={handleAddClick}
    >
      {projectList.length !== 0 ? (
        <BigList>
          {projectList.map(({ _id, description, name }) => (
            <LongCard
              key={_id}
              onClick={() => handleProjectClick(_id)}
              about={description}
              title={name}
            />
          ))}
        </BigList>
      ) : (
        <EmptyProjectsState addProject={handleAddClick} />
      )}
      {isRedirect && <Redirect to={route} />}
    </List>
  );
}

const mapStateToProps = ({
  projects
}: {
  projects: ProjectsState;
}): ProjectListState => ({
  getProjectStatus: projects.status.getProjects,
  projectList: projects.list
});

export default connect(mapStateToProps, { addProject, fetchProjects })(
  ProjectListContainer
);
