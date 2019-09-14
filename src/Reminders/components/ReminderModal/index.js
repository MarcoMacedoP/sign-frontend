import { Modal } from "../../../global/components/Modal";

import React, { useEffect } from "react";
import { Input } from "../../../global/components/Input";
//hooks
import { useHandleState } from "../../../global/hooks/useHandleState";

export const ReminderModal = ({
  onClose,
  isOpen,
  title,
  description,
  date
}) => {
  const { state, addFormValueToState, addValueToState } = useHandleState({
    title,
    description,
    date,
    edit: false,
    remove: false
  });
  const toggleEditStatus = () => {
    if (state.edit) {
      addValueToState("edit", false);
    } else {
      addValueToState("edit", true);
    }
  };
  //set edit to null when unmount
  useEffect(() => {
    return;
  }, []);

  const ReminderModalLayout = ({ children }) => (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      onUnmount={() => {
        console.log("will unmount");
      }}
    >
      <button onClick={toggleEditStatus}>edit</button>
      <button>remove</button>
      {children}
    </Modal>
  );
  if (state.edit) {
    return (
      <ReminderModalLayout>
        <h2>Editar</h2>
        <Input
          name="title"
          label="Titulo del recordatorio"
          onChange={addFormValueToState}
          placeholder={title}
          value={state.title}
        />
        <Input
          name="description"
          label="Descripción"
          onChange={addFormValueToState}
          placeholder={description}
          value={state.description}
        />
        <Input
          name="date"
          label="Fecha del recordatorio"
          onChange={addFormValueToState}
          placeholder={date}
          value={state.date}
        />
      </ReminderModalLayout>
    );
  } else {
    return (
      <ReminderModalLayout>
        <h2>{title || "Titulo"}</h2>
        <p>{description || "Descripción del recordatorio"}</p>
        <p>{date || "12/03/2019"}</p>
      </ReminderModalLayout>
    );
  }
};
