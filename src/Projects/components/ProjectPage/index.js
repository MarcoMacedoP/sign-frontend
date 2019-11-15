import React from "react";
//components
import ActivitieList from "../ActivitieList";
import AddActivitie from "../AddActivitie";
import ClientListSelection from "../../../Clients/components/ClientsListSelection";
import {
  InformationHeader,
  SmallEmptyState,
  Button,
  AddButton,
  RemoveModal,
  Item,
  ItemList,
  ErrorToast
} from "../../../global/components/";
//styled-components
import { PageContainer } from "../../../global/styles/Containers";
import { Activities, ActivitiesContainer, ProjectInfo } from "./styles";
import { H3 } from "../../../global/styles/texts";
//utils
import {
  DONED,
  IN_PROGRESS,
  PENDING
} from "../../../global/redux/types/activitieTypes";

export const ProjectPage = ({
  error,
  onErrorClose,
  isLoadingAddingClient,
  toggleDeleteModal,
  deleteProjectIsOpen,
  onRemoveProject,
  project,
  addActivitieIsOpen,
  toggleAddActivite,
  addClientIsOpen,
  toggleAddClient,
  onAddClient,
  onRemoveClient,
  optionsMenuForInformationHeader
}) => {
  const { name, description, dueDate, activities = {}, clients = [] } = project;
  return (
    <PageContainer>
      <InformationHeader
        title={name}
        imageIsShow={false}
        about={description}
        date={dueDate}
        options={optionsMenuForInformationHeader}
      />
      <ErrorToast error={error} onClose={onErrorClose} />
      <ProjectInfo>
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
                <Button size="medium" onClick={toggleAddActivite}>
                  Agrega una actividad
                </Button>
              </SmallEmptyState>
            ) : (
              <>
                <ActivitieList
                  activities={activities.pending || []}
                  title="Pendientes"
                  activitieType={PENDING}
                  projectId={project._id}
                />
                <ActivitieList
                  activities={activities.inProgress || []}
                  title="En curso"
                  activitieType={IN_PROGRESS}
                  projectId={project._id}
                />
                <ActivitieList
                  activities={activities.doned || []}
                  title="Terminadas"
                  activitieType={DONED}
                  projectId={project._id}
                />
              </>
            )}
          </ActivitiesContainer>
        </Activities>

        <ItemList
          title="Clientes"
          onAddButtonClick={toggleAddClient}
          addMessage="Agregar cliente"
          isLoading={isLoadingAddingClient}
        >
          {clients.length > 0 &&
            clients.map(client => (
              <Item
                key={client.client_id}
                name={client.name}
                onDelete={() => onRemoveClient(client.client_id)}
              />
            ))}
        </ItemList>
      </ProjectInfo>

      <AddButton onClick={toggleAddActivite} />
      {/*-------------- modals---------- */}
      <ClientListSelection
        onClose={toggleAddClient}
        isOpen={addClientIsOpen}
        onSelection={onAddClient}
      />
      <AddActivitie
        isShowed={addActivitieIsOpen}
        onClose={toggleAddActivite}
        projectId={project._id}
      />
      <RemoveModal
        headline="Eliminar proyecto"
        message="Estás a punto de eliminar un projecto, ¿Estás seguro?"
        onCancel={toggleDeleteModal}
        onRemove={onRemoveProject}
        isOpen={deleteProjectIsOpen}
      />
    </PageContainer>
  );
};
