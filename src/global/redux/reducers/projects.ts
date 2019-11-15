import * as actionTypes from "../types/actionTypes";
//types
import { ProjectsReducerState } from "../../../Projects/types";
import { AsyncAction, Payload } from "../types/AsyncActions";
const initialState: ProjectsReducerState = {
  status: {
    isLoadingProjects: false,
    errorLoadingProjects: null,
    shouldFetchProjects: true,
    isLoadingAddActivitie: false,
    errorOnAddingActivitie: null,
    errorOnChangingActivitieStatus: null,
    isLoadingAddProject: false,
    getProject: {
      projectId: null,
      status: "unitialized"
    },
    errorOnAddProject: null,
    isLoadingRemoveProject: false,
    errorOnRemoveProject: null,
    isLoadingUpdateProject: false,
    errorOnUpdateProject: null,
    isLoadingAddingClientIntoProject: false,
    errorOnAddingClientIntoProject: null
  },
  list: []
};

function projectReducer(state = initialState, action: AsyncAction) {
  const { payload, type } = action;

  switch (type) {
    //CRUD PROJECTS
    case actionTypes.FETCH_PROJECT:
      return reduceStateFromFetchedProject(action.payload, state);
    case actionTypes.FETCH_PROJECTS:
      return fetchProjectsReducer(action.payload, state);
    case actionTypes.ADD_PROJECT:
      return reduceStateFromAddedProject(action.payload, state);
    case actionTypes.UPDATE_PROJECT:
      return reduceStateFromUpdatedProject(action.payload, state);
    case actionTypes.REMOVE_PROJECT:
      return reduceStateFromRemovedProject(action.payload, state);
    // END CRUD PROJECTS

    case actionTypes.ADD_ACTIVITE:
      return addActiviteReducer(payload, state);
    //Change the activitie.type depending on wich section it's dropped
    case actionTypes.CHANGE_ACTIVITY_TYPE:
      return changeActivitieStatusReducer(payload, state);
    //Clients into proejcts reducer
    case actionTypes.ADD_CLIENT_TO_PROJECT:
      return reduceStateFromAddedClient(payload, state);
    case actionTypes.REMOVE_CLIENT_OF_PROJECT:
      return reduceStateFromRemovedClient(payload, state);
    default:
      return state;
  }
}

/**handles all the fetching the remove
 * @returns the state modified
 * @param {*} payload the action payload
 * @param {*} state the reducer state
 */
function reduceStateFromFetchedProject(
  payload: Payload,
  state: ProjectsReducerState
): ProjectsReducerState {
  const { response, status } = payload;
  switch (status) {
    case "loading": {
      return {
        ...state,
        status: {
          ...state.status,
          getProject: {
            status: "loading",
            projectId: response.projectId
          }
        }
      };
    }

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          getProject: {
            status: "error",
            projectId: response.projectId
          }
        }
      };
    case "success": {
      return {
        ...state,
        status: {
          ...state.status,
          getProject: {
            status: "success",
            projectId: response.projectId
          }
        }
      };
    }

    default:
      return state;
  }
}

/**handles all the fetching the remove
 * @returns the state modified
 * @param {*} payload the action payload
 * @param {*} state the reducer state
 */
function reduceStateFromRemovedProject(
  payload: Payload,
  state: ProjectsReducerState
): ProjectsReducerState {
  const { response, status } = payload;
  switch (status) {
    case "loading": {
      const projectsWithoutRemoved = state.list.filter(
        project => project._id !== response.projectId
      );
      return {
        list: projectsWithoutRemoved,
        status: {
          ...state.status,
          isLoadingRemoveProject: true,
          errorOnRemoveProject: null
        }
      };
    }

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingRemoveProject: false,
          errorOnRemoveProject: response
        }
      };
    case "success": {
      //state is already updated in "loading" for UX proposals,
      //there is no need to updated here.
      return state;
    }

    default:
      return state;
  }
}
/**handles all the fetching change status
 * activitie reducer stuff.
 * @returns the state modified
 * @param {*} payload the action payload
 * @param {*} state the reducer state
 */
function reduceStateFromUpdatedProject(
  payload: Payload,
  state: ProjectsReducerState
): ProjectsReducerState {
  const { response, status } = payload;
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingUpdateProject: true,
          errorOnUpdateProject: null
        }
      };

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingUpdateProject: false,
          errorOnUpdateProject: response
        }
      };
    case "success": {
      const updatedProjects = state.list.map(project =>
        project._id === response._id ? response : project
      );
      return {
        list: updatedProjects,
        status: {
          ...state.status,
          isLoadingUpdateProject: false,
          errorOnUpdateProject: null
        }
      };
    }

    default:
      return state;
  }
}

