//Functions and Classes
import { callApi } from "../../global/functions/callApi";
import { Buffer } from "buffer";
import { saveToken } from "../../global/functions/saveToken";

export const authApi = {
  async login({ user, password }) {
    const base64encodedData = Buffer.from(
      user + ":" + password
    ).toString("base64");
    const options = {
      method  : "POST",
      headers : {
        Authorization : `Basic ${base64encodedData}`
      }
    };
    try {
      const data = await callApi("/auth/login", options);
      return data;
    } catch (error) {
      throw new Error(
        "Contraseña erronea o usario inexistente 🤷🏽‍♂️ "
      );
    }
  },
  async signup({ name, lastname, email, password }) {
    const options = {
      method : "POST",
      body   : JSON.stringify({ name, lastname, email, password })
    };

    try {
      const token = await callApi("/auth/signup", options);
      saveToken(token);
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
};
