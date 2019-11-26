import React from "react";
//components
import { ProjectCard } from "../../../Projects/components/ProjectList/";
import { Redirect } from "react-router-dom";
import {
  Icon,
  SmallEmptyState,
  Button,
  Loading,
  ErrorMessage
} from "../../../global/components";
import TeamList from "../TeamsList";
//hooks
import {
  useHandleState,
  useModalState,
  useError,
  useRedirect
} from "../../../global/hooks";
//styled-components
import {
  Container,
  Header,
  Info,
  Picture,
  About,
  StyledUserList,
  Grid
} from "./styles";
import { H4 } from "../../../global/styles/texts";
//redux
import { connect } from "react-redux";
import { fetchGetProjectsInTeam } from "../../../global/redux/actions/teams";
import AddUser from "../AddUser";
import UserInTeam from "../UserInTeam";
import { PROJECTS_ROUTE } from "../../../global/utils/routes";
function Team({
  team,
  match,
  fetchGetProjectsInTeam,
  statusOnGetProjects,
  projectsInTeam
}) {
  const { state, toggleStateValue } = useHandleState({
    infoIsShowed: true
  });
  const [addUserIsOpen, toggleAddUserIsOpen] = useModalState();
  const [shouldFetch, setShoulFetch] = React.useState(true);
  const { setError, error, setErrorToNull } = useError({
    updateErrorOnChange: null
  });
  React.useEffect(() => {
    if (shouldFetch) {
      fetchGetProjectsInTeam(teamId);
      setShoulFetch(false);
    }
  }, [shouldFetch]);
  React.useEffect(() => {
    if (
      statusOnGetProjects !== "loading" &&
      statusOnGetProjects !== "success"
    ) {
      setError(statusOnGetProjects);
    }
  }, [statusOnGetProjects]);
  const { isRedirect, route, toggleRedirect } = useRedirect();
  const handleProjectClick = (id) => toggleRedirect(`${PROJECTS_ROUTE}${id}`);
  const toggleInfo = () => toggleStateValue("infoIsShowed");
  const teamId = match.params.teamId;

  return (
    <TeamList>
      {isRedirect && <Redirect to={route} />}
      <AddUser
        teamId={teamId}
        isOpen={addUserIsOpen}
        onClose={toggleAddUserIsOpen}
      />
      {team ? (
        <Container>
          <Header>
            <H4>{team.name}</H4>
            <Icon icon="info" onClick={toggleInfo} />
          </Header>
          {statusOnGetProjects === "loading" && !projectsInTeam && <Loading />}
          {error && <ErrorMessage error={error} onClose={setErrorToNull} />}
          {projectsInTeam && (
            <Grid>
              {projectsInTeam.map(
                (project) =>
                  project && (
                    <ProjectCard
                      key={project._id}
                      onClick={() => handleProjectClick(project._id)}
                      about={project.description}
                      title={project.name}
                      dueDate={project.dueDate}
                    />
                  )
              )}
            </Grid>
          )}
          <Info isShowed={state.infoIsShowed}>
            <Picture>
              <img src={team.picture} alt="" />
            </Picture>
            <p>
              <strong> Acerca de {team.name}</strong>
            </p>
            <About>{team.description}</About>
            <StyledUserList title="Miembros">
              {team.members.map((user) => (
                <UserInTeam user={user} key={user.userId} />
              ))}
            </StyledUserList>
            <Button onClick={toggleAddUserIsOpen}>Agregar usuario</Button>
          </Info>
        </Container>
      ) : (
        <SmallEmptyState message="Parece que este equipo no existe..." />
      )}
    </TeamList>
  );
}

const mapStateToProps = (state, props) => {
  const teamId = props.match.params.teamId;
  if (state.projects.projectsOfTeams) {
    const referenciasAProyectos = state.projects.projectsOfTeams.map(
      (projectsInTeam) =>
        projectsInTeam.teamId === teamId && projectsInTeam.projectId
    );

    const projects = [];
    state.projects.list.forEach((p) => {
      referenciasAProyectos.forEach((id) => {
        if (p._id === id) {
          projects.push(p);
        }
      });
    });

    return {
      team: state.teams.list.find((team) => team && team._id === teamId),
      statusOnGetProjects: state.projects.status.teamInProject.status,
      projectsInTeam: projects
    };
  } else {
    return {
      team: state.teams.list.find((team) => team && team._id === teamId),
      statusOnGetProjects: state.projects.status.teamInProject.status,
      projectsInTeam: null
    };
  }
};

export default connect(mapStateToProps, { fetchGetProjectsInTeam })(Team);
