import React from "react";
import { Activitie } from "../Activitie";
//styled-components
import { ContainerCard } from "./styles";

export function ActivitieList({ activities = [] }) {
  //no activities, show empty state
  if (activities.length === 0) return <h3>No hay activites</h3>;
  //else show activities
  else
    return (
      <ContainerCard>
        {activities.map(activitie => (
          <Activitie {...activitie} />
        ))}
      </ContainerCard>
    );
}
