import {ADD_TEAM} from "../types/actionTypes";

export const addTeam = team => ({
  type: ADD_TEAM,
  payload: {team}
});
