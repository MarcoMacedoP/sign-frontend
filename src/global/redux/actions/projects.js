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

//fetch add activities----------

export const addActivite = (status, response) => ({
  type: ADD_ACTIVITE,
  payload: {status, response}
});

export const fetchAddActivitie = (
  activitie,
  projectId
) => dispatch => {
  dispatch(addActivite("loading"));
  return callApi(`/projects/activities/${projectId}`, {
    method: "post",
    body: JSON.stringify(activitie)
  })
    .then(
      ({data, statusCode}) =>
        statusCodeIsValid(statusCode) &&
        dispatch(addActivite("success", data))
    )
    .catch(error => dispatch(addActivite("error", error)));
};

//fetch add activities----------

//change activitie type----------
export const changeActivitieStatus = (status, response) => ({
  type: CHANGE_ACTIVITY_TYPE,
  payload: {status, response}
});
export const fetchChangeActivitieStatus = (
  newStatus,
  projectId,
  activitieId
) => dispatch => {
  dispatch(changeActivitieStatus("loading"));
  return callApi("/activities/change_status/", {
    method: "patch",
    body: JSON.stringify({status: newStatus, projectId, activitieId})
  })
    .then(
      ({statusCode, data}) =>
        statusCodeIsValid(statusCode) &&
        dispatch(changeActivitieStatus("success", data))
    )
    .catch(error => dispatch(changeActivitieStatus("error", error)));
};
//change activitie type----------
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
  return callApi("/projects/user/")
    .then(
      ({data, statusCode}) =>
        statusCodeIsValid(statusCode) &&
        dispatch(getProjects("success", data))
    )
    .catch(err => dispatch(getProjects("error", err)));
};
