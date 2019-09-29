import {ADD_PROJECT, ADD_ACTIVITE, ADD_COMMENT} from "../actionTypes";

export const addProject = project => ({
  type: ADD_PROJECT,
  payload: {project}
});
export const addActivite = ({project, activitie}) => ({
  type: ADD_ACTIVITE,
  payload: {project, activitie}
});
export const addCommentToActivitie = ({
  project,
  activitie,
  comment
}) => ({
  type: ADD_COMMENT,
  payload: {
    project,
    activitie,
    comment: {
      ...comment,
      date: new Date().toDateString()
    }
  }
});
