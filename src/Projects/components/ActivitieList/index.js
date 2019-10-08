import React from "react";
//components
import {SmallEmptyState} from "../../../global/components/";
import {Activitie} from "../Activitie";
//redux
import {connect} from "react-redux";
import {changeActivitieType} from "../../../global/redux/actions/projects";
//styled-components
import {ContainerCard} from "./styles";
import {H3} from "../../../global/styles/texts";

function ActivitieList({
  activities = [],
  title = "",
  activitieType,
  project,
  changeActivitieType
}) {
  const handleOnDragOver = event => event.preventDefault();
  const handleOnDrop = event => {
    ;
    event.preventDefault();
    const activitie = JSON.parse(event.dataTransfer.getData("text"));
    changeActivitieType({project, activitie, newType: activitieType});
  };
  const handleDrag = (event, activitie) => {
    ;
    event.dataTransfer.setData("text", JSON.stringify(activitie));
  };
  return (
    <ContainerCard
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    >
      <H3>{title}</H3>
      {activities.length !== 0 ? (
        activities.map(activitie => (
          <Activitie
            activitie={activitie}
            onDragStart={event => handleDrag(event, activitie)}
          />
        ))
      ) : (
        <EmptyActivities title={title.toLowerCase()} />
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

export default connect(
  null,
  {changeActivitieType}
)(ActivitieList);
