import {
  LOG_IN,
  LOG_OUT,
  ERROR_ON_USER_UPDATE,
  REQUEST_USER_UPDATE,
  RECIEVE_USER_UPDATE
} from "../actionTypes";

import {callApi} from "../../functions/callApi";

export const login = user => ({
  type: LOG_IN,
  payload: {user}
});

export const logout = () => ({
  type: LOG_OUT
});
export const errorOnUserUpdate = error => ({
  type: ERROR_ON_USER_UPDATE,
  error
});

export const requestUserUpdate = user => ({
  type: REQUEST_USER_UPDATE,
  user
});
export const recieveUserUpdate = updatedUser => ({
  type: RECIEVE_USER_UPDATE,
  updatedUser
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
  dispatch(requestUserUpdate(user));
  return callApi(`/users/${user.id}`, {
    method: "put",
    headers: {...updatedUserFormData.headers()},
    body: updatedUserFormData
  }).then(({error, data, message, statusCode}) => {
    if (error) {
      console.error(error);
      dispatch(errorOnUserUpdate(error));
    } else {
      console.log({data, message, statusCode});
      dispatch(recieveUserUpdate(data));
    }
  });
};
