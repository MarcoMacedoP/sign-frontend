import {ADD_PROJECT, ADD_ACTIVITE} from "../actionTypes";

export const addProject = project => ({
  type: ADD_PROJECT,
  payload: {project}
});
export const addActivite = ({project, activie}) => ({
  type: ADD_ACTIVITE,
  payload: {project, activie}
});
