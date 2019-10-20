import {combineReducers} from "redux";
//reducers
import user from "./user";
import projects from "./projects";
import teams from "./teams";
import clients from "./clients";
import providers from "./providers";

export default combineReducers({
  user,
  projects,
  teams,
  clients,
  providers
});
