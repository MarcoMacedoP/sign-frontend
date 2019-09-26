//libs
import React from "react";
//components
import {Modal} from "../../../global/components/";

export function AddActivitie({projectId, isShowed, onClose}) {
  // const handleAddActivie = () => console.log("hello");

  return (
    <Modal isOpen={isShowed} onClose={onClose}>
      Desde aquí se agrega una activie :p
    </Modal>
  );
}
