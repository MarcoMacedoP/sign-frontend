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
    setState({
      ...state,
      projects : state.projects.push({id, name})
    });
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
