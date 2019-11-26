import * as React from "react";
//components
import ActivitieList from "../ActivitieList";
import { ProjectTransactionsInfo } from "../ProjectTransactionsInfo";
import AddActivitie from "../AddActivitie";
import ClientListSelection from "../../../Clients/components/ClientsListSelection";
import ProviderListSelection from "../../../Providers/modals/ProvidersListSelection";
import TeamsListSelection from "../../../Teams/components/TeamsListSelection";
import {
  InformationHeader,
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
  StyledLoading,
  StyledEmptyState
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
  toggleAddActivite: any;
  addClientIsOpen: toggleFunctions;
  toggleAddClient: toggleFunctions;
  onAddClient: Function;
  onRemoveClient: Function;
  optionsMenuForInformationHeader: Array<OptionsMenu>;
  //providers on projects
  providerListIsOpen: boolean | any;
  toggleProvidersList: toggleFunctions;
  onProviderRemove: Function | any;
  onProviderAdded: Function | any;
  isLoadingProviderAction: boolean | any;
  toggleTeamsList: Function | any;
  teamsListIsOpen: boolean | any;
  onTeamRemove: Function | any;
  onTeamAdded: Function | any;
  isLoadingTeamAction: boolean | any;
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
  isLoadingFullInfo,
  onProviderAdded,
  onProviderRemove,
  providerListIsOpen,
  toggleProvidersList,
  isLoadingProviderAction,
  isLoadingTeamAction,
  onTeamAdded,
  onTeamRemove,
  teamsListIsOpen,
  toggleTeamsList
}) => {
  const {
    name,
    description,
    dueDate,
    activities,
    clients = [],
    providers = [],
    teams = [],
    fullLoaded
  } = project;

  const filterActivities = (status: activitiesStatus) =>
    activities && activities.filter((act) => act.status === status);

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
      {isLoadingFullInfo || (!fullLoaded && !error) ? (
        <StyledLoading />
      ) : error ? null : (
        <div>
          <ProjectInfo>
            <Activities>
              <H3>Actividades del proyecto</H3>
              {!pendingActivites && !donedActivites && !inProgressActivites ? (
                <EmptyActivities onAddActivitie={toggleAddActivite} />
              ) : (
                <ActivitiesContainer>
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
                </ActivitiesContainer>
              )}
            </Activities>
            {/* clients in project */}
            <article>
              <ItemList
                title="Clientes"
                onAddButtonClick={toggleAddClient}
                addMessage="Agregar cliente"
                isLoading={isLoadingAddingClient}
              >
                {clients.length > 0 &&
                  clients.map((client) => (
                    <Item
                      key={client.client_id}
                      name={client.name}
                      onDelete={() => onRemoveClient(client.client_id)}
                    />
                  ))}
              </ItemList>
              {/* providers in project */}
              <ItemList
                title="Proveedores"
                isLoading={isLoadingProviderAction}
                addMessage="Agregar proveedor"
                onAddButtonClick={toggleProvidersList}
              >
                {providers.length > 0 &&
                  providers.map((provider) => (
                    <Item
                      key={provider.provider_id}
                      name={provider.name}
                      onDelete={() => onProviderRemove(provider.provider_id)}
                    />
                  ))}
              </ItemList>
              {/* teams in project */}
              <ItemList
                title="Equipos"
                isLoading={isLoadingTeamAction}
                addMessage="Agregar equipo"
                onAddButtonClick={toggleTeamsList}
              >
                {teams.length > 0 &&
                  teams.map((team) => (
                    <Item
                      key={team._id}
                      name={team.name}
                      onDelete={() => onTeamRemove(team._id)}
                    />
                  ))}
              </ItemList>
            </article>
          </ProjectInfo>
          <ProjectTransactionsInfo projectId={project._id} />
        </div>
      )}

      <AddButton onClick={toggleAddActivite} />
      {/*-------------- modals---------- */}
      <ClientListSelection
        onClose={toggleAddClient}
        isOpen={addClientIsOpen}
        onSelection={onAddClient}
      />
      <ProviderListSelection
        onSelection={onProviderAdded}
        onClose={toggleProvidersList}
        isOpen={providerListIsOpen}
      />
      <TeamsListSelection
        onSelection={onTeamAdded}
        onClose={toggleTeamsList}
        isOpen={teamsListIsOpen}
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

interface EmptyActivitiesProps {
  onAddActivitie: Function | any;
}

const EmptyActivities: React.FC<EmptyActivitiesProps> = ({
  onAddActivitie
}) => {
  return (
    <StyledEmptyState
      message={[
        "Parece que aún no tienes actividades...",
        "Las actividades permiten mantener el flujo de trabajo de tu proyecto para sacarle el máximo potencial a tú tiempo."
      ]}
    >
      <Button onClick={onAddActivitie}>Agrega una actividad</Button>
    </StyledEmptyState>
  );
};
