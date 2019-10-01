import {LOG_IN, LOG_OUT} from "../actionTypes";

export const login = user => ({
  type: LOG_IN,
  payload: {user}
});

export const logout = () => ({
  type: LOG_OUT
});
