import React from "react";
import { createPortal } from "react-dom";
import { Blur, ModalContainer, CloseIcon } from "./styles";

export const Modal = ({ children, isOpen, onClose, className = "" }) =>
  isOpen
    ? createPortal(
        <Blur onClick={onClose}>
          <ModalContainer
            className={className}
            onClick={
              e =>
                e.stopPropagation() /* Whithout this Modal closes click D: fix this. */
            }
          >
            <CloseIcon onClick={onClose}>close</CloseIcon>
            {children}
          </ModalContainer>
        </Blur>,
        document.getElementById("modal")
      )
    : null;
