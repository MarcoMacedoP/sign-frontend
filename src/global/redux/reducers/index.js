import { combineReducers } from "redux";
//reducers
import user from "./user";
import projects from "./projects";

export default combineReducers({
  user,
  projects
});
