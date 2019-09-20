import React from "react";
import { LongCard } from "../../../global/components";

export const Project = ({ name, description, cost, dueDate, onClick }) => (
  <LongCard onClick={onClick} date={dueDate} title={name} />
);
