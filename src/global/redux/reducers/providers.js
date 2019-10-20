import {GET_PROVIDERS} from "../types/actionTypes";

const initalState = {
  list: [
    {
      name: "",
      about: "",
      email: "",
      phone: "",
      services: [],
      products: []
    }
  ],
  status: {
    loadingProviders: false,
    errorOnGetProviders: null
  }
};

export default (state = initalState, action) => {
  switch (action.type) {
    //----get providers----------------
    case GET_PROVIDERS:
      switch (action.payload.status) {
        case "loading":
          return {
            ...state,
            status: {
              ...state.status,
              loadingProviders: true,
              errorOnGetProviders: null
            }
          };
        case "success":
          return {
            list: [...action.payload.response],
            status: {
              ...state.status,
              loadingProviders: false,
              errorOnGetProviders: null
            }
          };
        case "error":
          return {
            ...state,
            status: {
              ...state.status,
              loadingProviders: false,
              errorOnGetProviders: action.payload.response
            }
          };
        default:
          return state;
      }

    default:
      return state;
  }
};
