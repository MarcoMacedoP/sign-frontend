import React from "react";
import {connect} from "react-redux";

//components
import {ProjectPage} from "../ProjectPage";
//hooks
import {useModalState} from "../../../global/hooks/useModalState";
function ProjectPageContainer({project}) {
  const {handleModal, modalIsOpen} = useModalState();
  return (
    <ProjectPage
      project={project}
      modalIsOpen={modalIsOpen}
      handleModal={handleModal}
    />
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
  null
)(ProjectPageContainer);
