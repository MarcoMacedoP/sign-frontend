import React from "react";
//styled-components
import {Error, Icon} from "./styles";
/**Shows an ErrorMessage component. This component will
 * be rendered only if there is an error
 * @param {*} error the error that are going to be rendered
 * @param {*} onClose the function to be called to make component close
 */
export const ErrorMessage = ({error = false, onClose}) => {
  return (
    <>
      {error && typeof error === "string" && (
        <Error>
          {error}
          <Icon icon="close" onClick={onClose} />
        </Error>
      )}
    </>
  );
};
