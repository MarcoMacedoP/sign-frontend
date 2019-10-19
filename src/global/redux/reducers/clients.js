import {GET_CLIENTS} from "../types/actionTypes";
const initialState = {
  list: [
    {
      name: "mock",
      lastname: "client",
      email: "mock@example.com",
      phone: "",
      comments: [
        {
          content: "comment mock",
          date: "this is the date",
          userId: "23"
        }
      ],
      projects: []
    }
  ],
  status: {
    loadingClients: false,
    errorOnGetClients: null
  }
};

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
    //-----------------------------------
    case GET_CLIENTS:
      const {status, response} = action.payload;

      switch (status) {
        case "success":
          return {
            ...state,
            status: {
              loadingClients: false,
              errorOnGetClients: null
            },
            list: [...response]
          };
        case "error":
          return {
            ...state,
            status: {
              loadingClients: false,
              errorOnGetClients: response
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

    default:
      return state;
  }
}
