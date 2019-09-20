import React from "react";
import { Activitie } from "../Activitie";
//styled-components
import { ContainerCard } from "./styles";
import { H3 } from "../../../global/styles/texts";

export function ActivitieList({ activities = [], title }) {
  //no activities, show empty state
  if (activities.length === 0) return <h3>No hay activites</h3>;
  //else show activities
  else
    return (
      <ContainerCard>
        <H3>{title}</H3>
        {activities.map(activitie => (
          <Activitie {...activitie} />
        ))}
      </ContainerCard>
    );
}
