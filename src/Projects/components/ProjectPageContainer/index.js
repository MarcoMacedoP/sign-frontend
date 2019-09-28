import React from "react";
import {connect} from "react-redux";

//components
import {ProjectPage} from "../ProjectPage";
import {AddActivitie} from "../AddActivitie";
//hooks
import {useModalState} from "../../../global/hooks/useModalState";
function ProjectPageContainer({project}) {
  const {handleModal, modalIsOpen} = useModalState();

  console.log(project);
  return (
    <ProjectPage
      {...project}
      modalIsOpen={modalIsOpen}
      handleModal={handleModal}
    />
  );
}

//redux
const mapStateToProps = (state, props) => {
  const {projectId} = props.match.params;
  const normalizedId = parseInt(projectId);
  const project = state.projects.find(
    project => project.id === normalizedId
  );
  const pendingActivities = project.activities.find(
    activitie => activitie.type === "PENDING"
  );
  const inProgressActivities = project.activities.find(
    activitie => activitie.type === "IN_PROGRESS"
  );
  const donedActivities = project.activities.find(
    activitie => activitie.type === "DONED"
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
};
export default connect(
  mapStateToProps,
  null
)(ProjectPageContainer);
