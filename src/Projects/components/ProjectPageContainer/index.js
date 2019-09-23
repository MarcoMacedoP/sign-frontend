import React from "react";
import {connect} from "react-redux";

//components
import {ProjectPage} from "../ProjectPage";

function ProjectPageContainer({project}) {
  return (
    <>
      <ProjectPage {...project} />
    </>
  );
}

//redux
const mapStateToProps = (state, props) => {
  const {projectId} = props.match.params;
  const normalizedId = parseInt(projectId);
  const project = state.projects.find(
    project => project.id === normalizedId
  );
  return project;
};
export default connect(
  mapStateToProps,
  null
)(ProjectPageContainer);
