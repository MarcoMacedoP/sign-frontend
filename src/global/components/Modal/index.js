import React from "react";
import { createPortal } from "react-dom";
import { Blur, ModalContainer, CloseIcon } from "./styles";

export const Modal = ({ closeModal, children, isOpen }) => {
  if (isOpen) {
    blurApp();
    return createPortal(
      <Blur onClick={() => handleClose(closeModal)}>
        <ModalContainer
          onClick={(e) =>
            e.stopPropagation() /* Whithout this Modal closes click D: fix this. */}>
          <CloseIcon onClick={() => handleClose(closeModal)}>
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
