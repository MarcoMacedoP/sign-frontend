import React from "react";
import { LongCard } from "../../../global/components/";

export const Projects = ({ name, description, cost, cutDate }) => (
  <LongCard date={cutDate.toString()} title={name} />
);
