import {
  GET_PROVIDERS,
  SHOULD_FETCH_PROVIDERS,
  ADD_PROVIDER
} from "../types/actionTypes";
import {callApi, validateStatusCode} from "../../functions/callApi";
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
    .then(response =>
      dispatch(getProviders("success", response.data))
    )
    .catch(error => dispatch(getProviders("error", error)));
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
    .then(response => {
      console.log("response", response);
      const responseIsValid = validateStatusCode(response.statusCode);
      if (responseIsValid) {
        dispatch(addProvider("success", response.data));
      }
    })
    .catch(error => {
      console.log("erorr", error);
      dispatch(addProvider("error", error));
    });
};
//--------------end add provider-----------------
