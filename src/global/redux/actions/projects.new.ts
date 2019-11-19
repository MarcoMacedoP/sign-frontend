import * as actionTypes from "../types/actionTypes";
import { AsyncAction, PayloadStatus } from "../types/AsyncActions";
import { callApi } from "../../functions/callApi";
//-             projects - providers
function addProvider(status: PayloadStatus, response?: any): AsyncAction {
  return {
    payload: { status, response },
    type: actionTypes.ADD_PROVIDER_TO_PROJECT
  };
}

export const fetchAddProvider = (providerId: string, projectId: string) => (
  dispatch: any
) => {
  dispatch(addProvider("loading", { providerId }));
  return callApi("/projects/providers/", {
    method: "POST",
    body: JSON.stringify({ providerId, projectId })
  })
    .then((response: any) => dispatch(addProvider("success", { ...response })))
    .catch((error: any) =>
      dispatch(addProvider("error", { error, providerId }))
    );
};
function removeProvider(status: PayloadStatus, response?: any): AsyncAction {
  return {
    payload: { status, response },
    type: actionTypes.REMOVE_PROVIDER_TO_PROJECT
  };
}

export const fetchRemoveProvider = (providerId: string, projectId: string) => (
  dispatch: any
) => {
  dispatch(removeProvider("loading", { providerId }));
  return callApi("/projects/providers/", {
    method: "DELETE",
    body: JSON.stringify({ providerId, projectId })
  })
    .then((response: any) =>
      dispatch(removeProvider("success", { ...response }))
    )
    .catch((error: any) =>
      dispatch(removeProvider("error", { error, providerId }))
    );
};

//      teams- projects
function addTeam(status: PayloadStatus, response?: any): AsyncAction {
  return {
    payload: { status, response },
    type: actionTypes.ADD_TEAM_TO_PROJECT
  };
}
export const fetchAddTeam = (teamId: string, projectId: string) => (
  dispatch: any
) => {
  dispatch(addTeam("loading"));
  return callApi("/projects/teams/", {
    method: "POST",
    body: JSON.stringify({ teamId, projectId })
  })
    .then((response: any) => dispatch(addTeam("success", { ...response })))
    .catch((error: any) => dispatch(addTeam("error", { error })));
};
function removeTeam(status: PayloadStatus, response?: any): AsyncAction {
  return {
    payload: { status, response },
    type: actionTypes.REMOVE_TEAM_TO_PROJECT
  };
}

export const fetchRemoveTeam = (teamId: string, projectId: string) => (
  dispatch: any
) => {
  dispatch(removeTeam("loading"));
  return callApi("/projects/teams/", {
    method: "DELETE",
    body: JSON.stringify({ teamId, projectId })
  })
    .then((response: any) => dispatch(removeTeam("success", { ...response })))
    .catch((error: any) => dispatch(removeTeam("error", { error })));
};
//      reminders- projects
function addReminder(status: PayloadStatus, response?: any): AsyncAction {
  return {
    payload: { status, response },
    type: actionTypes.ADD_REMINDER_TO_PROJECT
  };
}
export const fetchAddReminder = (reminderId: string, projectId: string) => (
  dispatch: any
) => {
  dispatch(addReminder("loading"));
  return callApi("/projects/reminders/", {
    method: "POST",
    body: JSON.stringify({ reminderId, projectId })
  })
    .then((response: any) => dispatch(addReminder("success", { ...response })))
    .catch((error: any) => dispatch(addReminder("error", { error })));
};
function removeReminder(status: PayloadStatus, response?: any): AsyncAction {
  return {
    payload: { status, response },
    type: actionTypes.REMOVE_REMINDER_TO_PROJECT
  };
}

export const fetchRemoveReminder = (reminderId: string, projectId: string) => (
  dispatch: any
) => {
  dispatch(removeReminder("loading"));
  return callApi("/projects/reminders/", {
    method: "DELETE",
    body: JSON.stringify({ reminderId, projectId })
  })
    .then((response: any) =>
      dispatch(removeReminder("success", { ...response }))
    )
    .catch((error: any) => dispatch(removeReminder("error", { error })));
};
