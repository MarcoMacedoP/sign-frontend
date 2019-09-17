import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  user: {
    isLoged: true
  },
  projects: [
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
  ]
};
export default createStore(rootReducer, initialState);
