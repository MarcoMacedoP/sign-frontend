import {
  GET_PROVIDERS,
  SHOULD_FETCH_PROVIDERS
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
    .then(response =>
      dispatch(getProviders("success", response.data))
    )
    .catch(error => dispatch(getProviders("error", error)));
};
