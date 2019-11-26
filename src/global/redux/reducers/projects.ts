import * as actionTypes from "../types/actionTypes";
//types
import { ProjectsState, actionType } from "../../../Projects/types";
import { AsyncAction, Payload } from "../types/AsyncActions";
const initialState: ProjectsState = {
  status: {
    getProjects: {
      shouldFetchProjects: true,
      status: null,
      data: ""
    },
    projectActions: {
      type: null,
      projectId: null,
      status: null
    },
    activitiesProject: {
      activitieId: "",
      type: null,
      status: null
    },
    providersProject: {
      providerId: "",
      status: null,
      type: null
    },
    clientsProject: {
      clientId: "",
      type: null,
      status: null
    },
    teamsProject: {
      teamId: "",
      type: null,
      status: null
    },
    teamInProject: {
      teamId: "",
      status: null,
      type: null
    }
  },
  list: [],
  projectsOfTeams: null
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
    //Providers into projects
    case actionTypes.ADD_PROVIDER_TO_PROJECT:
      return reduceStateFromActionOfProviders(payload, state, "ADD");
    case actionTypes.REMOVE_PROVIDER_TO_PROJECT:
      return reduceStateFromActionOfProviders(payload, state, "REMOVE");
    //Teams into projects
    case actionTypes.ADD_TEAM_TO_PROJECT:
      return reduceStateFromActionOfTeams(payload, state, "ADD");
    case actionTypes.REMOVE_TEAM_TO_PROJECT:
      return reduceStateFromActionOfTeams(payload, state, "REMOVE");
    case actionTypes.GET_TEAMS_PROJECTS:
      return reduceStateWithProjectsOfTeam(payload, state);

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
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  switch (status) {
    case "loading": {
      return {
        ...state,
        status: {
          ...state.status,
          projectActions: {
            type: "GET",
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
          projectActions: {
            type: "GET",
            status: "error",
            projectId: response.projectId,
            data: response.error
          }
        }
      };
    case "success": {

      const list = state.list.map((project) =>
          project._id === response._id
            ? { ...response, fullLoaded: true }
            : project)
      const filterList = filtrarRepetidos(list);

      return {
        ...state,
        list: filterList,
        status: {
          ...state.status,
          projectActions: {
            type: "GET",
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
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  switch (status) {
    case "loading":
      return {
        ...state,
        list: state.list.filter(
          (project) => project._id !== response.projectId
        ),
        status: {
          ...state.status,
          projectActions: {
            type: "REMOVE",
            status: "loading",
            projectId: response.projectId
          }
        }
      };

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          projectActions: {
            type: "REMOVE",
            status: "error",
            projectId: response.projectId,
            data: response.error
          }
        }
      };
    case "success": {
      //state is already updated in "loading" for UX proposals,
      //there is no need to updated state here.
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
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  switch (status) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          projectActions: {
            type: "UPDATE",
            status: "loading",
            projectId: response.projectId
          }
        }
      };

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          projectActions: {
            type: "UPDATE",
            status: "error",
            projectId: response.projectId,
            data: response.error
          }
        }
      };
    case "success":
      return {
        ...state,
        list: state.list.map((project) =>
          project._id === response._id ? response : project
        ),
        status: {
          ...state.status,
          projectActions: {
            type: "UPDATE",
            status: "success",
            projectId: response.projectId
          }
        }
      };

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
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  if (status === "success") {
    return {
      ...state,
      list: [response, ...state.list],
      status: {
        ...state.status,
        projectActions: {
          type: "ADD",
          status,
          projectId: response.projectId
        }
      }
    };
  } else {
    return {
      ...state,
      status: {
        ...state.status,
        projectActions: {
          type: "ADD",
          status,
          data: status === "error" && response.error
        }
      }
    };
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
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  switch (status) {
    case "loading": {
      const filteredProjects = state.list.filter(
        (project) => project._id !== response.projectId
      );
      const actualProject = state.list.find(
        (project) => project._id === response.projectId
      );
      if (actualProject) {
        const updatedActivities =
          actualProject.activities &&
          actualProject.activities.map((activitie) =>
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
      } else {
        return state;
      }
    }

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          activitiesProject: {
            type: "CHANGE_STATUS",
            activitieId: response.activitieId,
            projectId: response.projectId,
            status
          }
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
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  switch (status) {
    case "success": {
      const filteredProjects = state.list.filter(
        (project) => project._id !== response._id
      );
      return {
        ...state,
        list: [response, ...filteredProjects],
        status: {
          ...state.status,

          activitiesProject: {
            type: "ADD",
            activitieId: response.activitieId,
            projectId: response.projectId,
            status
          }
        }
      };
    }

    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          activitiesProject: {
            type: "ADD",
            activitieId: response.activitieId,
            projectId: response.projectId,
            status
          }
        }
      };

    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          activitiesProject: {
            type: "ADD",
            activitieId: response.activitieId,
            projectId: response.projectId,
            status,
            data: response.error
          }
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
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  if (status === "success") {
    const list =  state.list.length > 0 ? [...state.list, ...response] : response;
    const filteredList = filtrarRepetidos(list);
    return {
      ...state,
      list: filteredList,
      status: {
        ...state.status,
        getProjects: {
          shouldFetchProjects: false,
          status
        }
      }
    };
  } else {
    return {
      ...state,
      status: {
        ...state.status,
        getProjects: {
          shouldFetchProjects: false,
          status,
          data: response ? (response.error ? response.error : null) : null
        }
      }
    };
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
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  if (status === "success") {
    return {
      ...state,
      list: state.list.map((project) =>
        project._id === response._id
          ? { ...response, fullLoaded: true }
          : project
      ),
      status: {
        ...state.status,
        clientsProject: {
          clientId: response._id,
          status,
          type: "ADD"
        }
      }
    };
  } else {
    return {
      ...state,
      status: {
        ...state.status,
        clientsProject: {
          status,
          type: "ADD",
          clientId: response.clientId,
          data: response.error && response.error
        }
      }
    };
  }
}
/**handles all the fetching of removing clients of projects stuff.
 * @returns the state modified
 * @param {Object} payload the action payload
 * @param {Object} state the reducer state
 */
function reduceStateFromRemovedClient(
  payload: Payload,
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  if (status === "success") {
    return {
      ...state,
      list: state.list.map((project) =>
        project._id === response._id
          ? { ...response, fullLoaded: true }
          : project
      ),
      status: {
        ...state.status,
        clientsProject: {
          type: "REMOVE",
          status,
          clientId: response._id
        }
      }
    };
  } else {
    return {
      ...state,
      status: {
        ...state.status,
        clientsProject: {
          type: "REMOVE",
          status,
          clientId: response.clientId,
          data: status === "error" && response.error
        }
      }
    };
  }
}

/**Handles all the changes in providers in projects,
 *  reduce the state from removed and added provider in project.
 *  since once the action is dispatched the server response it's the same.
 * @param payload the action payload.
 * @param state the Project State
 * @param type the action type can be "ADD" or "REMOVE" does not have an effect on function,
 * it's just used for meta-data.
 */
function reduceStateFromActionOfProviders(
  payload: Payload,
  state: ProjectsState,
  type: actionType
): ProjectsState {
  const { status, response } = payload;
  if (status === "success") {
    return {
      ...state,
      list: state.list.map((project) =>
        project._id === response._id
          ? { ...response, fullLoaded: true }
          : project
      ),
      status: {
        ...state.status,
        providersProject: {
          providerId: response._id,
          status,
          type
        }
      }
    };
  } else {
    return {
      ...state,
      status: {
        ...state.status,
        providersProject: {
          providerId: response.providerId,
          status,
          type,
          data: status === "error" && response.error
        }
      }
    };
  }
}

function reduceStateFromActionOfTeams(
  payload: Payload,
  state: ProjectsState,
  type: actionType
): ProjectsState {
  const { status, response } = payload;
  if (status === "success") {
    return {
      ...state,
      list: state.list.map((project) =>
        project._id === response._id
          ? { ...response, fullLoaded: true }
          : project
      ),
      status: {
        ...state.status,
        teamsProject: {
          status,
          type
        }
      }
    };
  } else {
    return {
      ...state,
      status: {
        ...state.status,
        teamsProject: {
          status,
          type,
          data: status === "error" && response.error
        }
      }
    };
  }
}

function reduceStateWithProjectsOfTeam(
  payload: Payload,
  state: ProjectsState
): ProjectsState {
  const { response, status } = payload;
  switch (status) {
    case "success": {
      const projectsOfTeams = response.projects.map((project: any) => ({
        projectId: project._id,
        teamId: response.teamId,
        scope: response.scope
      }));
      const list =  state.list.length > 0
            ? [...response.projects, state.list]
            : response.projects
      const filteredList = filtrarRepetidos(list)

      return {
        ...state,
        list: filteredList,
        projectsOfTeams,
        status: {
          ...state.status,
          teamInProject: {
            status: payload.status,
            type: "GET"
          }
        }
      };
    }

    default:
      return {
        ...state,
        status: {
          ...state.status,
          teamInProject: {
            data: payload.response,
            status: payload.status,
            type: "GET"
          }
        }
      };
  }
}

function filtrarRepetidos(arregloConRepetidos: Array<any>) {
  const sinRepetidos = arregloConRepetidos.filter((valorActual, indiceActual, arreglo) => {
    //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
    return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
});
return sinRepetidos;
}

export default projectReducer;
