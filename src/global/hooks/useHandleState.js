import {useState} from "react"

export const useHandleState = (initialState)=>{
    const [state, setState] = useState ({
      ...initialState
    })
  
    function handleChangeState(e){
      setState({
        ...state,
        [e.target.name] : e.target.value
      })
    }
    return {state, handleChangeState};
  }