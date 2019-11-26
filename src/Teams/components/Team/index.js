import React from "react";
//components
import { ProjectCard } from "../../../Projects/components/ProjectList/";

import {
  Icon,
  SmallEmptyState,
  Button,
  Loading,
  ErrorMessage
} from "../../../global/components";
import TeamList from "../TeamsList";
//hooks
import { useHandleState, useModalState, useError } from "../../../global/hooks";
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

  const toggleInfo = () => toggleStateValue("infoIsShowed");
  const teamId = match.params.teamId;

  return (
    <TeamList>
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
              {projectsInTeam.map((project) => (
                <ProjectCard
                  key={project._id}
                  onClick={() => console.log("card cliked")}
                  about={project.description}
                  title={project.name}
                  dueDate={project.dueDate}
                />
              ))}
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
  return {
    team: state.teams.list.find((team) => team && team._id === teamId),
    statusOnGetProjects: state.teams.status.getProjectsInTeam,
    projectsInTeam:
      state.teams.projectsInTeams &&
      state.teams.projectsInTeams.find((elemt) => elemt.teamId == teamId)
        .projects
  };
};

export default connect(mapStateToProps, { fetchGetProjectsInTeam })(Team);
