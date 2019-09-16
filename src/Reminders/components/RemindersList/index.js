//components
import React from "react";
import { ReminderModal } from "../ReminderModal";
import { ComponentList } from "../../../global/components/ComponetList";
//styled-components
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";

export const RemindersList = ({
  reminders,
  handleAddReminder,
  handleModal,
  modalIsOpen
}) => (
  <ComponentList title="Recordatorios recientes">
    <ReminderModal isOpen={modalIsOpen} onClose={handleModal} />
    {reminders.map(reminder => (
      <p onClick={handleModal}>{reminder.title}</p>
    ))}
    <label>Agregar un recordatorio</label>
    <MaterialIcon onClick={handleAddReminder}>add_circle_outline</MaterialIcon>
  </ComponentList>
);
