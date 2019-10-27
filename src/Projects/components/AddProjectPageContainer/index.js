//libs
import React from "react";
//redux
import {connect} from "react-redux";
import {fetchAddProject} from "../../../global/redux/actions/projects";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
import {useRedirect} from "../../../global/hooks/useRedirect";
import {useEffect, useState} from "react";
//components
import {AddProjectPage} from "../AddProjectPage";
import {Redirect} from "react-router-dom";
//utils
import {PROJECTS_ROUTE} from "../../../global/utils/routes";

function AddProjectPageContainer({
  fetchAddProject,
  isLoadingAddProject,
  errorOnAddProject
}) {
  //;
  const initialState = {
    name: "",
    description: "",
    dueDate: ""
  };
  const {state, addFormValueToState} = useHandleState(initialState);
  const [isRedirect, route, toggleRedirect] = useRedirect();
  //submit handler
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const handleSumbit = () => {
    fetchAddProject(state);
    setHasSubmitted(true);
  };
  useEffect(() => {
    if (hasSubmitted && !isLoadingAddProject && !errorOnAddProject)
      toggleRedirect(PROJECTS_ROUTE);
  }, [hasSubmitted, isLoadingAddProject, errorOnAddProject]);
  //error handling
  const [error, setError] = useState(null);
  const setErrorToNull = () => setError(null);
  useEffect(() => setError(errorOnAddProject), [errorOnAddProject]);
  //component
  return (
    <>
      {isRedirect && <Redirect to={route} />}
      <AddProjectPage
        state={state}
        handleSubmit={handleSumbit}
        handleChange={addFormValueToState}
        isLoading={isLoadingAddProject}
        error={error}
        onErrorClose={setErrorToNull}
      />
    </>
  );
}

const mapStateToProps = ({projects}) => ({
  isLoadingAddProject: projects.status.isLoadingAddProject,
  errorOnAddProject: projects.status.errorOnAddProject
});
export default connect(
  mapStateToProps,
  {fetchAddProject}
)(AddProjectPageContainer);
