// Components
import React from "react";
import {Link} from "react-router-dom";
import {LongCard, List, Loading} from "../../../global/components";
//hooks
import {useEffect, useState} from "react";
// styled-Components
import {LongList} from "../../../global/styles/Lists";
//utils
import {CLIENTS_ROUTE} from "../../../global/utils/routes";
//redux
import {connect} from "react-redux";
import {fetchClients} from "../../../global/redux/actions/clients";

function ClientsList({clients, fetchClients}) {
  const {loadingClients, errorOnGetClients} = clients.status;
  const [shouldFetchClients, setShouldFetchClients] = useState(true);
  useEffect(() => {
    if (shouldFetchClients) {
      fetchClients();
    }
    if (loadingClients || errorOnGetClients) {
      setShouldFetchClients(false);
    }
  }, [
    shouldFetchClients,
    loadingClients,
    errorOnGetClients,
    fetchClients
  ]);

  if (errorOnGetClients) {
    console.log(errorOnGetClients);
    return <h1> error !!!</h1>;
  }
  return (
    <List title="Clientes">
      <LongList>
        {loadingClients ? (
          <Loading />
        ) : (
          clients.list.map(({client_id}) => (
            <Link to={`${CLIENTS_ROUTE}${client_id}`} key={client_id}>
              <LongCard />
            </Link>
          ))
        )}
      </LongList>
    </List>
  );
}
const mapStateToProps = state => ({clients: state.clients});
export default connect(
  mapStateToProps,
  {fetchClients}
)(ClientsList);
