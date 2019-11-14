import React from "react";
//components
import {SelectionCard, Loading} from "../../../global/components";
//styled-components
import {H3} from "../../../global/styles/texts";
import {StyledModal, StyledSecondaryButton} from "./styles";
//hooks
import {useEffect} from "react";
//redux
import {connect} from "react-redux";
import {fetchClients} from "../../../global/redux/actions/clients";
/**Shows a modal list of selectable clients.
 *
 * @param {Array} clients the clients to be rendered.
 * If not exist will use the global state client list.
 * @param {function} onSelection the funcion to be called
 * when an item is selected. It will recieve the full client info as a argument.
 * @param {function} onClose funcion to be called on modal close.
  @param {Boolean} isOpen indicates if modal is open.
 */
function ClientListSelection({
  clients,
  loadingClients,
  shouldFetchClients,
  fetchClients,
  onSelection,
  onClose,
  isOpen
}) {
  useEffect(() => {
    if (shouldFetchClients) {
      fetchClients();
    }
  }, [shouldFetchClients]);

  const handleSelection = clientId => {
    onSelection(clientId);
    onClose();
  };

  return (
    <StyledModal onClose={onClose} isOpen={isOpen}>
      <H3> Seleccionar cliente </H3>
      {loadingClients && <Loading size="1rem" />}
      {clients.length > 0 &&
        clients.map(client => (
          <SelectionCard
            key={client.client_id}
            about={client.email || client.phone}
            onSelect={() => handleSelection(client.client_id)}
            title={`${client.name} ${client.lastname}`}
          />
        ))}
      <StyledSecondaryButton onClick={onClose}>
        Cancelar
      </StyledSecondaryButton>
    </StyledModal>
  );
}
const mapStateToProps = ({clients}, props) => ({
  clients: props.clients ? props.clients : clients.list,
  shouldFetchClients: clients.status.shouldFetchClients,
  loadingClients: clients.status.loadingClients,
  errorOnGetClients: clients.status.errorOnGetClients
});
export default connect(
  mapStateToProps,
  {fetchClients}
)(ClientListSelection);
