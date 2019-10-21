import {GET_CLIENTS, ADD_CLIENT} from "../types/actionTypes";
import {callApi} from "../../functions/callApi";
//**************fetch clients*********************** */
export const getClients = (status, response) => ({
  type: GET_CLIENTS,
  payload: {status, response}
});

export function fetchClients() {
  return dispatch => {
    dispatch(getClients("loading"));
    return callApi("/clients/")
      .then(clients => dispatch(getClients("success", clients.data)))
      .catch(error => dispatch(getClients("error", error)));
  };
}
//**************add client*********************** */
export function addClient(status, response) {
  return {
    type: ADD_CLIENT,
    payload: {status, response}
  };
}
export function fetchAddClient(client) {
  return dispatch => {
    dispatch(addClient("loading"));
    return callApi("/clients/", {
      method: "post",
      body: JSON.stringify(client)
    })
      .then(response => dispatch(addClient("success", response)))
      .catch(error => dispatch(addClient("error", error)));
  };
}
