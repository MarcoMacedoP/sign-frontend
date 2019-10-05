import {ADD_TEAM} from "../actionTypes";

export const addTeam = team => ({
  type: ADD_TEAM,
  payload: {team}
});
