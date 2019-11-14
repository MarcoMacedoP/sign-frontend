import {
  GET_PROVIDERS,
  SHOULD_FETCH_PROVIDERS,
  ADD_PROVIDER
} from "../types/actionTypes";
import {callApi} from "../../functions/callApi";
//--------------get providers-----------------
export const setShouldFetchProviders = status => ({
  type: SHOULD_FETCH_PROVIDERS,
  payload: status
});
export const getProviders = (status, response) => ({
  type: GET_PROVIDERS,
  payload: {status, response}
});
export const fetchProviders = () => dispatch => {
  dispatch(getProviders("loading"));
  return callApi("/providers/")
    .then(response => dispatch(getProviders("success", response)))
    .catch(({message}) => dispatch(getProviders("error", message)));
};
//--------------end get providers-----------------
//-------------- add provider-----------------
export const addProvider = (status, response) => ({
  type: ADD_PROVIDER,
  payload: {status, response}
});
export const fetchAddProvider = provider => dispatch => {
  dispatch(addProvider("loading"));
  return callApi("/providers/", {
    method: "post",
    body: JSON.stringify(provider)
  })
    .then(response => dispatch(addProvider("success", response)))
    .catch(({message}) => dispatch(addProvider("error", message)));
};
//--------------end add provider-----------------

//-------------- add provider-expense-----------------
export const addExpense = (status, response) => ({
  type: ADD_PROVIDER,
  payload: {status, response}
});
export const fetchAddExpenseProvider = provider => dispatch => {
  dispatch(addExpense("loading"));
  return callApi("/providers/", {
    method: "post",
    body: JSON.stringify(provider)
  })
    .then(response => dispatch(addExpense("success", response)))
    .catch(({message}) => dispatch(addExpense("error", message)));
};
