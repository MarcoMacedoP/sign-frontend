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
    loadingProjects: false,
    errorLoadingProjects: false,
    shouldFetchProjects: true
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

    case ADD_ACTIVITE: {
      const {project, activitie} = action.payload;
      const {activities = []} = project;
      const updatedProject = {
        ...project,
        activities: [...activities, activitie]
      };
      //It works but it's kinda ugly, maybe needs some fix
      const actualProjectPosition = state.indexOf(project) - 1;
      const updatedState = state.slice(actualProjectPosition, 1);
      return [...updatedState, updatedProject];
    }

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
          loadingProjects: true
        }
      };
    case "error":
      return {
        ...state,
        status: {
          ...state.status,
          shouldFetchProjects: false,
          errorLoadingProjects: response,
          loadingProjects: false
        }
      };
    case "success":
      return {
        list: [...response],
        status: {
          ...state.status,
          shouldFetchProjects: false,
          errorLoadingProjects: null,
          loadingProjects: false
        }
      };
    default:
      return state;
  }
}

export default projectReducer;
