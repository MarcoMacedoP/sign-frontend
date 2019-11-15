import { fetchStatus } from "../global/types/global.types";

export interface ProjectsReducerState {
  status: {
    isLoadingProjects: boolean;
    errorLoadingProjects: string | null;
    shouldFetchProjects: boolean;
    isLoadingAddActivitie: boolean;
    errorOnAddingActivitie: string | null;
    errorOnChangingActivitieStatus: string | null;
    getProject: GetProject;
    isLoadingAddProject: boolean;
    errorOnAddProject: string | null;
    isLoadingRemoveProject: boolean;
    errorOnRemoveProject: string | null;
    isLoadingUpdateProject: boolean;
    errorOnUpdateProject: string | null;
    isLoadingAddingClientIntoProject: boolean;
    errorOnAddingClientIntoProject: string | null;
  };
  list: Array<ProjectsList>;
}

interface GetProject {
  status: fetchStatus;
  projectId: string | null;
}
export interface ProjectsList {
  _id: string;
  name: string;
  description: string;
  expenses: Array<Object>;
  activities: Array<ProjectActivitie>;
}
export interface ProjectActivitie {
  _id: string;
  name: string;
  status: string;
  comments: Array<ProjectActivitieComment>;
}
export interface ProjectActivitieComment {
  _id: string;
  userId: string;
  date: string;
  content: string;
}
