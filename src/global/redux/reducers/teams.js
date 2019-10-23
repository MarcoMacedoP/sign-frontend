import {ADD_TEAM} from "../types/actionTypes";

const initialState = {
  status: {
    shouldFetchTeams: true,
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
      return [...state, action.payload.team];

    default:
      return [...state];
  }
};

function addTeamToState({status, response}, state) {
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
