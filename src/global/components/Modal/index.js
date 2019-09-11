import React from "react";
import { createPortal } from "react-dom";
import { Blur, ModalContainer, CloseIcon } from "./styles";

export const Modal = ({ closeModal, children, isOpen, onClose }) => {
  
 

  if (isOpen) {
    blurApp();
    return createPortal(
      <Blur onClick={() => handleClose(closeModal || onClose)}>
        <ModalContainer
          onClick={(e) =>
            e.stopPropagation() /* Whithout this Modal closes click D: fix this. */}>
          <CloseIcon onClick={() => handleClose(closeModal || onClose)}>
            close
          </CloseIcon>
          {children}
        </ModalContainer>
      </Blur>,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};


export function handleClose(closeModal) {
  blurApp(false);
  closeModal();
}

function blurApp(blurStatus = true) {
  let app = document.getElementById("root");

  if (!blurStatus && app) {
    //Hey, stop the blur
    app.style.filter = "blur()";
  } else if (blurStatus && app) {
    //Blur the app
    app.style.filter = "blur(5px)";
  }
}
