import {
  ADD_TEAM,
  FETCH_TEAMS,
  GET_TEAMS_PROJECTS,
  ADD_MEMBER_TO_TEAM
} from "../types/actionTypes";
import { callApi, callApiWithFormData } from "../../functions/callApi";

//add team--------------
export const addTeam = (status, response) => ({
  type: ADD_TEAM,
  payload: { status, response }
});
export const fetchAddTeam = (team) => (dispatch) => {
  dispatch(addTeam("loading"));
  const formData = new FormData();
  Object.keys(team).forEach((key) => formData.append(key, team[key]));
  return callApiWithFormData("/teams/member/", {
    method: "POST",
    body: formData
  })
    .then((team) => dispatch(addTeam("success", team)))
    .catch(({ message }) => dispatch(addTeam("error", message)));
};
//get teams --------------------------------------------
export const getTeams = (status, response) => ({
  type: FETCH_TEAMS,
  payload: { status, response }
});
export const fetchTeams = () => (dispatch) => {
  dispatch(getTeams("loading"));
  return callApi("/teams/member/")
    .then((teams) => dispatch(getTeams("success", teams)))
    .catch(({ message }) => dispatch(getTeams("error", message)));
};
//add member to team
const addMemberToTeam = (status, response) => ({
  payload: { status, response },
  type: ADD_MEMBER_TO_TEAM
});
export const fetchAddMemberToTeam = (teamId, userEmail) => (dispatch) => {
  dispatch(addMemberToTeam("loading"));
  return callApi(`/teams/admin/add_member/${teamId}`, {
    method: "PATCH",
    body: JSON.stringify({ userEmail })
  })
    .then((response) => dispatch(addMemberToTeam("success", response)))
    .catch((error) => dispatch(addMemberToTeam("error", error)));
};
//get projects in team
const getProjectsInTeam = (status, response) => ({
  payload: { status, response },
  type: GET_TEAMS_PROJECTS
});
export const fetchGetProjectsInTeam = (teamId) => (dispatch) => {
  dispatch(getProjectsInTeam("loading"));
  return callApi(`/teams/projects-in-team/${teamId}`)
    .then((response) => dispatch(getProjectsInTeam("success", response)))
    .catch((error) => dispatch(getProjectsInTeam("error", error)));
};
