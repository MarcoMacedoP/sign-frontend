import React from "react";
import { SmallEmptyState } from "../../../global/components";
import { AddButton } from "../../../global/components";

export const EmptyReminders = ({ handleAddReminder }) => (
  <SmallEmptyState message="Parece que aún no hay recordatorios">
    <h4>¡Sé el primero en agregar uno!</h4>
    <AddButton position="static" onClick={handleAddReminder} />
  </SmallEmptyState>
);
