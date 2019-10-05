import {
  LOG_IN,
  LOG_OUT,
  ERROR_ON_USER_UPDATE,
  RECIEVE_USER_UPDATE,
  REQUEST_USER_UPDATE
} from "../actionTypes";

const initialState = {
  error: null,
  loading: false,
  isLoged: false
  // id: 99,
  // name: "Marco",
  // lastname: "Siegman",
  // picture:
  //   "https://instagram.fgdl1-1.fna.fbcdn.net/vp/ec5291dfade7a2ccf9acb92288bffaaf/5E3599ED/t51.2885-19/s150x150/39600341_264027471102917_8064224058029375488_n.jpg?_nc_ht=instagram.fgdl1-1.fna.fbcdn.net",
  // bio: "Fullstack developer",
  // job: "This is my bio"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...action.payload,
        isLoged: true
      };

    case LOG_OUT:
      return {
        isLoged: false
      };
    case REQUEST_USER_UPDATE:
      return {...state, loading: true, error: null};
    case ERROR_ON_USER_UPDATE:
      return {...state, error: action.payload.error, loading: false};
    case RECIEVE_USER_UPDATE:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null
      };

    default:
      return state;
  }
}
