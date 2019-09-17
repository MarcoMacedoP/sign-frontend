import { ADD_PROJECT } from "../actionTypes";

export const addProject = project => ({
  type: ADD_PROJECT,
  payload: { project }
});
