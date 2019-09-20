import React from "react";
import { LongCard } from "../../../global/components/";

export const Projects = ({ name, description, cost, cutDate, onClick }) => (
  <LongCard onClick={onClick} date={cutDate.toString()} title={name} />
);
