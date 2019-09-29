import {ADD_PROJECT, ADD_ACTIVITE, ADD_COMMENT} from "../actionTypes";
const initialState = [
  {
    name: "Responsive web site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec magna a nulla varius tempor eget quis arcu. Aliquam at magna ornare, imperdiet nunc accumsan, commodo lorem. Morbi accumsan lobortis augue.",
    dueDate: new Date().toLocaleDateString,
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
        id: 1,
        type: "PENDING",
        name: "Actividad pendiente",
        dueDate: "11/09/2019",
        comments: [
          {
            date: new Date().toISOString(),
            id: 1,
            userId: 1,
            content: "This is a comment example from the mock."
          }
        ]
      },
      {
        id: 2,
        type: "IN_PROGRESS",
        name: "Actividad en progreso",
        dueDate: "11/09/2019"
      },
      {
        id: 3,
        type: "DONED",
        name: "Actividad terminada",
        dueDate: "11/09/2019"
      }
    ]
  }
];

function projectReducer(state = initialState, action) {
  const {payload, type} = action;

  switch (type) {
    case ADD_PROJECT:
      const {project: addedProject} = action.payload;
      return [...state, addedProject];

    case ADD_ACTIVITE:
      const {project, activitie} = action.payload;
      const {activities = []} = project;
      const updatedProject = {
        ...project,
        activities: [...activities, activitie]
      };
      //It works but it's kinda ugly, maybe needs some fix
      const actualProjectPosition = state.indexOf(project) - 1;
      const updatedState = state.slice(actualProjectPosition, 1);
      return [...updatedState, updatedProject];

    case ADD_COMMENT:
      const updatedActivitie = {
        ...payload.activitie,
        comments: [...payload.activitie.comments, payload.comment]
      };
      const activitieId = payload.activitie.id;

      return state.map(project => ({
        ...project,
        //map activite and update activitie where id equals payload activitie
        activities: project.activities.map(iterableActivitie =>
          iterableActivitie.id === activitieId
            ? updatedActivitie
            : iterableActivitie
        )
      }));

    default:
      return state;
  }
}

export default projectReducer;
