import * as actionTypes from "../types/actionTypes";
//types
import { ProjectsReducerState } from "./types/projects.interface";
import { AsyncAction, Payload, AsyncActionStatus } from "./types/AsyncActions";

const initialState: ProjectsReducerState = {
  status: {
    isLoadingProjects: false,
    errorLoadingProjects: false,
    shouldFetchProjects: true,
    isLoadingAddActivitie: false,
    errorOnAddingActivitie: null,
    errorOnChangingActivitieStatus: null,
    isLoadingAddProject: false,
    getProject: {
      projectId: null,
      status: null
    },
    errorOnAddProject: null,
    isLoadingRemoveProject: false,
    errorOnRemoveProject: null,
    isLoadingUpdateProject: false,
    errorOnUpdateProject: null,
    isLoadingAddingClientIntoProject: false,
    errorOnAddingClientIntoProject: null
  },
  list: [
    {
      _id: null,
      name: "",
      description: "",
      expenses: [],
      activities: [
        {
          _id: "",
          name: "",
          status: "",
          comments: [{ _id: null, userId: null, date: null, content: "" }]
        }
      ]
    }
  ]
};

function projectReducer(state = initialState, action: AsyncAction) {
  const { payload, type } = action;

  switch (type) {
    //CRUD PROJECTS
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
function reduceStateFromRemovedProject(payload: Payload, state) {
  const { response, status } = payload;
  switch (status) {
    case AsyncActionStatus.loading: {
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

    case AsyncActionStatus.error:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingRemoveProject: false,
          errorOnRemoveProject: response
        }
      };
    case AsyncActionStatus.success: {
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
function reduceStateFromUpdatedProject(payload: Payload, state) {
  const { response, status } = payload;
  switch (status) {
    case AsyncActionStatus.loading:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingUpdateProject: true,
          errorOnUpdateProject: null
        }
      };

    case AsyncActionStatus.error:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingUpdateProject: false,
          errorOnUpdateProject: response
        }
      };
    case AsyncActionStatus.success: {
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
function reduceStateFromAddedProject(payload: Payload, state) {
  const { response, status } = payload;
  switch (status) {
    case AsyncActionStatus.loading:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddProject: true,
          errorOnAddProject: null
        }
      };
    case AsyncActionStatus.error:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddProject: false,
          errorOnAddProject: response
        }
      };
    case AsyncActionStatus.success:
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
function changeActivitieStatusReducer(payload: Payload, state) {
  const { response, status } = payload;
  switch (status) {
    case AsyncActionStatus.loading: {
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

    case AsyncActionStatus.error:
      return {
        ...state,
        status: {
          ...state.status,
          errorOnChangingActivitieStatus: response
        }
      };
    case AsyncActionStatus.success: {
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
function addActiviteReducer(payload: Payload, state) {
  const { response, status } = payload;
  switch (status) {
    case AsyncActionStatus.success: {
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

    case AsyncActionStatus.loading:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddActivitie: true,
          errorOnAddingActivitie: null
        }
      };

    case AsyncActionStatus.error:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddActivitie: false,
          errorOnAddingActivitie: response
        }
      };

    default:
      return {};
  }
}

/**handles all the fetching provider reducer stuff.
 * @returns the state modified
 * */
function fetchProjectsReducer(payload: Payload, state) {
  const { response, status } = payload;
  switch (status) {
    case AsyncActionStatus.loading:
      return {
        ...state,
        status: {
          ...state.status,
          errorLoadingProjects: false,
          isLoadingProjects: true
        }
      };
    case AsyncActionStatus.error:
      return {
        ...state,
        status: {
          ...state.status,
          shouldFetchProjects: false,
          errorLoadingProjects: response,
          isLoadingProjects: false
        }
      };
    case AsyncActionStatus.success:
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
function reduceStateFromAddedClient(payload: Payload, state) {
  const { response, status } = payload;
  switch (status) {
    case AsyncActionStatus.loading:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: true,
          errorOnAddingClientIntoProject: null
        }
      };
    case AsyncActionStatus.error:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: false,
          errorOnAddingClientIntoProject: response
        }
      };
    case AsyncActionStatus.success: {
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
function reduceStateFromRemovedClient(payload: Payload, state) {
  const { response, status } = payload;
  switch (status) {
    case AsyncActionStatus.loading:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: true,
          errorOnAddingClientIntoProject: null
        }
      };
    case AsyncActionStatus.error:
      return {
        ...state,
        status: {
          ...state.status,
          isLoadingAddingClientIntoProject: false,
          errorOnAddingClientIntoProject: response
        }
      };
    case AsyncActionStatus.success: {
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
