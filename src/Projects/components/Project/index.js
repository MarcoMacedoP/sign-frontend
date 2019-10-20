import React from "react";
import {LongCard} from "../../../global/components";

export const Project = ({
  name,
  description,

  onClick
}) => <LongCard onClick={onClick} date={description} title={name} />;
