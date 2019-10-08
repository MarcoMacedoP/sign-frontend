import {
  LOG_IN,
  LOG_OUT,
  ERROR_ON_USER_UPDATE,
  RECIEVE_USER_UPDATE,
  REQUEST_USER_UPDATE
} from "../actionTypes";

const initialState = {
  error: null,
  loading: false,
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
