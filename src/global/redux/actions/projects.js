import {
  ADD_PROJECT,
  ADD_ACTIVITE,
  ADD_COMMENT,
  CHANGE_ACTIVITY_TYPE
} from "../types/actionTypes";
import {callApi, statusCodeIsValid} from "../../functions/callApi";
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
//fetch projects actions----------
import {FETCH_PROJECTS} from "../types/actionTypes";

export const getProjects = (status, response) => ({
  type: FETCH_PROJECTS,
  payload: {status, response}
});
export const fetchProjects = () => dispatch => {
  dispatch(getProjects("loading"));
  return callApi("/projects/")
    .then(
      ({data, statusCode}) =>
        statusCodeIsValid(statusCode) &&
        dispatch(getProjects("success", data))
    )
    .catch(err => dispatch(getProjects("error", err)));
};
