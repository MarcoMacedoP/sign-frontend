import React from "react";
import { MaterialIcon } from "../../styles/foundations/MaterialIcon";

export const LongCard = ({ name, date, description }) => (
  <div>
    <picture />
    <p>{name || "name"}</p>
    <p>{description || "About this..."}</p>
    <date>{date || "04/08/2000"}</date>
    <MaterialIcon>arrow_forward_ios</MaterialIcon>
  </div>
);
