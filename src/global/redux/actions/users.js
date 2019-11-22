import * as actionTypes from "../types/actionTypes";
import { removeSessionCookies } from "../../functions/cookies";
import { callApi } from "../../functions/callApi";
//other actions
import { fetchProjects } from "./projects";
//-----user notifications----------------------//
export const updateUserNotifications = notifications => ({
  type: actionTypes.UPDATE_USER_NOTIFICATIONS,
  payload: notifications
});
//-----end user notifications----------------------//

//------login user-----------------------------//
export const loginUser = (status, response) => ({
  type: actionTypes.LOG_IN_USER,
  payload: { status, response }
});

export function fetchUserLogin(userData = {}) {
  return function(dispatch) {
    dispatch(loginUser("loading"));
    return callApi("/login/", {
      method: "post",
      body: JSON.stringify(userData)
    })
      .then(response => {
        dispatch(loginUser("success", response.user));
        dispatch(updateUserNotifications(response.userNotifications));
        //after login fetch all projects
        dispatch(fetchProjects());
      })
      .catch(({ message, statusCode }) => {
        console.log({ message, statusCode });
        return dispatch(loginUser("error", { message, statusCode }));
      });
  };
}
//------end login user------

export const logout = (status, response) => ({
  type: actionTypes.LOG_OUT,
  payload: { status, response }
});
export function fetchLogout() {
  return dispatch => {
    dispatch(logout("loading"));
    return callApi("/logout/")
      .then(response => dispatch(logout("success", response)))
      .catch(({ message }) => dispatch(logout("error", message)))
      .finally(() => removeSessionCookies());
  };
}
//----signup user ------------------//
export const signupUser = (status, response) => ({
  type: actionTypes.SIGN_UP_USER,
  payload: { status, response }
});

export function fetchSignupUser(user) {
  return function(dispatch) {
    dispatch(signupUser("loading"));
    return callApi("/signup/", {
      method: "post",
      body: JSON.stringify(user)
    })
      .then(response => {
        dispatch(signupUser("success", response.user));
        dispatch(updateUserNotifications(response.userNotifications));
      })
      .catch(({ message, statusCode }) =>
        statusCode === 401
          ? dispatch(
              signupUser(
                "error",
                "Parece qué este usuario ya está registrado 🤭"
              )
            )
          : dispatch(signupUser("error", message))
      );
  };
}

//----signup user end -------------//

//---------update user -------------//
export const updateUser = (status, response) => ({
  type: actionTypes.UPDATE_USER,
  payload: { status, response }
});

/**Call the api with new user data for update the user.
 *
 * @param {*} user the user to be updated
 * @param {*} updatedUserFormData the FormData object with the updated user info.
 */
export const fetchUserUpdate = (user, updatedUserFormData) => dispatch => {
  dispatch(updateUser("loading", []));
  return callApi(
    `/users/${user.id}`,
    {
      method: "put",
      body: updatedUserFormData
    },
    false
  )
    .then(response => dispatch(updateUser("success", response.data)))
    .catch(({ message }) => dispatch(updateUser("error", message)));
};
//---------update user end-------------//
