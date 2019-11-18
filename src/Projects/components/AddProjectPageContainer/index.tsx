//libs
import React from "react";
//redux
import { connect } from "react-redux";
import { fetchAddProject } from "../../../global/redux/actions/projects";
//hooks
import { useRedirect, useHandleState, useError } from "../../../global/hooks/";
import { useEffect, useState } from "react";
//components
import { AddProjectPage } from "../AddProjectPage";
import { Redirect } from "react-router-dom";
//utils
import { PROJECTS_ROUTE } from "../../../global/utils/routes";
//types
import { ProjectsState, ProjectActions } from "../../types";

interface AddProjectPageContainerProps {
  fetchAddProject: Function;
  addProject: ProjectActions;
}

const AddProjectPageContainer: React.FC<AddProjectPageContainerProps> = ({
  fetchAddProject,
  addProject
}) => {
  const initialState = {
    name: "",
    description: "",
    dueDate: ""
  };
  const { state, addFormValueToState } = useHandleState(initialState);
  const { isRedirect, route, toggleRedirect } = useRedirect();
  //error handling
  const { error, setErrorToNull } = useError({
    updateErrorOnChange: addProject.data
  });
  //submit handler
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const handleSumbit = () => {
    fetchAddProject(state);
    setHasSubmitted(true);
  };
  useEffect(() => {
    if (hasSubmitted && !error && addProject.status !== "loading")
      toggleRedirect(PROJECTS_ROUTE);
  }, [hasSubmitted, error, addProject]);

  //component
  return (
    <>
      {isRedirect && <Redirect to={route} />}
      <AddProjectPage
        state={state}
        handleSubmit={handleSumbit}
        handleChange={addFormValueToState}
        isLoading={addProject.status === "loading"}
        error={error}
        onErrorClose={setErrorToNull}
      />
    </>
  );
};

const mapStateToProps = ({ projects }: { projects: ProjectsState }) => ({
  addProject: projects.status.projectActions
});
export default connect(mapStateToProps, { fetchAddProject })(
  AddProjectPageContainer
);
