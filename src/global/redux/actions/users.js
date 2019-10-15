import {
  LOG_IN_USER,
  LOG_OUT,
  UPDATE_USER,
  SIGN_UP_USER
} from "../types/actionTypes";

import {callApi} from "../../functions/callApi";
//------login user-----------------------------//
export const loginUser = (status, response) => ({
  type: LOG_IN_USER,
  payload: {status, response}
});

export function fetchUserLogin(userData = {}) {
  return function(dispatch) {
    dispatch(loginUser("loading", []));

    return callApi("/login/", {
      method: "post",
      body: JSON.stringify(userData)
    })
      .then(response =>
        dispatch(loginUser("success", response.data.user))
      )
      .catch(error => dispatch(loginUser("error", error)));
  };
}
//------end login user------

export const logout = () => ({
  type: LOG_OUT
});

//----signup user ------------------//
export const signupUser = (status, response) => ({
  type: SIGN_UP_USER,
  payload: {status, response}
});

export function fetchSignupUser(user) {
  return function(dispatch) {
    dispatch(signupUser("loading"));
    return callApi("/signup/", {
      method: "post",
      body: JSON.stringify(user)
    })
      .then(response => {
        const statusCodeIsValid =
          response.statusCode >= 200 && response.statusCode < 300;
        if (statusCodeIsValid) {
          dispatch(signupUser("success", response.data));
        } else {
          dispatch(signupUser("error", response));
        }
      })
      .catch(error => dispatch(signupUser("error", error.message)));
  };
}

//----signup user end -------------//

//---------update user -------------//
export const updateUser = (status, response) => ({
  type: UPDATE_USER,
  payload: {status, response}
});

/**Call the api with new user data for update the user.
 *
 * @param {*} user the user to be updated
 * @param {*} updatedUserFormData the FormData object with the updated user info.
 */
export const fetchUserUpdate = (
  user,
  updatedUserFormData
) => dispatch => {
  dispatch(updateUser("loading", []));
  return callApi(
    `/users/${user.id}`,
    {
      method: "put",
      body: updatedUserFormData
    },
    false
  )
    .then(response => {
      if (response.error) {
        dispatch(updateUser("error", response.error));
      } else {
        console.log(response);
        dispatch(updateUser("success", response.data));
      }
    })
    .catch(error => dispatch(updateUser("error", error)));
};
//---------update user end-------------//
