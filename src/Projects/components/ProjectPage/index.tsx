import * as React from "react";
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
} from "../../../global/components";
//styled-components
import { PageContainer } from "../../../global/styles/Containers";
import {
  Activities,
  ActivitiesContainer,
  ProjectInfo,
  StyledLoading
} from "./styles";
import { H3 } from "../../../global/styles/texts";
//utils
import {
  DONED,
  IN_PROGRESS,
  PENDING
} from "../../../global/redux/types/activitieTypes";
import { Project, activitiesStatus } from "../../types";

type toggleFunctions =
  | Function
  | boolean
  | React.Dispatch<React.SetStateAction<boolean>>;

interface ProjectPageProps {
  error: string | null;
  onErrorClose: Function;
  isLoadingAddingClient:
    | boolean
    | React.Dispatch<React.SetStateAction<boolean>>;
  toggleDeleteModal: toggleFunctions;
  isLoadingFullInfo: boolean | any;
  deleteProjectIsOpen: toggleFunctions;
  onRemoveProject: Function;
  project: Project;
  addActivitieIsOpen: toggleFunctions;
  toggleAddActivite: toggleFunctions;
  addClientIsOpen: toggleFunctions;
  toggleAddClient: toggleFunctions;
  onAddClient: Function;
  onRemoveClient: Function;
  optionsMenuForInformationHeader: Array<OptionsMenu>;
}

interface OptionsMenu {
  icon: string;
  onClick: toggleFunctions;
  title: string;
}
export const ProjectPage: React.FC<ProjectPageProps> = ({
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
  optionsMenuForInformationHeader,
  isLoadingFullInfo
}) => {
  const { name, description, dueDate, activities, clients = [] } = project;

  const filterActivities = (status: activitiesStatus) =>
    activities && activities.filter(act => act.status === status);

  const pendingActivites = filterActivities("PENDING");
  const donedActivites = filterActivities("DONED");
  const inProgressActivites = filterActivities("IN_PROGRESS");

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
      {isLoadingFullInfo ? (
        <StyledLoading />
      ) : (
        <ProjectInfo>
          <Activities>
            <H3>Actividades del proyecto</H3>
            <ActivitiesContainer>
              {!pendingActivites && !donedActivites && !inProgressActivites ? (
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
                    activities={pendingActivites || []}
                    title="Pendientes"
                    activitieType={PENDING}
                    projectId={project._id}
                  />
                  <ActivitieList
                    activities={inProgressActivites || []}
                    title="En curso"
                    activitieType={IN_PROGRESS}
                    projectId={project._id}
                  />
                  <ActivitieList
                    activities={donedActivites || []}
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
      )}

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
