import { ADD_TEAM, FETCH_TEAMS } from "../types/actionTypes";
import { callApi } from "../../functions/callApi";

//add team--------------
export const addTeam = (status, response) => ({
  type: ADD_TEAM,
  payload: { status, response }
});
export const fetchAddTeam = team => dispatch => {
  dispatch(addTeam("loading"));
  return callApi("/teams/", {
    method: "post",
    body: JSON.stringify(team)
  })
    .then(team => dispatch(addTeam("success", team)))
    .catch(({ message }) => dispatch(addTeam("error", message)));
};
//get teams --------------------------------------------
export const getTeams = (status, response) => ({
  type: FETCH_TEAMS,
  payload: { status, response }
});
export const fetchTeams = () => dispatch => {
  dispatch(getTeams("loading"));
  return callApi("/teams/user/")
    .then(teams => dispatch(getTeams("success", teams)))
    .catch(({ message }) => dispatch(getTeams("error", message)));
};
