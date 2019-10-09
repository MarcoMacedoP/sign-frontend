import {
  LOG_IN,
  LOG_OUT,
  ERROR_ON_USER_UPDATE,
  RECIEVE_USER_UPDATE,
  REQUEST_USER_UPDATE,
  SIGN_UP_USER
} from "../actionTypes";

const initialState = {
  error: null,
  loading: false,
  loadingSignup: false,
  errorOnSignup: null,
  isLoged: false,
  id: null,
  name: "",
  lastname: "",
  profilePic: "",
  bio: "",
  job: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...action.payload,
        isLoged: true
      };

    case LOG_OUT:
      return {
        isLoged: false
      };
    case SIGN_UP_USER:
      debugger;
      switch (action.payload.status) {
        case "loading":
          return {...state, loadingSignup: true, errorOnSignup: null};
        case "error":
          return {
            ...state,
            errorOnSignup: action.payload.response,
            loadingSignup: false
          };
        case "success":
          return {
            ...state,
            ...action.payload.response,
            loadingSignup: false,
            errorOnSignup: null,
            isLoged: true
          };
        default:
          return {...state};
      }

    case REQUEST_USER_UPDATE:
      return {...state, loading: true, error: null};
    case ERROR_ON_USER_UPDATE:
      return {...state, error: action.payload.error, loading: false};
    case RECIEVE_USER_UPDATE:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null
      };

    default:
      return state;
  }
}
