// Components
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { LongCard, List } from "../../../global/components";
//hooks
import { useEffect, useState } from "react";
// styled-Components
import { LongList } from "../../../global/styles/Lists";
//utils
import { CLIENTS_ROUTE, ADD_CLIENT_ROUTE } from "../../../global/utils/routes";
//redux
import { connect } from "react-redux";
import { fetchClients } from "../../../global/redux/actions/clients";

function ClientsList({
  shouldFetchClients,
  clientsList,
  loadingClients,
  errorOnGetClients,
  fetchClients
}) {
  useEffect(() => {
    if (shouldFetchClients) {
      fetchClients();
    }
  }, [shouldFetchClients]);

  //handle error
  const [error, setError] = useState(null);
  useEffect(() => setError(errorOnGetClients), [errorOnGetClients]);
  const setErrorToNull = () => setError(null);

  const [isRedirect, setIsRedirect] = useState(false);
  const handleAddButton = () => {
    setIsRedirect(true);
  };

  return (
    <List
      error={error}
      onErrorClose={setErrorToNull}
      title="Clientes"
      onAddButtonClick={handleAddButton}
      isLoading={loadingClients}
      isEmpty={clientsList.length === 0}
      infoDisplayedOnEmpty={{
        message: "Parece que aún no tienes agregado ningún cliente.",
        callToAction: "¿Qué tal si agregas uno para comenzar?"
      }}
    >
      {clientsList.length === 0 && (
        <LongList>
          {clientsList.map(client => (
            <Link
              to={`${CLIENTS_ROUTE}${client.client_id}`}
              key={client.client_id}
            >
              <LongCard
                title={`${client.name} ${client.lastname}`}
                about={client.email || client.phone}
              />
            </Link>
          ))}
        </LongList>
      )}
      {isRedirect && <Redirect to={ADD_CLIENT_ROUTE} />}
    </List>
  );
}
const mapStateToProps = ({ clients }) => ({
  clientsList: clients.list,
  shouldFetchClients: clients.status.shouldFetchClients,
  loadingClients: clients.status.loadingClients,
  errorOnGetClients: clients.status.errorOnGetClients
});

export default connect(mapStateToProps, { fetchClients })(ClientsList);
