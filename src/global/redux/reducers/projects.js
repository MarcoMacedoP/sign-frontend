import { ADD_PROJECT } from "../actionTypes";
const initialState = [
  {
    name: "mock",
    description: "Small desc",
    dueDate: new Date().toDateString(),
    id: 1,
    expenses: {
      name: "expense_1",
      description: "desc_1",
      cost: 900
    },
    incomes: {
      name: "income_1",
      description: "desc_2",
      value: 900
    },
    activities: {
      pending: [
        {
          name: "Actividad pendiente",
          dueDate: "11/09/2019"
        }
      ],
      inProgress: [
        {
          name: "Actividad en progreso",
          dueDate: "11/09/2019"
        }
      ],
      doned: [
        {
          name: "Actividad terminada",
          dueDate: "11/09/2019"
        }
      ]
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
