import { useState } from "react";

export const useHandleState = initialState => {
  const [state, setState] = useState({
    ...initialState
  });

  function addFormValueToState(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  /** Handles switch changes for html switch
   *
   * @param {*} e javascript event
   */
  function handleSwitchChange(e) {
    addValueToState(e.target.name, e.target.checked);
  }
  /**
   * Adds a value to the state
   * @param {*} key the key added/updated
   * @param {*} value the value added
   */
  function addValueToState(key, value) {
    setState({
      ...state,
      [key]: value
    });
  }
  /**
   * @description Push into a state array value new element
   * @param {*} key the name of the state property
   * @param {*} value the value of the element
   */
  function addArrayValueToState(array = [], arrayName = "", pushedItem) {
    let newArray = array;
    newArray.push(pushedItem);

    setState({
      ...state,
      [arrayName]: newArray
    });
  }

  return {
    state,
    addFormValueToState,
    addValueToState,
    addArrayValueToState,
    handleSwitchChange
  };
};
