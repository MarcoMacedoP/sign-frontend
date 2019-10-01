import {LOG_IN} from "../actionTypes";

export const login = user => ({
  type: LOG_IN,
  payload: {user}
});
