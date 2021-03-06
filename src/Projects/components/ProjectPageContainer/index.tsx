import * as React from "react";
//redux
import { connect } from "react-redux";
import * as projectsActions from "../../../global/redux/actions/projects";
import {
  fetchRemoveProvider,
  fetchAddProvider,
  fetchAddTeam,
  fetchRemoveTeam
} from "../../../global/redux/actions/projects.new";
//components
import { ProjectPage } from "../ProjectPage/index";
import { PageNotFound } from "../../../global/components/";
import { Redirect } from "react-router-dom";
//hooks
import { useModalState, useRedirect, useError } from "../../../global/hooks";
//utils
import { PROJECTS_ROUTE } from "../../../global/utils/routes";
//types
import { ProjectsState, Project, ProjectsStateStatus } from "../../types";

interface MapedStateToProps {
  project: Project | undefined;
  status: ProjectsStateStatus;
}
interface ActionsToProps {
  fetchRemoveProject: Function;
  fetchRemoveClientOfProject: Function;
  fetchAddClientToProject: Function;
  fetchRemoveProvider: Function;
  fetchAddProvider: Function;
  fetchProject: Function;
  fetchAddTeam: Function;
  fetchRemoveTeam: Function;
}
interface ProjectPageContainerProps extends ActionsToProps, MapedStateToProps {}
function ProjectPageContainer(props: ProjectPageContainerProps): JSX.Element {
  const {
    fetchRemoveProject,
    fetchRemoveClientOfProject,
    fetchAddClientToProject,
    fetchAddProvider,
    fetchRemoveProvider,
    fetchAddTeam,
    fetchRemoveTeam,
    project,
    fetchProject,
    status
  } = props;
  //modals
  const [addActivitieIsOpen, toggleAddActivite] = useModalState();
  const [deleteProjectIsOpen, toggleDeleteModal] = useModalState(false);
  const [addClientIsOpen, toggleAddClient] = useModalState();
  const [providerListIsOpen, toggleProvidersList] = useModalState();
  const [teamsListIsOpen, toggleTeamsList] = useModalState();
  //redirects
  const {
    isRedirect,
    route,
    toggleRedirect,
    redirectToLastLocation
  } = useRedirect();
  const redirectToEditProject = () =>
    project && toggleRedirect(`${PROJECTS_ROUTE}edit/${project._id}`);
  //handlers
  const handleRemove = () => {
    project && fetchRemoveProject(project._id);
    typeof toggleDeleteModal === "function" && toggleDeleteModal(true);
    redirectToLastLocation();
  };
  //action-handlers
  const handleAddClient = (clientId: string) =>
    fetchAddClientToProject({ projectId: project && project._id, clientId });
  const handleRemoveClient = (clientId: string) =>
    fetchRemoveClientOfProject({ projectId: project && project._id, clientId });
  const onProviderRemove = (providerId: string) =>
    project && fetchRemoveProvider(providerId, project._id);
  const onProviderAdded = (providerId: string) =>
    project && fetchAddProvider(providerId, project._id);
  const onTeamAdded = (teamId: string) =>
    project && fetchAddTeam(teamId, project._id);
  const onTeamRemoved = (teamId: string) =>
    project && fetchRemoveTeam(teamId, project._id);
  //handle fetch project
  const [shouldFetchProject, setShouldFetchProject] = React.useState(true);
  const handleFetchProject = () => {
    if (project && !project.fullLoaded) {
      setShouldFetchProject(false);
      fetchProject(project && project._id);
    }
  };
  React.useEffect(() => {
    if (shouldFetchProject) {
      handleFetchProject();
    }
  }, [shouldFetchProject, handleFetchProject]);
  //errors
  const { error, setErrorToNull } = useError({
    updateErrorOnChange:
      status.getProjects.data ||
      status.clientsProject.data ||
      status.projectActions.data
  });
  const optionsMenuForInformationHeader = [
    {
      icon: "delete",
      onClick: toggleDeleteModal,
      title: "Eliminar"
    },
    { icon: "edit", onClick: redirectToEditProject, title: "Editar" }
  ];

  if (isRedirect) {
    return <Redirect to={route} />;
  }
  if (project) {
    return (
      <ProjectPage
        isLoadingFullInfo={status.projectActions.status === "loading"}
        error={error}
        onErrorClose={setErrorToNull}
        project={project}
        addClientIsOpen={addClientIsOpen}
        toggleAddClient={toggleAddClient}
        addActivitieIsOpen={addActivitieIsOpen}
        toggleAddActivite={toggleAddActivite}
        toggleDeleteModal={toggleDeleteModal}
        deleteProjectIsOpen={deleteProjectIsOpen}
        onRemoveProject={handleRemove}
        onAddClient={handleAddClient}
        onRemoveClient={handleRemoveClient}
        isLoadingAddingClient={status.clientsProject.status === "loading"}
        optionsMenuForInformationHeader={optionsMenuForInformationHeader}
        onProviderAdded={onProviderAdded}
        onProviderRemove={onProviderRemove}
        isLoadingProviderAction={status.providersProject.status === "loading"}
        onTeamAdded={onTeamAdded}
        onTeamRemove={onTeamRemoved}
        isLoadingTeamAction={status.teamsProject.status === "loading"}
        teamsListIsOpen={teamsListIsOpen}
        toggleTeamsList={toggleTeamsList}
        providerListIsOpen={providerListIsOpen}
        toggleProvidersList={toggleProvidersList}
      />
    );
  } else {
    return <PageNotFound />;
  }
}
//redux
function mapStateToProps(state: any, props: any): any {
  const { projects }: { projects: ProjectsState } = state;
  const { projectId } = props.match.params;
  const project = projects.list.find((project) => project._id === projectId);

  return {
    status: projects.status,
    project
  };
}

export default connect(mapStateToProps, {
  fetchRemoveProject: projectsActions.fetchRemoveProject,
  fetchAddClientToProject: projectsActions.fetchAddClientToProject,
  fetchRemoveClientOfProject: projectsActions.fetchRemoveClientOfProject,
  fetchProject: projectsActions.fetchProject,
  fetchRemoveProvider,
  fetchAddProvider,
  fetchAddTeam,
  fetchRemoveTeam
})(ProjectPageContainer);
