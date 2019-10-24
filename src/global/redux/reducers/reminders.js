import {
  FETCH_REMINDERS,
  ADD_REMINDER,
  UPDATE_REMINDER,
  REMOVE_REMINDER
} from "../types/actionTypes";

const initialState = {
  list: [],
  status: {
    shuldFetchReminders: true,
    errorOnFetchReminders: null,
    loadingFetchReminders: false,
    errorOnAddReminder: null,
    loadingAddReminder: false,
    errorUpdatingReminder: null,
    loadingUpdateReminder: false,
    errorRemovingReminder: null,
    loadingRemovingReminder: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_REMINDERS:
      return reduceFetchedReminders(action.payload, state);
    case ADD_REMINDER:
      return reduceAddedReminder(action.payload, state);
    case UPDATE_REMINDER:
      return reduceUpdatedReminder(action.payload, state);
    case REMOVE_REMINDER:
      return reduceRemoveReminder(action.payload, state);
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

function reduceAddedReminder({status, response}, state) {
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          errorOnAddReminder: null,
          loadingAddReminder: true
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          errorOnAddReminder: response,
          loadingAddReminder: false
        }
      };
    case "success":
      return {
        list: [response, ...state.list],
        status: {
          ...state.status,
          errorOnAddReminder: null,
          loadingAddReminder: false
        }
      };
    default:
      return state;
  }
}

function reduceUpdatedReminder({status, response}, state) {
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          errorUpdatingReminder: null,
          loadingUpdateReminder: true
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          errorUpdatingReminder: response,
          loadingUpdateReminder: false
        }
      };
    case "success":
      return {
        list: [response, ...state.list],
        status: {
          ...state.status,
          errorUpdatingReminder: null,
          loadingUpdateReminder: false
        }
      };
    default:
      return state;
  }
}

function reduceRemoveReminder({status, response}, state) {
  switch (status) {
    case "loading": {
      const updatedReminders = state.list.filter(
        ({reminder_id}) => reminder_id !== response.reminderId
      );
      return {
        list: [...updatedReminders],
        status: {
          ...state.status,
          errorRemovingReminder: null,
          loadingRemovingReminder: true
        }
      };
    }
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          errorRemovingReminder: response,
          loadingRemovingReminder: false,
          shuldFetchReminders: true
        }
      };
    case "success":
      return {
        ...state,
        status: {
          ...state.status,
          errorRemovingReminder: null,
          loadingRemovingReminder: false
        }
      };

    default:
      return state;
  }
}
