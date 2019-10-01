import {LOG_IN, LOG_OUT} from "../actionTypes";

const initialState = {
  isLoged: true,
  name: "Marco",
  lastname: "Siegman",
  picture:
    "https://instagram.fgdl1-1.fna.fbcdn.net/vp/ec5291dfade7a2ccf9acb92288bffaaf/5E3599ED/t51.2885-19/s150x150/39600341_264027471102917_8064224058029375488_n.jpg?_nc_ht=instagram.fgdl1-1.fna.fbcdn.net",
  bio: "Fullstack developer",
  job: "This is my bio"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      const {user} = action.payload;
      debugger;
      return {
        ...user,
        isLoged: true
      };
    }

    case LOG_OUT: {
      return {
        isLoged: false
      };
    }
    default:
      return state;
  }
}
