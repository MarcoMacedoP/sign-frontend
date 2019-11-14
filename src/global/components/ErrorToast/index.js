import React from "react";
import {ErrorMessage} from "../ErrorMessage";
import styled from "styled-components";

/**
 * Adds an Error Message postion fixed to meked a toast. lol
 */

const StyledErrorMessage = styled(ErrorMessage)`
  position: fixed;
  top: unset;
  left: unset;
  bottom: 3rem;
  right: 1.5rem;
  border-radius: 0.5rem;
  max-height: 2.5rem;
  margin: 0;
  align-items: center;
`;

export const ErrorToast = ({error, onClose}) => (
  <StyledErrorMessage error={error} onClose={onClose} />
);
