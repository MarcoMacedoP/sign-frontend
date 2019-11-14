import { useState } from "react";
// functions
import { blurApp } from "../functions/blurApp";

export function useModalState(initialModalState = false) {
  const [modalIsOpen, setModalIsOpen] = useState(initialModalState);
  function toggleModal() {
    if (modalIsOpen) {
      setModalIsOpen(false);
      blurApp(false);
    } else {
      setModalIsOpen(true);
      blurApp(true);
    }
  }

  return [modalIsOpen, toggleModal, setModalIsOpen];
}
