import { fetchStatus } from "../global/types/global.types";

export interface ProjectsState {
  status: ProjectsStateStatus;
  list: Array<Project>;
  projectsOfTeams: Array<ProjectOfTeam> | null;
}
interface ProjectOfTeam {
  projectId: string;
  teamId: string;
  userScope: "member" | "admin" | "founder";
}
export interface ProjectsStateStatus {
  getProjects: GetProjectsStatus;
  projectActions: ProjectActions;
  activitiesProject: ActivitieProjectActions;
  clientsProject: ClientProjectActions;
  providersProject: ProviderProjectAction;
  teamsProject: TeamsProjectActions;
  teamInProject: TeamsProjectActions;
}

export type actionType = "ADD" | "REMOVE" | "GET" | null;

export interface ProjectActions {
  status: fetchStatus;
  type: actionType | "UPDATE" | "GET";
  projectId?: string | null;
  data?: string | null;
}

export interface GetProjectsStatus {
  status: fetchStatus;
  data?: any;
  shouldFetchProjects: boolean;
}
export interface ProviderProjectAction extends ProjectActions {
  type: actionType;
  providerId: string;
}

export interface ActivitieProjectActions {
  type: actionType | "CHANGE_STATUS" | "UPDATE";
  projectId?: string;
  data?: any;
  status: fetchStatus;
  activitieId?: string;
}
interface ClientProjectActions extends ProjectActions {
  type: actionType;
  clientId: string;
}
interface TeamsProjectActions extends ProjectActions {
  type: actionType;
  teamId?: string;
}

export interface Project {
  _id: string;
  name: string;
  description: string;
  dueDate: Date;
  expenses: Array<Object>;
  activities: Array<ProjectActivitie> | undefined;
  clients?: Array<any>;
  providers?: Array<any>;
  teams?: Array<any>;
  fullLoaded?: boolean;
}
export interface ProjectActivitie {
  _id: string;
  name: string;
  status: activitiesStatus;
  comments: Array<ProjectActivitieComment>;
}
export type activitiesStatus = "PENDING" | "IN_PROGRESS" | "DONED";
export interface ProjectActivitieComment {
  _id: string;
  userId: string;
  date: string;
  content: string;
}
