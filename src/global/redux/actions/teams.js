import {ADD_TEAM} from "../types/actionTypes";
import {callApi} from "../../functions/callApi.new";

//add team--------------
export const addTeam = (status, response) => ({
  type: ADD_TEAM,
  payload: {status, response}
});
export const fetchAddTeam = team => dispatch => {
  dispatch(addTeam("loading"));
  return callApi("/teams/", {
    method: "post",
    body: JSON.stringify(team)
  })
    .then(({data}) => dispatch(addTeam("success", data)))
    .catch(error => dispatch(addTeam("error", error)));
};
