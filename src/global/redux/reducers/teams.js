import {ADD_TEAM} from "../actionTypes";

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
      const addedTeam = action.payload.team;
      //return teams filtered
      return state.map(team =>
        team.id === addedTeam.id ? addedTeam : team
      );

    default:
      return [...state];
  }
};
