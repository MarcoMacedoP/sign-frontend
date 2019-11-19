import React from "react";
import { Icon } from "../Icon";
//styled-components
import { Info } from "./styles";
/**
 * Shows a float message with a close button.
 * @param {*} onClose function to be called when close button is clicked.
 * @param {*} message the message to be showed
 */
export const InfoMessage = ({ onClose, message, className }) =>
  message ? (
    <Info className={className}>
      {message}
      <Icon icon="close" onClick={onClose} />
    </Info>
  ) : null;
