import React from "react";
//components
import {Redirect} from "react-router-dom";
import {AddProjectPage} from "../AddProjectPage";
//redux
import {fetchUpdateProject} from "../../../global/redux/actions/projects";
import {connect} from "react-redux";
//hooks
import {
  useHandleState,
  useError,
  useRedirect
} from "../../../global/hooks";

function EditProject({
  project = {},
  fetchUpdateProject,
  isLoadingUpdateProject,
  errorOnUpdateProject
}) {
  const initialState = {
    name: project.name,
    description: project.description,
    dueDate: project.dueDate
  };
  const {state, addFormValueToState} = useHandleState(initialState);
  const handleSubmit = () => {
    fetchUpdateProject(state, project._id);
    redirectToLastLocation();
  };
  //handle errors
  const {error, setErrorToNull} = useError({
    updateErrorOnChange: errorOnUpdateProject
  });
  //handlers
  const {isRedirect, route, redirectToLastLocation} = useRedirect();

  return (
    <>
      {isRedirect && <Redirect to={route} />}
      <AddProjectPage
        title={`Editar ${project.name}`}
        error={error}
        isLoading={isLoadingUpdateProject}
        onErrorClose={setErrorToNull}
        handleChange={addFormValueToState}
        handleSubmit={handleSubmit}
        state={state}
      />
    </>
  );
}
const mapStateToProps = ({projects}, {match}) => {
  const {projectId} = match.params;
  const [project] = projects.list.filter(
    project => project._id === projectId
  );
  return {
    project,
    isLoadingUpdateProject: projects.status.isLoadingUpdateProject,
    errorOnUpdateProject: projects.status.errorOnUpdateProject
  };
};
export default connect(
  mapStateToProps,
  {fetchUpdateProject}
)(EditProject);
