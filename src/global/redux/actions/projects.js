import * as actionTypes from "../types/actionTypes";
import { callApi } from "../../functions/callApi";
//endpoints
const USER_PROJECTS_ENDPOINT = "/projects/user/";

//fetch add activities----------

export const addActivite = (status, response) => ({
  type: actionTypes.ADD_ACTIVITE,
  payload: { status, response }
});

export const fetchAddActivitie = (activitie, projectId) => dispatch => {
  dispatch(addActivite("loading", { projectId }));
  return callApi(`/projects/activities/${projectId}`, {
    method: "post",
    body: JSON.stringify(activitie)
  })
    .then(response =>
      dispatch(addActivite("success", { ...response, projectId }))
    )
    .catch(({ message }) =>
      dispatch(addActivite("error", { projectId, error: message }))
    );
};

//fetch add activities----------

//change activitie type----------
export const changeActivitieStatus = (status, response) => ({
  type: actionTypes.CHANGE_ACTIVITY_TYPE,
  payload: { status, response }
});
export const fetchChangeActivitieStatus = (
  newStatus,
  projectId,
  activitieId
) => dispatch => {
  dispatch(
    changeActivitieStatus(
      "loading",
      { projectId, activitieId },
      {
        newStatus,
        projectId,
        activitieId
      }
    )
  );
  return callApi("/projects/activities/change_status/", {
    method: "PATCH",
    body: JSON.stringify({ status: newStatus, projectId, activitieId })
  })
    .then(response =>
      dispatch(changeActivitieStatus("success", { ...response, projectId }))
    )
    .catch(({ message }) =>
      dispatch(
        changeActivitieStatus("error", {
          activitieId,
          projectId,
          error: message
        })
      )
    );
};
//change activitie type----------
export const addCommentToActivitie = ({ project, activitie, comment }) => ({
  type: actionTypes.ADD_COMMENT,
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
export const getProject = (status, response) => ({
  type: actionTypes.FETCH_PROJECT,
  payload: { status, response }
});
export const fetchProject = projectId => dispatch => {
  dispatch(getProject("loading", { projectId }));

  return callApi(`${USER_PROJECTS_ENDPOINT}${projectId}`)
    .then(project => 
      dispatch(getProject("success", { ...project, projectId }))
    )
    .catch(error =>
      dispatch(
        getProject("error", { projectId, error: error.message || error })
      )
    );
};

export const getProjects = (status, response) => ({
  type: actionTypes.FETCH_PROJECTS,
  payload: { status, response }
});
export const fetchProjects = () => dispatch => {
  dispatch(getProjects("loading"));
  return callApi(USER_PROJECTS_ENDPOINT)
    .then(response => dispatch(getProjects("success", response)))
    .catch(({ message }) => dispatch(getProjects("error", { error: message })));
};

//Add a project
export const addProject = (status, response) => ({
  type: actionTypes.ADD_PROJECT,
  payload: { status, response }
});
export const fetchAddProject = project => dispatch => {
  dispatch(addProject("loading"));
  return callApi(USER_PROJECTS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(project)
  })
    .then(response => dispatch(addProject("success", { ...response })))
    .catch(({ message }) => dispatch(addProject("error", { error: message })));
};
//update a project
export const updateProject = (status, response) => ({
  type: actionTypes.UPDATE_PROJECT,
  payload: { status, response }
});
export const fetchUpdateProject = (newProjectData, projectId) => dispatch => {
  dispatch(updateProject("loading", { projectId }));
  return callApi(`${USER_PROJECTS_ENDPOINT}${projectId}`, {
    method: "PUT",
    body: JSON.stringify(newProjectData)
  })
    .then(response =>
      dispatch(updateProject("success", { ...response, projectId }))
    )
    .catch(({ message }) =>
      dispatch(updateProject("error", { projectId, error: message }))
    );
};
//remove project
export const removeProject = (status, response) => ({
  type: actionTypes.REMOVE_PROJECT,
  payload: { status, response }
});
export const fetchRemoveProject = projectId => dispatch => {
  dispatch(removeProject("loading", { projectId }));
  return (
    callApi(`${USER_PROJECTS_ENDPOINT}${projectId}`, {
      method: "DELETE"
    }).then(() => dispatch(removeProject("success"))).catch,
    projectId(({ message }) =>
      dispatch(removeProject("error", { projectId, error: message }))
    )
  );
};

//******addons*******
//clients into projects
//-add
export const addClientToProject = (status, response) => ({
  type: actionTypes.ADD_CLIENT_TO_PROJECT,
  payload: { status, response }
});
export const fetchAddClientToProject = ({
  projectId,
  clientId
}) => dispatch => {
  dispatch(addClientToProject("loading", { projectId, clientId }));
  return callApi("/projects/clients/", {
    method: "POST",
    body: JSON.stringify({ projectId, clientId })
  })
    .then(project =>
      dispatch(addClientToProject("success", { ...project, projectId }))
    )
    .catch(error =>
      dispatch(
        addClientToProject("error", { clientId, projectId, error: error })
      )
    );
};
//-remove
export const removeClientOfProject = (status, response) => ({
  type: actionTypes.REMOVE_CLIENT_OF_PROJECT,
  payload: { status, response }
});
export const fetchRemoveClientOfProject = ({
  projectId,
  clientId
}) => dispatch => {
  dispatch(removeClientOfProject("loading", { projectId, clientId }));
  return callApi("/projects/clients/", {
    method: "DELETE",
    body: JSON.stringify({ projectId, clientId })
  })
    .then(project =>
      dispatch(removeClientOfProject("success", { ...project, projectId }))
    )
    .catch(error =>
      dispatch(
        removeClientOfProject("error", {
          projectId,
          clientId,
          error:
            error.statusCode === 400
              ? "Este cliente ya está dentro del proyecto."
              : error
        })
      )
    );
};
