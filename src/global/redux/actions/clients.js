import {GET_CLIENTS} from "../types/actionTypes";
import {callApi} from "../../functions/callApi";

export const getClients = (status, response) => ({
  type: GET_CLIENTS,
  payload: {status, response}
});

export function fetchClients() {
  return dispatch => {
    dispatch(getClients("loading"));
    return callApi("/clients/")
      .then(clients => {
        debugger;
        return dispatch(getClients("success", clients.data));
      })
      .catch(error => dispatch(getClients("error", error)));
  };
}
