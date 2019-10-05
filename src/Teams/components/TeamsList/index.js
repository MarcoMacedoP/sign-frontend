import React from "react";
//redux
import {connect} from "react-redux";
import {addTeam} from "../../../global/redux/actions/teams";
//components
import {List, LongCard} from "../../../global/components";
//styled-components
import {TeamListItem} from "./styles";

function TeamsList({teams = [], addTeam}) {
  return (
    <List title="Coolaboradores">
      {teams.map(team => (
        <TeamListItem key={team.id}>
          <LongCard
            picture={team.picture}
            title={`${team.name}`}
            date={team.about}
          />
        </TeamListItem>
      ))}
    </List>
  );
}

const mapStateToProps = state => {
  debugger;

  return {teams: state.teams};
};

export default connect(
  mapStateToProps,
  {addTeam}
)(TeamsList);
