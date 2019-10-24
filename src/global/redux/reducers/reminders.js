import {FETCH_REMINDERS} from "../types/actionTypes";

const initialState = {
  list: [],
  status: {
    shuldFetchReminders: true,
    errorOnFetchReminders: null,
    loadingFetchReminders: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_REMINDERS:
      return reduceFetchedReminders(action.payload, state);

    default:
      return state;
  }
}

function reduceFetchedReminders({status, response}, state) {
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          shuldFetchReminders: false,
          errorOnFetchReminders: null,
          loadingFetchReminders: true
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          shuldFetchReminders: false,
          errorOnFetchReminders: response,
          loadingFetchReminders: false
        }
      };
    case "success":
      return {
        list: [...response],
        status: {
          ...state.status,
          shuldFetchReminders: false,
          errorOnFetchReminders: null,
          loadingFetchReminders: false
        }
      };

    default:
      return state;
  }
}
