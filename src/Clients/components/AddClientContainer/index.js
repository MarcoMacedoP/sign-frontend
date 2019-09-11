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

  const {state, addFormValueToState, addArrayValueToState} =  useHandleState(initialState);
  const addProjects = project => addArrayValueToState(state.projects, "projects", project)
  //handle value hook
  const {modalIsOpen, handleModal } = useModalState(false);

    return (
        <AddClient 
          state={state}
          handleChange = {addFormValueToState}
          addProjects = {addProjects}
          modalIsOpen = {modalIsOpen}
          handleModal = {handleModal}
        />
    )    
}
