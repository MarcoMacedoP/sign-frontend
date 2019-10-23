import {ADD_TEAM, FETCH_TEAMS} from "../types/actionTypes";
import {handleAsyncAction} from "../functions/handleAsyncAction";

const initialState = {
  status: {
    shouldFetchTeams: true,
    loadingFetchTeams: false,
    errorOnFetchTeams: null,
    loadingAddTeam: false,
    errorOnAddTeam: null
  },

  list: [
    {
      id: 1,
      name: "Team mock",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      about: "Team for develpment React library"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM:
      return addTeamToState(action.payload, state);
    case FETCH_TEAMS:
      return fetchTeamsToState(action.payload, state);
    default:
      return state;
  }
};
function fetchTeamsToState({status, response}, state) {
  const onError = {
    ...state,
    status: {
      ...state.status,
      shouldFetchTeams: false,
      loadingFetchTeams: false,
      errorOnFetchTeams: response
    }
  };
  const onSuccess = {
    list: [...response],
    status: {
      ...state.status,
      shouldFetchTeams: false,
      loadingFetchTeams: false,
      errorOnFetchTeams: null
    }
  };

  const onLoading = {
    ...state,
    status: {
      ...state.status,
      shouldFetchTeams: false,
      loadingFetchTeams: true,
      errorOnFetchTeams: null
    }
  };
  return handleAsyncAction(status, onLoading, onError, onSuccess);
}
function addTeamToState({status, response}, state) {
  const onLoading = {
    ...state,
    status: {
      ...state.status,
      loadingAddTeam: true,
      errorOnAddTeam: null
    }
  };

  const onError = {
    ...state,
    status: {
      ...state.status,
      loadingAddTeam: false,
      errorOnAddTeam: response
    }
  };
  const onSuccess = {
    list: [response, ...state.list],
    status: {
      ...state.status,
      loadingAddTeam: false,
      errorOnAddTeam: null
    }
  };
  return handleAsyncAction(status, onLoading, onError, onSuccess);
}
