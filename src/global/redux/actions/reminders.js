import {
  FETCH_REMINDERS,
  REMOVE_REMINDER,
  ADD_REMINDER,
  UPDATE_REMINDER
} from "../types/actionTypes";
import {callApi} from "../../functions/callApi.new";

const REMINDERS_ENDPOINT = "/reminders/";

//fetch reminders-------------------
export const getReminders = (status, response) => ({
  type: FETCH_REMINDERS,
  payload: {status, response}
});
export const fetchReminders = () => dispatch => {
  dispatch(getReminders("loading"));
  return callApi(REMINDERS_ENDPOINT)
    .then(response => dispatch(getReminders("success", response)))
    .catch(err =>
      dispatch(getReminders("error", err.message || err))
    );
};
//-------------------------------------------------------

//add reminders---------------------------------------
export const addReminder = (status, response) => ({
  type: ADD_REMINDER,
  payload: {status, response}
});
export const fetchAddReminder = reminder => dispatch => {
  dispatch(addReminder("loading"));
  return callApi(REMINDERS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(reminder)
  })
    .then(response => dispatch(addReminder("success", response)))
    .catch(err => dispatch(addReminder("error", err.message || err)));
};
//-------------------------------------------------------

//update reminder----------------------------------------
export const updateReminder = (status, response) => ({
  type: UPDATE_REMINDER,
  payload: {status, response}
});
export const fetchUpdateReminder = updatedReminder => dispatch => {
  dispatch(updateReminder("loading"));
  return callApi(
    `${REMINDERS_ENDPOINT}${updatedReminder.reminder_id}`,
    {
      method: "PATCH",
      body: JSON.stringify(updatedReminder)
    }
  )
    .then(response => dispatch(updateReminder("success", response)))
    .catch(err =>
      dispatch(updateReminder("error", err.message || err))
    );
};
//-------------------------------------------------------

//remove reminder----------------------------------------
export const removeReminder = (status, response) => ({
  type: REMOVE_REMINDER,
  payload: {status, response}
});
export const fetchRemoveReminder = reminderId => dispatch => {
  dispatch(removeReminder("loading", {reminderId}));
  return callApi(`${REMINDERS_ENDPOINT}${reminderId}`, {
    method: "DELETE"
  })
    .then(response => dispatch(removeReminder("success", response)))
    .catch(err =>
      dispatch(removeReminder("error", err.message || err))
    );
};
//-------------------------------------------------------
