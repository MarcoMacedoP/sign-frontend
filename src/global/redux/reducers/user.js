import {LOG_IN, LOG_OUT} from "../actionTypes";

const initialState = {
  isLoged: false,
  name: "",
  lastname: "",
  picture: "",
  bio: "",
  job: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      const {user} = action.payload;
      debugger;
      return {
        ...user,
        isLoged: true
      };
    }

    case LOG_OUT: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
