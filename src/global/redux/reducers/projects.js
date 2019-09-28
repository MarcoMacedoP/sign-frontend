import {ADD_PROJECT, ADD_ACTIVITE} from "../actionTypes";
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
    activities: [
      {
        type: "PENDING",
        name: "Actividad pendiente",
        dueDate: "11/09/2019"
      },
      {
        type: "IN_PROGRESS",
        name: "Actividad en progreso",
        dueDate: "11/09/2019"
      },
      {
        type: "DONED",
        name: "Actividad terminada",
        dueDate: "11/09/2019"
      }
    ]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      const {project: addedProject} = action.payload;
      return [...state, addedProject];

    case ADD_ACTIVITE:
      const {project, activite} = action.payload;
      const updatedProject = {
        ...project,
        activities: [...project.activities, activite]
      };
      return [...state, updatedProject];

    default:
      return state;
  }
};
