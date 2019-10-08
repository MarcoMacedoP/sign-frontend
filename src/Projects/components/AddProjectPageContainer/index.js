//libs
import React from "react";
//redux
import {connect} from "react-redux";
import {addProject} from "../../../global/redux/actions/projects";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
import {useRedirect} from "../../../global/hooks/useRedirect";
//components
import {AddProjectPage} from "../AddProjectPage";
import {Redirect} from "react-router-dom";
//utils
import {PROJECTS_ROUTE} from "../../../global/utils/routes";

function AddProjectPageContainer({addProject, lastAddedProjectId}) {
  //;
  const initialState = {
    name: "",
    description: "",
    dueDate: "",
    id: lastAddedProjectId + 1
  };
  const {state, addFormValueToState} = useHandleState(initialState);
  const [isRedirect, route, toggleRedirect] = useRedirect();
  const handleSumbit = () => {
    addProject(state);
    toggleRedirect(`${PROJECTS_ROUTE}${state.id}`);
  };
  //component
  return (
    <>
      {isRedirect && <Redirect to={route} />}
      <AddProjectPage
        state={state}
        handleSubmit={handleSumbit}
        handleChange={addFormValueToState}
      />
    </>
  );
}

const mapStateToProps = state => {
  const projects = state.projects || [];
  if (state.projects.length !== 0) {
    const {id} = projects[projects.length - 1];
    return {
      lastAddedProjectId: id
    };
  } else return {};
};

export default connect(
  mapStateToProps,
  {addProject}
)(AddProjectPageContainer);
