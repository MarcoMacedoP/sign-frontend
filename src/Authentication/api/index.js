import { callApi } from "../../global/functions/callApi";
import { Buffer } from "buffer";
export const authApi = {
  async login({ user, password }) {
    /*
        1. Obtener credenciales del usuario.
        2. Agregar a headers, basic auth.
        3. Esperar respuesta del server
        4.Todo ok?
            4.1 Si? Set state login
            4.2 No? Retornar error. 
         
         */
    const base64encodedData = Buffer.from(
      user + ":" + password
    ).toString("base64");
    const options = {
      method  : "GET",
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
  }
};
