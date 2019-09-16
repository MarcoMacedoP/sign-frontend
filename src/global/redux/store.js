import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  user: {
    isLoged: false
  }
};
export default createStore(rootReducer, initialState);
