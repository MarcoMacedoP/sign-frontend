import React from "react";
//styled-components
import { Error } from "./styles";
/**Shows an ErrorMessage component. This component will
 * be rendered only if there is an error
 * @param {*} error the error that are going to be rendered
 * @param {*} onClose the function to be called to make component close
 */
export const ErrorMessage = ({ error = false, onClose, className }) => {
  if (error) {
    const isErrorString = typeof error === "string";
    const errorMessage = isErrorString ? error : error.message;

    return (
      <Error message={errorMessage} onClose={onClose} className={className} />
    );
  } else return null;
};
