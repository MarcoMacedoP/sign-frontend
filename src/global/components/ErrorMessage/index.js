import React from "react";
//styled-components
import {Error, Icon} from "./styles";

export const ErrorMessage = ({error = false, onClose}) => {
  return (
    <>
      {isError && (
        <Error>
          {error}
          <Icon icon="close" onClick={onClose} />
        </Error>
      )}
    </>
  );
};
