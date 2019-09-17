import { ADD_PROJECT } from "../actionTypes";
const initialState = [
  {
    name: "mock",
    description: "Small desc",
    cutDate: new Date(),
    expenses: {
      name: "expense_1",
      description: "desc_1",
      cost: 900
    },
    incomes: {
      name: "income_1",
      description: "desc_2",
      value: 900
    }
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT: {
      const { project } = action.payload;
      return [...state, project];
    }
    default:
      return state;
  }
};
