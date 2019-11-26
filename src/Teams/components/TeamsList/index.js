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
import { useHandleState, useRedirect, useError } from "../../../global/hooks";
import { useEffect } from "react";
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
  const { state, toggleStateValue } = useHandleState({
    isShowed: true
  });
  //handles
  const { isRedirect, toggleRedirect, route } = useRedirect();
  //fetch stuff
  useEffect(() => {
    if (shouldFetchTeams) {
      fetchTeams();
    }
  }, [shouldFetchTeams]);
  //error handlers
  const { error, setErrorToNull } = useError({
    updateErrorOnChange: errorOnFetchTeams
  });

  const toggleAsideList = () => toggleStateValue("isShowed");
  const handleAddClick = () => toggleRedirect(ADD_TEAM);

  if (loadingFetchTeams) {
    return <Loading />;
  }
  if (isRedirect) {
    return <Redirect to={route} />;
  }

  if (teamsList.length === 0) {
    return (
      <SmallEmptyState
        message={[
          "Aún no perteneces a ningún equipo...",
          "Cuando creas un equipo o te unes a uno aquí se mostrará un todo lo que necesitas saber. 😎"
        ]}
        callToAction="¡Crea un equipo ahora!"
      >
        <AddButton isCallToAction onClick={handleAddClick} position="static" />
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
                onClick={toggleAsideList}
                key={team._id}
                picture={team.picture}
                title={`${team.name}`}
                date={team.about}
                to={`${TEAMS_LIST}${team._id}`}
              />
            )
        )}
        <ErrorMessage error={error} onClose={setErrorToNull} />
      </AsideList>
      {children}
      {state.isRedirect && <Redirect to={ADD_TEAM} />}
      <AddButton onClick={handleAddClick} />
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
