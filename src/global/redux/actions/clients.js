import {
  GET_CLIENTS,
  ADD_CLIENT,
  EDIT_CLIENT,
  REMOVE_CLIENT
} from "../types/actionTypes";
import {callApi} from "../../functions/callApi.new";

const CLIENTS_ENDPOINT = "/clients/";
//**************fetch clients*********************** */
export const getClients = (status, response) => ({
  type: GET_CLIENTS,
  payload: {status, response}
});

export function fetchClients() {
  return dispatch => {
    dispatch(getClients("loading"));
    return callApi(CLIENTS_ENDPOINT)
      .then(clients => dispatch(getClients("success", clients)))
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
    return callApi(CLIENTS_ENDPOINT, {
      method: "post",
      body: JSON.stringify(client)
    })
      .then(response => dispatch(addClient("success", response)))
      .catch(error => dispatch(addClient("error", error)));
  };
}
//**************edit client*********************** */
export const editClient = (status, response) => ({
  type: EDIT_CLIENT,
  payload: {status, response}
});
export const fetchEditClient = (
  newClientData,
  clientId
) => dispatch => {
  dispatch(editClient("loading"));
  return callApi(`${CLIENTS_ENDPOINT}${clientId}`, {
    method: "PATCH",
    body: JSON.stringify(newClientData)
  })
    .then(response => dispatch(editClient("success", response)))
    .catch(error => dispatch(editClient("error", error)));
};

//**************remove client*********************** */
export const removeClient = (status, response) => ({
  type: REMOVE_CLIENT,
  payload: {status, response}
});
export const fetchRemoveClient = clientId => dispatch => {
  dispatch(removeClient("loading", {clientId}));
  return callApi(`${CLIENTS_ENDPOINT}${clientId}`, {
    method: "DELETE"
  })
    .then(() => dispatch(removeClient("success")))
    .catch(error => dispatch(removeClient("error", error)));
};
