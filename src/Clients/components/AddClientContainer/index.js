import React from "react";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState"
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

  const {state, handleChangeState} =  useHandleState(initialState);

    return (
        <AddClient 
          state={state}
          handleChange = {handleChangeState}
        />
    )    
}
