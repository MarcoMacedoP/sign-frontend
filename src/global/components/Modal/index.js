import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { Blur, ModalContainer, CloseIcon } from "./styles";

export const Modal = ({ closeModal, children, isOpen }) => {
  if (isOpen) {
    blurApp();
    return createPortal(
      <Fragment>
        <Blur onClick={() => handleClose(closeModal)} />
        <ModalContainer>
          <CloseIcon onClick={() => handleClose(closeModal)}>
            close
          </CloseIcon>
          {children}
        </ModalContainer>
      </Fragment>,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};
function handleClose(closeModal) {
  blurApp(false);
  closeModal();
}
export function blurApp(blurStatus = true) {
  let app = document.getElementById("root");

  if (!blurStatus && app) {
    //Hey, stop the blur
    app.style.filter = "blur()";
  } else if (blurStatus && app) {
    //Blur the app
    app.style.filter = "blur(5px)";
  }
}
