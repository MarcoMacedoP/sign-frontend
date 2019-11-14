import {
  ADD_PROJECT,
  ADD_ACTIVITE,
  ADD_COMMENT,
  CHANGE_ACTIVITY_TYPE,
  FETCH_PROJECTS,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
  ADD_CLIENT_TO_PROJECT,
  REMOVE_CLIENT_OF_PROJECT
} from "../types/actionTypes";
// import {DONED, PENDING, IN_PROGRESS} from "../types/activitieTypes";

const initialState = {
  status: {
    isLoadingProjects: false,
    errorLoadingProjects: false,
    shouldFetchProjects: true,
    isLoadingAddActivitie: false,
    errorOnAddingActivitie: null,
    errorOnChangingActivitieStatus: null,
    isLoadingAddProject: false,
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
          comments: [
            {_id: null, userId: null, date: null, content: ""}
          ]
        }
      ]
    }
  ]
};

function projectReducer(state = initialState, action) {
  const {payload, type} = action;

  switch (type) {
    //CRUD PROJECTS
    case FETCH_PROJECTS:
      return fetchProjectsReducer(action.payload, state);
    case ADD_PROJECT:
      return reduceStateFromAddedProject(action.payload, state);
    case UPDATE_PROJECT:
      return reduceStateFromUpdatedProject(action.payload, state);
    case REMOVE_PROJECT:
      return reduceStateFromRemovedProject(action.payload, state);
    // END CRUD PROJECTS

    case ADD_ACTIVITE:
      return addActiviteReducer(payload, state);

    case ADD_COMMENT: {
      const updatedActivitie = {
        ...payload.activitie,
        comments: [...payload.activitie.comments, payload.comment]
      };
      const activitieId = payload.activitie.id;

      return state.map(project => ({
        ...project,
        //map activite and update activitie where id equals payload activitie
        activities: project.activities.map(iterableActivitie =>
          iterableActivitie.id === activitieId
            ? updatedActivitie
            : iterableActivitie
        )
      }));
    }

    //Change the activitie.type depending on wich section it's dropped
    case CHANGE_ACTIVITY_TYPE:
      return changeActivitieStatusReducer(payload, state);

    //******addons******************

    //Clients into proejcts reducer
    case ADD_CLIENT_TO_PROJECT:
      return reduceStateFromAddedClient(payload, state);
    case REMOVE_CLIENT_OF_PROJECT:
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
function reduceStateFromRemovedProject({status, response}, state) {
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
function reduceStateFromUpdatedProject({status, response}, state) {
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
function reduceStateFromAddedProject({status, response}, state) {
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
function changeActivitieStatusReducer({status, response}, state) {
  switch (status) {
    case "loading": {
      const filteredProjects = state.list.filter(
        project => project._id !== response.projectId
      );
      const [actualProject] = state.list.filter(
        project => project._id === response.projectId
      );
      const updatedActivities = actualProject.activities.map(
        activitie =>
          activitie._id === response.activitieId
            ? {...activitie, status: response.newStatus}
            : activitie
      );
      return {
        ...state,
        list: [
          {...actualProject, activities: updatedActivities},
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
function addActiviteReducer({status, response}, state) {
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
      return {};
  }
}

/**handles all the fetching provider reducer stuff.
 * @returns the state modified
 * */
function fetchProjectsReducer({status, response}, state) {
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          errorLoadingProjects: false,
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
function reduceStateFromAddedClient({response, status}, state) {
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
function reduceStateFromRemovedClient({response, status}, state) {
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
