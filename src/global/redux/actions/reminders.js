import {FETCH_REMINDERS} from "../types/actionTypes";
import {callApi} from "../../functions/callApi.new";

export const getReminders = (status, response) => ({
  type: FETCH_REMINDERS,
  payload: {status, response}
});
export const fetchReminders = () => dispatch => {
  dispatch(getReminders("loading"));
  return callApi("/reminders/")
    .then(response => dispatch(getReminders("success", response)))
    .catch(err =>
      dispatch(getReminders("error", err.message || err))
    );
};
