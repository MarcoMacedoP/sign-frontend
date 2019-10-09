import React from "react";
//redux
import {connect} from "react-redux";
//components
import {
  AsideList,
  AsideListItem,
  AddButton
} from "../../../global/components";
import Team from "../Team";
import {Redirect} from "react-router-dom";
//hooks
import {useHandleState} from "../../../global/hooks";
//styled-components
import {Container} from "./styles";

//utils
import {ADD_TEAM} from "../../../global/utils/routes";

function TeamsList({teams = []}) {
  const {state, toggleStateValue} = useHandleState({
    isShowed: true,
    isRedirect: false
  });
  //handles
  const handleRedirect = () => toggleStateValue("isRedirect");
  const toggleAsideList = () => toggleStateValue("isShowed");

  return (
    <Container>
      <AsideList
        isShowed={state.isShowed}
        title="Coolaboradores"
        onAddButtonClick={handleRedirect}
        toggleAsideList={toggleAsideList}
      >
        {state.isRedirect && <Redirect to={ADD_TEAM} />}
        {teams.map(team => (
          <AsideListItem
            key={team.id}
            picture={team.picture}
            title={`${team.name}`}
            date={team.about}
          />
        ))}
        <AddButton onClick={handleRedirect} />
      </AsideList>
      <Team />
    </Container>
  );
}

const mapStateToProps = state => ({teams: state.teams});
export default connect(
  mapStateToProps,
  null
)(TeamsList);