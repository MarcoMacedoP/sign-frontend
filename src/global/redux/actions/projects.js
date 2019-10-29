import {
  ADD_PROJECT,
  ADD_ACTIVITE,
  ADD_COMMENT,
  CHANGE_ACTIVITY_TYPE,
  UPDATE_PROJECT
} from "../types/actionTypes";
import {callApi} from "../../functions/callApi.new";

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
    .then(response => dispatch(addActivite("success", response)))
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
  dispatch(
    changeActivitieStatus("loading", {
      newStatus,
      projectId,
      activitieId
    })
  );
  return callApi("/projects/activities/change_status/", {
    method: "PATCH",
    body: JSON.stringify({status: newStatus, projectId, activitieId})
  })
    .then(response =>
      dispatch(changeActivitieStatus("success", response))
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
    .then(response => dispatch(getProjects("success", response)))
    .catch(err => dispatch(getProjects("error", err)));
};

//Add a project
export const addProject = (status, response) => ({
  type: ADD_PROJECT,
  payload: {status, response}
});
export const fetchAddProject = project => dispatch => {
  dispatch(addProject("loading"));
  return callApi("/projects/user/", {
    method: "POST",
    body: JSON.stringify(project)
  })
    .then(response => dispatch(addProject("success", response)))
    .catch(err => dispatch(addProject("error", err)));
};
//update a project
export const updateProject = (status, response) => ({
  type: UPDATE_PROJECT,
  payload: {status, response}
});
export const fetchUpdateProject = (
  newProjectData,
  projectId
) => dispatch => {
  dispatch(updateProject("loading"));
  return callApi(`/projects/user/${projectId}`, {
    method: "PUT",
    body: JSON.stringify(newProjectData)
  })
    .then(response => dispatch(updateProject("success", response)))
    .catch(err => dispatch(updateProject("error", err)));
};
//remove project
export const removeProject = (status, response) => ({
  type: UPDATE_PROJECT,
  payload: {status, response}
});
export const fetchRemoveProject = projectId => dispatch => {
  dispatch(removeProject("loading", {projectId}));
  return callApi(`/projects/user/${projectId}`, {
    method: "DELETE"
  })
    .then(() => dispatch(removeProject("success")))
    .catch(err => dispatch(removeProject("error", err)));
};
