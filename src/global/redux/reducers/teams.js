import {ADD_TEAM} from "../types/actionTypes";

const initialState = [
  {
    id: 1,
    name: "Team mock",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    about: "Team for develpment React library"
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM:
      return [...state, action.payload.team];

    default:
      return [...state];
  }
};
