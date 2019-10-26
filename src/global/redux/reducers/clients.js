import {GET_CLIENTS, ADD_CLIENT} from "../types/actionTypes";
const initialState = {
  list: [
    {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      comments: [
        {
          content: "",
          date: "",
          userId: ""
        }
      ],
      projects: []
    }
  ],
  status: {
    shouldFetchClients: true,
    loadingClients: false,
    errorOnGetClients: null,
    loadingAddCient: false,
    errorOnAddClient: null
  }
};

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
    //-----------get clients------------------------
    case GET_CLIENTS:
      return reduceStateFromFetchedClients(action.payload, state);
    //-------------add client--------------------
    case ADD_CLIENT:
      switch (action.payload.status) {
        case "success":
          return {
            ...state,
            status: {
              loadingAddCient: false,
              errorOnAddClient: null
            },
            list: [...state.list, action.payload.response]
          };
        case "error":
          return {
            ...state,
            status: {
              ...state.status,
              loadingAddCient: false,
              errorOnAddClient: action.payload.response
            }
          };
        case "loading":
          return {
            ...state,
            status: {
              loadingAddCient: true,
              errorOnAddClient: null
            }
          };

        default:
          return state;
      }

    default:
      return state;
  }

  /**
   * Reduce the state from fetched clients
   * @returns the state modified
   * @param {*} payload the action payload
   * @param {*} state the reducer state
   */
  function reduceStateFromFetchedClients({status, response}, state) {
    switch (status) {
      case "success":
        return {
          ...state,
          status: {
            ...state.status,
            shouldFetchClients: false,
            loadingClients: false,
            errorOnGetClients: null
          },
          list: [...response]
        };
      case "error":
        return {
          ...state,
          status: {
            ...state.status,
            shouldFetchClients: false,
            loadingClients: false,
            errorOnGetClients: response
          }
        };
      case "loading":
        return {
          ...state,
          status: {
            ...state.status,
            shouldFetchClients: false,
            loadingClients: true,
            errorOnGetClients: null
          }
        };
      default:
        return state;
    }
  }
}
