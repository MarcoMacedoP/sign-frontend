import {GET_CLIENTS, ADD_CLIENT} from "../types/actionTypes";
const initialState = {
  list: [
    {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      comments: [
        {
          content: "",
          date: "",
          userId: ""
        }
      ],
      projects: []
    }
  ],
  status: {
    loadingClients: false,
    errorOnGetClients: null,
    loadingAddCient: false,
    errorOnAddClient: null
  }
};

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
    //-----------get clients------------------------
    case GET_CLIENTS:
      switch (action.payload.status) {
        case "success":
          return {
            ...state,
            status: {
              loadingClients: false,
              errorOnGetClients: null
            },
            list: [...action.payload.response]
          };
        case "error":
          return {
            ...state,
            status: {
              loadingClients: false,
              errorOnGetClients: action.payload.response
            }
          };

        case "loading":
          return {
            ...state,
            status: {
              loadingClients: true,
              errorOnGetClients: null
            }
          };

        default:
          return state;
      }
    //-------------add client--------------------
    case ADD_CLIENT:
      switch (action.payload.status) {
        case "success":
          return {
            ...state,
            status: {
              loadingAddCient: false,
              errorOnAddClient: null
            },
            list: [...state.list, action.payload.response]
          };
        case "error":
          return {
            ...state,
            status: {
              ...state.status,
              loadingAddCient: false,
              errorOnAddClient: action.payload.response
            }
          };
        case "loading":
          return {
            ...state,
            status: {
              loadingAddCient: true,
              errorOnAddClient: null
            }
          };

        default:
          return state;
      }

    default:
      return state;
  }
}
