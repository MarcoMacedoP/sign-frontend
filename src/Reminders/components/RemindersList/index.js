//components
import React, { Fragment } from "react";
//styled-components
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";

export const RemindersList = ({ reminders, handleAddReminder, small }) => (
  <Fragment>
    <h4>Recordatorios recientes...</h4>
    <MaterialIcon>search</MaterialIcon>
    {reminders.map(reminder => (
      <p>{reminder.title}</p>
    ))}
    <label>Agregar un recordatorio</label>
    <MaterialIcon onClick={handleAddReminder}>add_circle_outline</MaterialIcon>
  </Fragment>
);
