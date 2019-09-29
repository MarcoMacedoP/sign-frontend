import {ADD_PROJECT, ADD_ACTIVITE} from "../actionTypes";

export const addProject = project => ({
  type: ADD_PROJECT,
  payload: {project}
});
export const addActivite = ({project, activitie}) => ({
  type: ADD_ACTIVITE,
  payload: {project, activitie}
});
