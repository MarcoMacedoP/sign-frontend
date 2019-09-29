import {
  ADD_PROJECT,
  ADD_ACTIVITE,
  ADD_COMMENT,
  CHANGE_ACTIVITY_TYPE
} from "../actionTypes";

export const addProject = project => ({
  type: ADD_PROJECT,
  payload: {project}
});
export const addActivite = ({project, activitie}) => ({
  type: ADD_ACTIVITE,
  payload: {project, activitie}
});
export const changeActivitieType = ({
  project,
  activitie,
  newType
}) => ({
  type: CHANGE_ACTIVITY_TYPE,
  payload: {project, activitie, newType}
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
