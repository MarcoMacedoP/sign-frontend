//components
import React, { Fragment } from "react";
import { ReminderModal } from "../ReminderModal";
//styled-components
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";

<<<<<<< HEAD
export const RemindersList = ({ reminders, handleAddReminder, small }) => (
=======
export const RemindersList = ({
  reminders,
  handleAddReminder,
  handleModal,
  modalIsOpen
}) => (
>>>>>>> test-reminders-modals
  <Fragment>
    <ReminderModal isOpen={modalIsOpen} onClose={handleModal} />
    <h4>Recordatorios recientes...</h4>
    <MaterialIcon>search</MaterialIcon>
    {reminders.map(reminder => (
      <p onClick={handleModal}>{reminder.title}</p>
    ))}
    <label>Agregar un recordatorio</label>
    <MaterialIcon onClick={handleAddReminder}>add_circle_outline</MaterialIcon>
  </Fragment>
);
