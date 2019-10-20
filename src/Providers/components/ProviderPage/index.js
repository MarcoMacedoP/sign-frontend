import React from "react";
import {ListContainer, List, Name} from "./styles";
import {InformationHeader} from "../../../global/components";
import {Income} from "../Income";
import {AddButton} from "../../../global/components/AddButton";
import {AddIncome} from "../../modals/AddIncome";
import {EditIncome} from "../../modals/EditIncome";
//styled-components
import {PageContainer} from "../../../global/styles/Containers";
// hooks
import {useModalState, useHandleState} from "../../../global/hooks/";
//redux
import {connect} from "react-redux";
function ProviderPage({provider}) {
  // modals
  const {
    modalIsOpen: addServiceIsOpen,
    handleModal: handleAddService
  } = useModalState();
  const {
    modalIsOpen: editServiceIsOpen,
    handleModal: handleEditService
  } = useModalState();

  const {
    modalIsOpen: addProductIsOpen,
    handleModal: handleAddProduct
  } = useModalState();
  const {
    modalIsOpen: editProductIsOpen,
    handleModal: handleEditProduct
  } = useModalState();

  // Form values of AddIncome and EditIncome
  const {state, addFormValueToState} = useHandleState({});

  return (
    <PageContainer>
      <InformationHeader {...provider} />
      {/* ---------Services---- */}
      <ListContainer>
        <Name>Servicios</Name>
        <List>
          {[1, 2, 3, 4, 5].map(value => (
            <Income key={value} onClick={handleEditService} />
          ))}
        </List>
        <AddButton position="static" onClick={handleAddService} />
      </ListContainer>
      {/* -------------- */}

      {/* ---------Products---- */}
      <ListContainer>
        <Name>Productos</Name>
        <List>
          {[1, 2, 3, 4, 5].map(value => (
            <Income key={value} onClick={handleEditProduct} />
          ))}
        </List>
        <AddButton position="static" onClick={handleAddProduct} />
      </ListContainer>
      {/* -------------- */}

      {/* ---------Modals---- */}
      <AddIncome
        onClose={handleAddService}
        isOpen={addServiceIsOpen}
        incomeName="servicio"
        onChange={addFormValueToState}
        formValues={state}
      />
      <EditIncome
        onClose={handleEditService}
        isOpen={editServiceIsOpen}
        incomeName="servicio"
        onChange={addFormValueToState}
        formValues={state}
      />
      {
        // products modals
      }
      <AddIncome
        onClose={handleAddProduct}
        isOpen={addProductIsOpen}
        incomeName="producto"
        onChange={addFormValueToState}
        formValues={state}
      />
      <EditIncome
        onClose={handleEditProduct}
        isOpen={editProductIsOpen}
        incomeName="producto"
        onChange={addFormValueToState}
        formValues={state}
      />
      {/* -------------- */}
    </PageContainer>
  );
}
const mapStateToProps = ({providers}, props) => {
  const providerId = parseInt(props.match.params.providerId);
  const [provider] = providers.list.filter(
    provider => provider.provider_id === providerId
  );
  return {provider};
};
export default connect(
  mapStateToProps,
  null
)(ProviderPage);
