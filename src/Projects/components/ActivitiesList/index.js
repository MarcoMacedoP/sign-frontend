//libs
import React from "react";
//components
import { Activitie } from "../Activitie";
export const ActivitiesList = ({ activities }) => (
  <li>
    {activities.map(activitie => (
      <Activitie {...activitie} />
    ))}
  </li>
);
