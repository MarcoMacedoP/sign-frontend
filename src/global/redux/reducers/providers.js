import {
  GET_PROVIDERS,
  SHOULD_FETCH_PROVIDERS,
  ADD_PROVIDER
} from "../types/actionTypes";

const initalState = {
  list: [
    {
      provider_id: "",
      name: "",
      about: "",
      email: "",
      phone: "",
      image_url: "",
      incomes: []
    }
  ],
  status: {
    shouldFetchProviders: true,
    loadingProviders: false,
    loadingAddProvider: false,
    errorOnGetProviders: null,
    errorOnAddProvider: null
  }
};

export default (state = initalState, action) => {
  switch (action.type) {
    //***********add providers***********
    case ADD_PROVIDER:
      switch (action.payload.status) {
        case "success":
          return {
            list: [...state.list, ...action.payload.response],
            status: {
              ...state.status,
              loadingAddProvider: false,
              errorOnAddProvider: null
            }
          };
        case "loading":
          return {
            ...state,
            status: {
              ...state.status,
              loadingAddProvider: true,
              errorOnAddProvider: null
            }
          };
        case "error":
          return {
            ...state,
            status: {
              ...state.status,
              loadingAddProvider: false,
              errorOnAddProvider: action.payload.response
            }
          };

        default:
          return state;
      }
    //***********end add providers***********

    //***********get providers***********
    case SHOULD_FETCH_PROVIDERS:
      return {
        ...state,
        status: {
          ...state.status,
          shouldFetchProviders: action.payload
        }
      };
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
    //***********end get providers***********

    default:
      return state;
  }
};