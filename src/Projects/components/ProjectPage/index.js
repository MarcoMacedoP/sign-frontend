import React from "react";
//components
import {ActivitieList} from "../ActivitieList";
import AddActivitie from "../AddActivitie";
import {
  InformationHeader,
  SmallEmptyState,
  Button
} from "../../../global/components/";
//styled-components
import {PageContainer} from "../../../global/styles/Containers";
import {Activities, ActivitiesContainer} from "./styles";
import {H3} from "../../../global/styles/texts";
//main
export const ProjectPage = ({project, modalIsOpen, handleModal}) => {
  const {name, description, dueDate, activities = {}} = project;
  debugger;

  return (
    <PageContainer>
      <InformationHeader
        title={name}
        imageIsShow={false}
        about={description}
        date={dueDate}
      />
      <Activities>
        <H3>Actividades del proyecto</H3>
        <ActivitiesContainer>
          {!activities.pending &&
          !activities.inProgress &&
          !activities.doned ? (
            <SmallEmptyState
              message={[
                "Parece que aún no tienes actividades...",
                "Las actividades permiten mantener el flujo de trabajo de tu proyecto para sacarle el máximo potencial a tú tiempo."
              ]}
            >
              <Button size="medium" onClick={handleModal}>
                Agrega una actividad
              </Button>
            </SmallEmptyState>
          ) : (
            <>
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
            </>
          )}
        </ActivitiesContainer>
      </Activities>
      {/*-------------- modals---------- */}
      <AddActivitie
        isShowed={modalIsOpen}
        onClose={handleModal}
        project={project}
      />
    </PageContainer>
  );
};
