import React from "react";

export const Activitie = ({ name, dueDate }) => (
  <div>
    <p>{name || "activitie name"}</p>
    <p>{dueDate || "due date"}</p>
  </div>
);
