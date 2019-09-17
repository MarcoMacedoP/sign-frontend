import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  user: {
    isLoged: true
  }
};
export default createStore(rootReducer, initialState);
