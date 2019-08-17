import { callApi } from "../../global/functions/callApi";

const data = require("./MOCK_DATA.json");
export const providersApi = {
  list() {
    return new Promise((resolve, reject) => {
      //Fake API
      setTimeout(() => resolve(data), 300);
    });
    // return callApi("/badges");
    // throw new Error("It was a mistake!"); //Error state
    // return []; //Empty state
  },
  create(provider) {
    // return callApi(`/badges`, {
    //   method : "POST",
    //   body   : JSON.stringify(badge)
    // });
    throw new Error("It was a mistake!"); //Error state
  },
  read(providerId) {
    // return callApi(`/badges/${badgeId}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(data[providerId]), 300);
    });
    // throw new Error("Error 505");
  },
  update(providerId, updates) {
    return callApi(`/badges/${providerId}`, {
      method : "PUT",
      body   : JSON.stringify(updates)
    });
  },
  // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
  remove(providerId) {
    return callApi(`/badges/${providerId}`, {
      method : "DELETE"
    });
  }
};
