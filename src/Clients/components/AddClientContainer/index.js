import React from "react";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState"
import { useModalState } from "../../../global/hooks/useModalState"
//ui
import {AddClient} from "../AddClient"

export function AddClientContainer (){

  const initialState = {
    name : "",
    lastname : "",
    email: "",
    phone: "",
    projects : []
  };

  const {state, handleChangeState, setState} =  useHandleState(initialState);
  //add projects to state
  function useAddProjectsToState ({id, name}) {
    const projects = state.projects;
    setState({
      ...state,
      projects : projects.push({id, name})
    });
    debugger
  }
  //handle value hook
  const {modalIsOpen, handleModal } = useModalState(false);

    return (
        <AddClient 
          state={state}
          handleChange = {handleChangeState}
          addProjects ={useAddProjectsToState}
          modalIsOpen = {modalIsOpen}
          handleModal = {handleModal}
        />
    )    
}