/**
/**handles all the fetching add project 
 * @returns the state modified
 * @param {*} payload the action payload 
 * @param {*} state the reducer state
 */
function reduceStateFromAddedProject(
  payload: Payload,
  state: ProjectsReducerState
): ProjectsReducerState {
  const { response, status } = payload;
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddProject: true,
          errorOnAddProject: null
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddProject: false,
          errorOnAddProject: response
        }
      };
    case "success":
      return {
        list: [response, ...state.list],
        status: {
          ...state.status,
          isLoadingAddProject: false,
          errorOnAddProject: null
        }
      };

    default:
      return state;
  }
}

/**
/**handles all the fetching change status 
 * activitie reducer stuff.
 * @returns the state modified
 * @param {*} payload the action payload 
 * @param {*} state the reducer state
 */
function changeActivitieStatusReducer(
  payload: Payload,
  state: ProjectsReducerState
): ProjectsReducerState {
  const { response, status } = payload;
  switch (status) {
    case "loading": {
      const filteredProjects = state.list.filter(
        project => project._id !== response.projectId
      );
      const [actualProject] = state.list.filter(
        project => project._id === response.projectId
      );
      const updatedActivities = actualProject.activities.map(activitie =>
        activitie._id === response.activitieId
          ? { ...activitie, status: response.newStatus }
          : activitie
      );
      return {
        ...state,
        list: [
          { ...actualProject, activities: updatedActivities },
          ...filteredProjects
        ]
      };
    }

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          errorOnChangingActivitieStatus: response
        }
      };
    case "success": {
      //state is already updated in "loading" for UX proposals,
      //there is no need to updated here.
      return state;
    }

    default:
      return state;
  }
}

/**
/**handles all the fetching add activitie reducer stuff.
 * @returns the state modified
 * @param {*} payload the action payload 
 * @param {*} state the reducer state
 */
function addActiviteReducer(
  payload: Payload,
  state: ProjectsReducerState
): ProjectsReducerState {
  const { response, status } = payload;
  switch (status) {
    case "success": {
      const filteredProjects = state.list.filter(
        project => project._id !== response._id
      );
      return {
        list: [response, ...filteredProjects],
        status: {
          ...state.status,
          isLoadingAddActivitie: false,
          errorOnAddingActivitie: null
        }
      };
    }

    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddActivitie: true,
          errorOnAddingActivitie: null
        }
      };

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddActivitie: false,
          errorOnAddingActivitie: response
        }
      };

    default:
      return state;
  }
}

/**handles all the fetching provider reducer stuff.
 * @returns the state modified
 * */
function fetchProjectsReducer(
  payload: Payload,
  state: ProjectsReducerState
): ProjectsReducerState {
  const { response, status } = payload;
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          errorLoadingProjects: null,
          isLoadingProjects: true
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          shouldFetchProjects: false,
          errorLoadingProjects: response,
          isLoadingProjects: false
        }
      };
    case "success":
      return {
        list: [...response],
        status: {
          ...state.status,
          shouldFetchProjects: false,
          errorLoadingProjects: null,
          isLoadingProjects: false
        }
      };
    default:
      return state;
  }
}
/*******All project addons are here*********/

/**handles all the fetching of add clients into projects stuff.
 * @returns the state modified
 * @param {Object} payload the action payload
 * @param {Object} state the reducer state
 */
function reduceStateFromAddedClient(
  payload: Payload,
  state: ProjectsReducerState
): ProjectsReducerState {
  const { response, status } = payload;
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: true,
          errorOnAddingClientIntoProject: null
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: false,
          errorOnAddingClientIntoProject: response
        }
      };
    case "success": {
      const reducedProjects = state.list.map(project =>
        project._id === response._id ? response : project
      );
      return {
        list: reducedProjects,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: false,
          errorOnAddingClientIntoProject: null
        }
      };
    }

    default:
      return state;
  }
}
/**handles all the fetching of removing clients of projects stuff.
 * @returns the state modified
 * @param {Object} payload the action payload
 * @param {Object} state the reducer state
 */
function reduceStateFromRemovedClient(
  payload: Payload,
  state: ProjectsReducerState
): ProjectsReducerState {
  const { response, status } = payload;
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: true,
          errorOnAddingClientIntoProject: null
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: false,
          errorOnAddingClientIntoProject: response
        }
      };
    case "success": {
      const reducedProjects = state.list.map(project =>
        project._id === response._id ? response : project
      );
      return {
        list: reducedProjects,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: false,
          errorOnAddingClientIntoProject: null
        }
      };
    }

    default:
      return state;
  }
}
export default projectReducer;
