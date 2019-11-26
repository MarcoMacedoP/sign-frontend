import React from "react";
//components
import { SelectionList } from "../../../global/components/SelectionList";
import { useEffect } from "react";
//redux
import { connect } from "react-redux";
import { fetchTeams } from "../../../global/redux/actions/teams";

function TeamsListSelection({
  teams,
  loadingTeams,
  shouldFetchTeams,
  fetchTeams,
  onSelection,
  onClose,
  isOpen
}) {
  useEffect(() => {
    if (shouldFetchTeams) {
      fetchTeams();
    }
  }, [shouldFetchTeams]);
  return (
    <SelectionList
      title="Agregar equipo"
      onClose={onClose}
      isOpen={isOpen}
      itemListKeys={{
        id: "_id",
        about: "description",
        title: "name"
      }}
      list={teams}
      onSelection={onSelection}
      isLoading={loadingTeams}
    />
  );
}
const mapStateToProps = ({ teams }) => ({
  teams: teams.list,
  shouldFetchTeams: teams.status.shouldFetchTeams,
  loadingTeams: teams.status.loadingFetchTeams
});

export default connect(mapStateToProps, { fetchTeams })(TeamsListSelection);
