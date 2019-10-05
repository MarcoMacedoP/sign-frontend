import React from "react";
//redux
import {connect} from "react-redux";
//components
import {List, LongCard} from "../../../global/components";
import {Redirect} from "react-router-dom";
//hooks
import {useState} from "react";
//styled-components
import {TeamListItem} from "./styles";
//utils
import {ADD_TEAM} from "../../../global/utils/routes";

function TeamsList({teams = []}) {
  const [isRedirect, setRedirect] = useState(false);
  const handleRedirect = () => setRedirect(true);
  return (
    <List title="Coolaboradores" onAddButtonClick={handleRedirect}>
      {isRedirect && <Redirect to={ADD_TEAM} />}
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

const mapStateToProps = state => ({teams: state.teams});
export default connect(
  mapStateToProps,
  null
)(TeamsList);
