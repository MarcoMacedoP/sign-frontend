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
  return {project};
};
export default connect(
  mapStateToProps,
  null
)(ProjectPageContainer);
