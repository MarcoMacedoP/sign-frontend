import React from "react";
//components
import {ActivitieList} from "../ActivitieList";
import {InformationHeader} from "../../../global/components/InformationHeader";
//styled-components
import {PageContainer} from "../../../global/styles/Containers";
import {Activities, ActivitiesContainer} from "./styles";
import {H3} from "../../../global/styles/texts";
//main
export const ProjectPage = ({
  name,
  description,
  dueDate,
  activities = {}
}) => (
  <PageContainer>
    <InformationHeader
      title={name}
      imageIsShow={false}
      about={description}
    />
    <Activities>
      <H3>Actividades del proyecto</H3>
      <ActivitiesContainer>
        <ActivitieList
          activities={activities.pending || []}
          title="Pendientes"
        />
        <ActivitieList
          activities={activities.inProgress || []}
          title="En curso"
        />
        <ActivitieList
          activities={activities.doned || []}
          title="Terminadas"
        />
      </ActivitiesContainer>
    </Activities>
  </PageContainer>
);
