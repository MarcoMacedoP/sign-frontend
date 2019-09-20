import React from "react";
import { Activitie } from "../Activitie";

export function ActivitieList({ activities = [] }) {
  //no activities, show empty state
  if (activities.length === 0) return <h3>No hay activites</h3>;
  //else show activities
  else
    return (
      <li>
        {activities.map(activitie => (
          <Activitie {...activitie} />
        ))}
      </li>
    );
}
