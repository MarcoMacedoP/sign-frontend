import {
  LOG_IN_USER,
  LOG_OUT,
  SIGN_UP_USER,
  UPDATE_USER,
  UPDATE_USER_NOTIFICATIONS
} from "../types/actionTypes";

const initialState = {
  id: null,
  name: "",
  lastname: "",
  profilePic: "",
  bio: "",
  job: "",
  notifications: [],
  status: {
    errrorOnLogout: null,
    errorOnLogin: null,
    errorOnSignup: null,
    errorOnUpdate: null,
    loadingUpdate: false,
    loadingLogout: false,
    loadingSignup: false,
    loadingLogin: false,
    hasLogout: false,
    hasUpdated: false,
    isLoged: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    //update user notifications
    case UPDATE_USER_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload
      };
    //--------login user-------------
    case LOG_IN_USER:
      return reduceStateFromLogedUser(action.payload, state);
    //--------logout user-------------
    case LOG_OUT:
      return reduceStateFromLogout(action.payload, state);
    //--------signup user-------------
    case SIGN_UP_USER:
      switch (action.payload.status) {
        case "loading":
          return {
            ...state,
            status: {
              ...state.status,
              loadingSignup: true,
              errorOnSignup: null
            }
          };
        case "error":
          return {
            ...state,
            status: {
              ...state.status,
              errorOnSignup: action.payload.response,
              loadingSignup: false
            }
          };
        case "success":
          return {
            ...state,
            ...action.payload.response,
            status: {
              ...state.status,
              loadingSignup: false,
              errorOnSignup: null,
              isLoged: true
            }
          };
        default:
          return { ...state };
      }
    //--------update user-------------
    case UPDATE_USER:
      switch (action.payload.status) {
        case "loading":
          return {
            ...state,
            status: {
              ...state.status,
              loadingUpdate: true,
              errorOnUpdate: null,
              hasUpdated: false
            }
          };
        case "error":
          return {
            ...state,
            status: {
              ...state.status,
              loadingUpdate: false,
              errorOnUpdate: action.payload.response,
              hasUpdated: false
            }
          };
        case "success":
          return {
            ...state,
            ...action.payload.response,
            status: {
              ...state.status,
              loadingUpdate: false,
              errorOnUpdate: null,
              hasUpdated: true
            }
          };
        default:
          return { ...state };
      }
    default:
      return state;
  }
}

/**reduce the state from the user logout.
 *  Handles error status, and loading status.
 *
 * @param {*} payload the action payload
 * @param {*} state the user state
 */
function reduceStateFromLogout({ status, response }, state) {
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          loadingLogout: true,
          errrorOnLogout: null
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          loadingLogout: false,
          errrorOnLogout: response
        }
      };
    case "success":
      return {
        ...initialState,
        status: {
          ...initialState.status,
          hasLogout: true
        }
      };
    default:
      return state;
  }
}

/**reduce the state from a loged user. Handles error status, and loading status.
 *
 * @param {*} payload the action payload
 * @param {*} state the user state
 */
function reduceStateFromLogedUser({ status, response }, state) {
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          loadingLogin: true,
          errorOnLogin: null
        }
      };
    case "error": {
      const error =
        response.statusCode === 401
          ? "Alguno de tus datos es invalido.  😫 "
          : response.message;
      return {
        ...state,
        status: {
          ...state.status,
          loadingLogin: false,
          errorOnLogin: error
        }
      };
    }
    case "success":
      return {
        ...response,
        status: {
          ...state.status,
          loadingLogin: false,
          errorOnLogin: null,
          isLoged: true
        }
      };
    default:
      return { ...state };
  }
}
