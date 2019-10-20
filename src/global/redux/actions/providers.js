import {GET_PROVIDERS} from "../types/actionTypes";
import {callApi} from "../../functions/callApi";
//--------------get providers-----------------
export const getProviders = (status, response) => ({
  type: GET_PROVIDERS,
  payload: {status, response}
});
export const fetchProviders = () => dispatch => {
  dispatch(getProviders("loading"));
  return callApi("/providers/")
    .then(response => dispatch(getProviders("success", response)))
    .catch(error => dispatch(getProviders("error", error)));
};
