import React from "react";
//components
import {SmallEmptyState} from "../../../global/components/";
import {Activitie} from "../Activitie";
//styled-components
import {ContainerCard} from "./styles";
import {H3} from "../../../global/styles/texts";

export function ActivitieList({activities = [], title = ""}) {
  return (
    <ContainerCard>
      <H3>{title}</H3>
      {activities.length === 0 ? (
        <EmptyActivities title={title.toLowerCase()} />
      ) : (
        activities.map(activitie => <Activitie {...activitie} />)
      )}
    </ContainerCard>
  );
}
const EmptyActivities = ({title}) => (
  <SmallEmptyState
    showTitle={false}
    message={`Parece que aún no hay actividades ${title}.`}
    callToAction="Para agregar una arrastrala aquí."
  ></SmallEmptyState>
);
