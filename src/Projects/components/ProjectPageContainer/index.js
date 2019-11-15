import * as React from "react";
//redux
import { connect } from "react-redux";
import {
  fetchRemoveProject,
  fetchRemoveClientOfProject,
  fetchAddClientToProject
} from "../../../global/redux/actions/projects";
//components
import { ProjectPage } from "../ProjectPage";
import { Redirect } from "react-router-dom";
//hooks
import { useModalState, useRedirect, useError } from "../../../global/hooks";
//utils
import { PROJECTS_ROUTE } from "../../../global/utils/routes";

function ProjectPageContainer(props) {
  //modals
  const [addActivitieIsOpen, toggleAddActivite] = useModalState();
  const [deleteProjectIsOpen, toggleDeleteModal] = useModalState();
  const [addClientIsOpen, toggleAddClient] = useModalState();
  //redirects
  const {
    isRedirect,
    route,
    toggleRedirect,
    redirectToLastLocation
  } = useRedirect();
  const redirectToEditProject = () =>
    toggleRedirect(`${PROJECTS_ROUTE}edit/${props.project._id}`);
  //handlers
  const handleRemove = () => {
    fetchRemoveProject(props.project._id);
    toggleDeleteModal();
    redirectToLastLocation();
  };
  const handleAddClient = clientId =>
    fetchAddClientToProject({ projectId: props.project._id, clientId });
  const handleRemoveClient = clientId =>
    fetchRemoveClientOfProject({ projectId: props.project._id, clientId });
  //errors
  const { error, setErrorToNull } = useError({
    updateErrorOnChange: props.errorOnAddingClientIntoProject
  });
  const optionsMenuForInformationHeader = [
    {
      icon: "delete",
      onClick: toggleDeleteModal,
      title: "Eliminar"
    },
    { icon: "edit", onClick: redirectToEditProject, title: "Editar" }
  ];

  return (
    <>
      {isRedirect && <Redirect to={route} />}
      <ProjectPage
        error={error}
        onErrorClose={setErrorToNull}
        project={props.project}
        addClientIsOpen={addClientIsOpen}
        toggleAddClient={toggleAddClient}
        addActivitieIsOpen={addActivitieIsOpen}
        toggleAddActivite={toggleAddActivite}
        toggleDeleteModal={toggleDeleteModal}
        deleteProjectIsOpen={deleteProjectIsOpen}
        onRemoveProject={handleRemove}
        onAddClient={handleAddClient}
        onRemoveClient={handleRemoveClient}
        isLoadingAddingClient={props.isLoadingAddingClientIntoProject}
        optionsMenuForInformationHeader={optionsMenuForInformationHeader}
      />
    </>
  );
}

//redux
function mapStateToProps({ projects }, props) {
  const { projectId } = props.match.params;
  const project = projects.list.find(project => project._id === projectId);

  //if project not exists or there is no activities in project
  if (!project || !project.activities) {
    return {
      ...projects.status,
      project: project || {}
    };
  } else {
    const pendingActivities = project.activities.filter(
      activitie => activitie.status === "PENDING"
    );
    const inProgressActivities = project.activities.filter(
      activitie => activitie.status === "IN_PROGRESS"
    );
    const donedActivities = project.activities.filter(
      activitie => activitie.status === "DONED"
    );
    return {
      ...projects.status,
      project: {
        ...project,
        activities: {
          pending: pendingActivities || [],
          inProgress: inProgressActivities || [],
          doned: donedActivities || []
        }
      }
    };
  }
}
export default connect(mapStateToProps, {
  fetchRemoveProject,
  fetchAddClientToProject,
  fetchRemoveClientOfProject
})(ProjectPageContainer);
