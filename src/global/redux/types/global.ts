
import {  ProvidersState } from "../reducers/providers";
import {  ProjectsState} from "../../../Projects/types";
export interface GlobalState {
    providers: ProvidersState
    projects: ProjectsState
}