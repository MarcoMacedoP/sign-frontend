import {
  ADD_PROJECT,
  ADD_ACTIVITE,
  ADD_COMMENT,
  CHANGE_ACTIVITY_TYPE,
  FETCH_PROJECTS
} from "../types/actionTypes";
// import {DONED, PENDING, IN_PROGRESS} from "../types/activitieTypes";

const initialState = {
  status: {
    isLoadingProjects: false,
    errorLoadingProjects: false,
    shouldFetchProjects: true,
    isLoadingAddActivitie: false,
    errorOnAddingActivitie: null,
    errorOnChangingActivitieStatus: null
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
    case FETCH_PROJECTS: {
      return fetchProjectsReducer(action.payload, state);
    }

    case ADD_PROJECT: {
      const {project: addedProject} = action.payload;
      return [...state, addedProject];
    }

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
    case CHANGE_ACTIVITY_TYPE: {
      const changedTypeActivitie = {
        ...payload.activitie,
        type: payload.newType
      };
      return state.map(project => {
        return {
          ...project,
          //map activities and update selected activitie
          activities: project.activities.map(activitie =>
            activitie.id === payload.activitie.id
              ? changedTypeActivitie
              : activitie
          )
        };
      });
    }

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
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          errorOnChangingActivitieStatus: response
        }
      };
    case "success": {
      const reducedProjects = state.list.filter(
        project => project._id !== response._id
      );
      return {
        list: [...reducedProjects, response],
        status: {
          ...state.status,
          errorOnChangingActivitieStatus: null
        }
      };
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
        list: [...filteredProjects, response],
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
          shouldFetchProjects: false,
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

export default projectReducer;
