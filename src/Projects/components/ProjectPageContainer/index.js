import React from "react";
//redux
import {connect} from "react-redux";
import {fetchRemoveProject} from "../../../global/redux/actions/projects";
//components
import {ProjectPage} from "../ProjectPage";
import {Redirect} from "react-router-dom";

//hooks
import {useModalState} from "../../../global/hooks/";
import {useState} from "react";
import {useLastLocation} from "react-router-last-location";
function ProjectPageContainer({project, fetchRemoveProject}) {
  const {handleModal, modalIsOpen} = useModalState();
  const {
    handleModal: handleDeleteModal,
    modalIsOpen: deleteModalIsOpen
  } = useModalState();
  const handleRemove = () => {
    fetchRemoveProject(project._id);
    handleDeleteModal();
    redirectToLastLocation();
  };

  const optionsMenuForInformationHeader = [
    {
      icon: "delete",
      onClick: handleDeleteModal,
      title: "Eliminar"
    }
  ];
  const lastLocation = useLastLocation();
  const [isRedirect, setIsRedirect] = useState(false);
  const redirectToLastLocation = () => setIsRedirect(true);
  return (
    <>
      {isRedirect && <Redirect to={lastLocation} />}
      <ProjectPage
        project={project}
        modalIsOpen={modalIsOpen}
        handleModal={handleModal}
        handleDeleteModal={handleDeleteModal}
        deleteModalIsOpen={deleteModalIsOpen}
        onRemoveProject={handleRemove}
        optionsMenuForInformationHeader={
          optionsMenuForInformationHeader
        }
      />
    </>
  );
}

//redux
const mapStateToProps = ({projects}, props) => {
  const {projectId} = props.match.params;
  const project = projects.list.find(
    project => project._id === projectId
  );
  //if project not exists or there is no activities in project
  if (!project || !project.activities) {
    return {project: project || {}};
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
};
export default connect(
  mapStateToProps,
  {fetchRemoveProject}
)(ProjectPageContainer);
