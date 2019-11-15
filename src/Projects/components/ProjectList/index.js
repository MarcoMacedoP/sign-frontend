//components
import React from "react";
import { List, LongCard } from "../../../global/components";
import { Redirect } from "react-router-dom";
import { EmptyProjectsState } from "../EmptyProjectsState";
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
import { useEffect, useState } from "react";
import { useRedirect } from "../../../global/hooks/useRedirect";
//styled-components
import { BigList } from "../../../global/styles/Lists";

//main
function ProjectListContainer({
  isLoadingProjects,
  shouldFetchProjects,
  errorLoadingProjects,
  projectList,
  fetchProjects
}) {
  //fetching handler
  useEffect(() => {
    if (shouldFetchProjects) {
      fetchProjects();
    }
  }, [shouldFetchProjects]);
  //handling errors
  const [error, setError] = useState(null);
  useEffect(() => setError(errorLoadingProjects), [errorLoadingProjects]);
  const setErrorToNull = () => setError(null);

  //onClick handlers
  const { isRedirect, route, toggleRedirect } = useRedirect();
  const handleAddClick = () => toggleRedirect(ADD_PROJECTS_ROUTE);
  const handleProjectClick = id => toggleRedirect(`${PROJECTS_ROUTE}${id}`);

  return (
    <List
      error={error}
      onErrorClose={setErrorToNull}
      isLoading={isLoadingProjects}
      title="Proyectos"
      onAddButtonClick={handleAddClick}
    >
      {projectList.length !== 0 ? (
        <BigList>
          {projectList.map(({ _id, description, name }) => (
            <LongCard
              key={_id}
              onClick={() => handleProjectClick(_id)}
              date={description}
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

const mapStateToProps = ({ projects }) => ({
  isLoadingProjects: projects.status.isLoadingProjects,
  shouldFetchProjects: projects.status.shouldFetchProjects,
  errorLoadingProjects: projects.status.errorLoadingProjects,
  projectList: projects.list
});

export default connect(mapStateToProps, { addProject, fetchProjects })(
  ProjectListContainer
);
