import React from "react";
//components
import { Icon, SmallEmptyState, Button } from "../../../global/components";
import TeamList from "../TeamsList";
//hooks
import { useHandleState, useModalState } from "../../../global/hooks";
//styled-components
import {
  Container,
  Header,
  Info,
  Picture,
  About,
  StyledUserList
} from "./styles";
import { H4 } from "../../../global/styles/texts";
//redux
import { connect } from "react-redux";
import AddUser from "../AddUser";
import UserInTeam from "../UserInTeam";

function Team({ team, match }) {
  const { state, toggleStateValue } = useHandleState({
    infoIsShowed: true
  });
  const [addUserIsOpen, toggleAddUserIsOpen] = useModalState();
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
          <div>info del proyecto</div>

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
    team: state.teams.list.find((team) => team && team._id === teamId)
  };
};

export default connect(mapStateToProps, null)(Team);
