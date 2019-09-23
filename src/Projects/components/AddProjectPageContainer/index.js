//libs
import React from "react";
//redux
import {connect} from "react-redux";
import {addProject} from "../../../global/redux/actions/projects";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
//components
import {AddProjectPage} from "../AddProjectPage";

function AddProjectPageContainer({addProject}) {
  debugger;
  const initialState = {
    name: "",
    description: "",
    cutDate: ""
  };
  const {state, addFormValueToState} = useHandleState(initialState);
  const handleSumbit = () => addProject(state);
  //component
  return (
    <AddProjectPage
      state={state}
      handleSubmit={handleSumbit}
      handleChange={addFormValueToState}
    />
  );
}

export default connect(
  null,
  {addProject}
)(AddProjectPageContainer);
