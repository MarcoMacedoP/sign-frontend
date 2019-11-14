import {
  ADD_CLIENT,
  EDIT_CLIENT,
  GET_CLIENTS,
  REMOVE_CLIENT
} from "../types/actionTypes";
const initialState = {
  list: [],
  status: {
    shouldFetchClients: true,
    loadingClients: false,
    errorOnGetClients: null,
    loadingAddCient: false,
    errorOnAddClient: null,
    loadingUpdateClient: false,
    errorOnUpdateClient: null,
    loadingRemoveClient: false,
    errorOnRemoveClient: null
  }
};

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return reduceStateFromFetchedClients(action.payload, state);
    case ADD_CLIENT:
      return reduceStateFromAddedClient(action.payload, state);
    case EDIT_CLIENT:
      return reduceStateFromEditedClient(action.payload, state);
    case REMOVE_CLIENT:
      console.log(action.payload);
      return reduceStateFromRemovedClient(action.payload, state);

    default:
      return state;
  }
  /** Reduce the state from an removed client
   * @returns the state modified
   * @param {*} payload the action payload
   * @param {*} state the reducer state
   */
  function reduceStateFromRemovedClient({status, response}, state) {
    switch (status) {
      case "loading":
        //remove client when the loads starts
        return {
          list: state.list.filter(
            ({client_id}) => client_id !== response.clientId
          ),
          status: {
            ...state.status,
            loadingRemoveClient: true,
            errorOnRemoveClient: null
          }
        };
      case "error":
        return {
          ...state,
          status: {
            ...state.status,
            loadingRemoveClient: false,
            errorOnRemoveClient: response
          }
        };
      case "success":
        return {
          ...state,
          status: {
            ...state.status,
            loadingRemoveClient: false,
            errorOnRemoveClient: null
          }
        };
      default:
        return state;
    }
  }
  /** Reduce the state from an added client
   * @returns the state modified
   * @param {*} payload the action payload
   * @param {*} state the reducer state
   */
  function reduceStateFromEditedClient({status, response}, state) {
    switch (status) {
      case "success":
        return {
          list: [
            response,
            ...state.list.filter(
              client => client.client_id !== response.client_id
            )
          ],
          status: {
            ...state.status,
            loadingUpdateClient: false,
            errorOnUpdateClient: null
          }
        };
      case "loading":
        return {
          ...state,
          status: {
            ...state.status,
            loadingUpdateClient: true,
            errorOnUpdateClient: null
          }
        };
      case "error":
        return {
          ...state,
          status: {
            ...state.status,
            loadingUpdateClient: false,
            errorOnUpdateClient: response
          }
        };

      default:
        return state;
    }
  }

  /** Reduce the state from an added client
   * @returns the state modified
   * @param {*} payload the action payload
   * @param {*} state the reducer state
   */
  function reduceStateFromAddedClient({status, response}, state) {
    switch (status) {
      case "success":
        return {
          ...state,
          status: {
            ...state.status,
            loadingAddCient: false,
            errorOnAddClient: null
          },
          list: [response, ...state.list]
        };
      case "error":
        return {
          ...state,
          status: {
            ...state.status,
            loadingAddCient: false,
            errorOnAddClient: response
          }
        };
      case "loading":
        return {
          ...state,
          status: {
            ...state.status,
            loadingAddCient: true,
            errorOnAddClient: null
          }
        };
      default:
        return state;
    }
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
