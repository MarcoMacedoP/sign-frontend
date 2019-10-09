import React from "react";
//components
import {Icon} from "../../../global/components";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
//styled-components
import {Container, Header, Info, Picture, About} from "./styles";
import {H4} from "../../../global/styles/texts";
//redux
import {connect} from "react-redux";

function Team({team}) {
  const {state, toggleStateValue} = useHandleState({
    infoIsShowed: true
  });
  const toggleInfo = () => toggleStateValue("infoIsShowed");

  return (
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
        <About>{team.about}</About>
      </Info>
    </Container>
  );
}

const mapStateToProps = (state, props) => ({
  team: state.teams.find(team => team.id === props.teamId)
});

export default connect(
  mapStateToProps,
  null
)(Team);
