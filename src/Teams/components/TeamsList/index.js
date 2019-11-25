import React from "react";
//redux
import { connect } from "react-redux";
import { fetchTeams } from "../../../global/redux/actions/teams";
//components
import {
  AsideList,
  AsideListItem,
  AddButton,
  SmallEmptyState,
  Loading,
  ErrorMessage
} from "../../../global/components";
import { Redirect } from "react-router-dom";
//hooks
import { useHandleState } from "../../../global/hooks";
import { useEffect, useState } from "react";
//utils
import { ADD_TEAM, TEAMS_LIST } from "../../../global/utils/routes";

function TeamsList({
  fetchTeams,
  teamsList,
  shouldFetchTeams,
  loadingFetchTeams,
  errorOnFetchTeams,
  children
}) {
  const { state, toggleStateValue, addValueToState } = useHandleState({
    isShowed: true,
    isRedirect: false,
    selectedTeam: null
  });
  //handles
  const handleRedirect = () => toggleStateValue("isRedirect");
  const toggleAsideList = () => toggleStateValue("isShowed");
  const handleSelectTeam = (teamId) => addValueToState("selectedTeam", teamId);
  //fetch stuff
  useEffect(() => {
    if (shouldFetchTeams) {
      fetchTeams();
    }
  }, [shouldFetchTeams]);
  //error handlers
  const [error, setError] = useState(null);
  useEffect(() => setError(errorOnFetchTeams), [errorOnFetchTeams]);
  const setErrorToNull = () => setError(null);

  if (loadingFetchTeams) {
    return <Loading />;
  } else if (teamsList.length === 0) {
    return (
      <SmallEmptyState
        message={[
          "Aún no perteneces a ningún equipo...",
          "Cuando creas un equipo o te unes a uno aquí se mostrará un todo lo que necesitas saber. 😎"
        ]}
        callToAction="¡Crea un equipo ahora!"
      >
        <AddButton isCallToAction onClick={handleRedirect} position="static" />
        {state.isRedirect && <Redirect to={ADD_TEAM} />}
      </SmallEmptyState>
    );
  }
  return (
    <>
      <AsideList
        isShowed={state.isShowed}
        title="Coolaboradores"
        toggleAsideList={toggleAsideList}
      >
        {teamsList.map(
          (team) =>
            team && (
              <AsideListItem
                key={team._id}
                picture={team.picture}
                title={`${team.name}`}
                date={team.about}
                onClick={() => handleSelectTeam(team._id)}
              />
            )
        )}
        <ErrorMessage error={error} onClose={setErrorToNull} />
      </AsideList>
      {children}

      {state.selectedTeam && (
        <Redirect to={`${TEAMS_LIST}${state.selectedTeam}`} />
      )}
      {state.isRedirect && <Redirect to={ADD_TEAM} />}
      <AddButton onClick={handleRedirect} />
    </>
  );
}

const mapStateToProps = ({ teams }) => ({
  teamsList: teams.list,
  shouldFetchTeams: teams.status.shouldFetchTeams,
  loadingFetchTeams: teams.status.loadingFetchTeams,
  errorOnFetchTeams: teams.status.errorOnFetchTeams
});

export default connect(mapStateToProps, { fetchTeams })(TeamsList);
