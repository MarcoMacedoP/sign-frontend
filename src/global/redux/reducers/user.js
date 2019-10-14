import {
  LOG_IN_USER,
  LOG_OUT,
  ERROR_ON_USER_UPDATE,
  RECIEVE_USER_UPDATE,
  REQUEST_USER_UPDATE,
  SIGN_UP_USER
} from "../types/actionTypes";

const initialState = {
  id: null,
  name: "",
  lastname: "",
  profilePic: "",
  bio: "",
  job: "",
  status: {
    error: null,
    loading: false,
    loadingSignup: false,
    errorOnSignup: null,
    errorOnLogin: null,
    loadingLogin: true,
    isLoged: true
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_USER:
      switch (action.payload.status) {
        case "loading":
          return {...state, loadingLogin: true, errorOnLogin: false};
        case "error":
          return {
            ...state,
            loadingLogin: false,
            errorOnLogin: action.payload.response
          };
        case "success":
          return {
            ...state,
            loadingLogin: false,
            errorOnLogin: null,
            ...action.payload.response
          };
        default:
          return {...state};
      }

    case LOG_OUT:
      return {
        isLoged: false
      };
    case SIGN_UP_USER:
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
