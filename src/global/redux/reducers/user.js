import { LOG_IN, LOG_OUT } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state
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
