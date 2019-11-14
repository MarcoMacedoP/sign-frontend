import { AsyncActionStatus } from "./AsyncActions";
export interface ProjectsReducerState {
  status: {
    isLoadingProjects: boolean;
    errorLoadingProjects: boolean;
    shouldFetchProjects: boolean;
    isLoadingAddActivitie: boolean;
    errorOnAddingActivitie: string;
    errorOnChangingActivitieStatus: string;
    getProject: GetProject;
    isLoadingAddProject: boolean;
    errorOnAddProject: string;
    isLoadingRemoveProject: boolean;
    errorOnRemoveProject: string;
    isLoadingUpdateProject: boolean;
    errorOnUpdateProject: string;
    isLoadingAddingClientIntoProject: boolean;
    errorOnAddingClientIntoProject: string;
  };
  list: Array<ProjectsList>;
}

interface GetProject {
  status: AsyncActionStatus | null;
  projectId: string;
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
