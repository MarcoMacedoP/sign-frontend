import { ADD_TEAM, FETCH_TEAMS } from "../types/actionTypes";
const initialState = {
  status: {
    shouldFetchTeams: true,
    loadingFetchTeams: false,
    errorOnFetchTeams: null,
    loadingAddTeam: false,
    errorOnAddTeam: null
  },

  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM:
      console.log(action);
      return addTeamToState(action.payload, state);
    case FETCH_TEAMS:
      return fetchTeamsToState(action.payload, state);
    default:
      return state;
  }
};
function fetchTeamsToState({ status, response }, state) {
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          shouldFetchTeams: false,
          loadingFetchTeams: true,
          errorOnFetchTeams: null
        }
      };

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          shouldFetchTeams: false,
          loadingFetchTeams: false,
          errorOnFetchTeams: response
        }
      };
    case "success":
      return {
        list: [...response],
        status: {
          ...state.status,
          shouldFetchTeams: false,
          loadingFetchTeams: false,
          errorOnFetchTeams: null
        }
      };

    default:
      return state;
  }
}
function addTeamToState({ status, response }, state) {
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          loadingAddTeam: true,
          errorOnAddTeam: null
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          loadingAddTeam: false,
          errorOnAddTeam: response
        }
      };
    case "success":
      return {
        list: [response, ...state.list],
        status: {
          ...state.status,
          loadingAddTeam: false,
          errorOnAddTeam: null
        }
      };

    default:
      return state;
  }
}
