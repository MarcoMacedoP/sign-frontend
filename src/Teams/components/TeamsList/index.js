import React from "react";
//redux
import {connect} from "react-redux";
//components
import {
  AsideList,
  AsideListItem,
  AddButton
} from "../../../global/components";
import {Redirect} from "react-router-dom";
//hooks
import {useHandleState} from "../../../global/hooks";
//styled-components
import {Container} from "./styles";

//utils
import {ADD_TEAM, TEAMS_LIST} from "../../../global/utils/routes";

function TeamsList({teams = [], children}) {
  const {state, toggleStateValue, addValueToState} = useHandleState({
    isShowed: true,
    isRedirect: false,
    selectedTeam: null
  });
  //handles
  const handleRedirect = () => toggleStateValue("isRedirect");
  const toggleAsideList = () => toggleStateValue("isShowed");
  const handleSelectTeam = teamId =>
    addValueToState("selectedTeam", teamId);

  return (
    <Container>
      <AsideList
        isShowed={state.isShowed}
        title="Coolaboradores"
        onAddButtonClick={handleRedirect}
        toggleAsideList={toggleAsideList}
      >
        {teams.map(team => (
          <AsideListItem
            key={team.id}
            picture={team.picture}
            title={`${team.name}`}
            date={team.about}
            onClick={() => handleSelectTeam(team.id)}
          />
        ))}
        {state.selectedTeam && (
          <Redirect to={`${TEAMS_LIST}${state.selectedTeam}`} />
        )}
        <AddButton onClick={handleRedirect} />
        {state.isRedirect && <Redirect to={ADD_TEAM} />}
      </AsideList>
      {children}
    </Container>
  );
}

const mapStateToProps = state => ({teams: state.teams});
export default connect(
  mapStateToProps,
  null
)(TeamsList);
