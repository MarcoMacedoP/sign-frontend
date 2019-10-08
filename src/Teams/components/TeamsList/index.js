import React from "react";
//redux
import {connect} from "react-redux";
//components
import {AsideList, AsideListItem} from "../../../global/components";
import {Redirect} from "react-router-dom";
//hooks
import {useState} from "react";
//utils
import {ADD_TEAM} from "../../../global/utils/routes";

function TeamsList({teams = []}) {
  const [isRedirect, setRedirect] = useState(false);
  const handleRedirect = () => setRedirect(true);
  return (
    <AsideList
      title="Coolaboradores"
      onAddButtonClick={handleRedirect}
    >
      {isRedirect && <Redirect to={ADD_TEAM} />}
      {teams.map(team => (
        <AsideListItem
          key={team.id}
          picture={team.picture}
          title={`${team.name}`}
          date={team.about}
        />
      ))}
    </AsideList>
  );
}

const mapStateToProps = state => ({teams: state.teams});
export default connect(
  mapStateToProps,
  null
)(TeamsList);
