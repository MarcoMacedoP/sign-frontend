import {combineReducers} from "redux";
//reducers
import user from "./user";
import projects from "./projects";
import teams from "./teams";
export default combineReducers({
  user,
  projects,
  teams
});
