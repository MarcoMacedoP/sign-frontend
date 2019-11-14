import { useState } from "react";

export const useHandleState = initialState => {
  const [state, setState] = useState({
    ...initialState
  });

  /**Toggles a boolean key of the state
   *
   * @param {*} key the key in the state to be toggled
   *
   */
  function toggleStateValue(key) {
    if (state[key] === true) {
      addValueToState(key, false);
    } else {
      addValueToState(key, true);
    }
    return state[key];
  }
  /**Adds a form value to the state
   * @param {*} e the onSubmit event
   */
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
    handleSwitchChange,
    toggleStateValue,
    setState
  };
};
