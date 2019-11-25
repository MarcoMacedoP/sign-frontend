import { ADD_TEAM, FETCH_TEAMS } from "../types/actionTypes";
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
