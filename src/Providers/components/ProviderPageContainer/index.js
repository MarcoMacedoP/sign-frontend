import React from "react";
//components
import {ProviderPage} from "../ProviderPage";
// hooks
import {useModalState} from "../../../global/hooks/useModalState";
import {useHandleState} from "../../../global/hooks/useHandleState";
//redux
import {connect} from "react-redux";

// component
function ProviderPageContainer({provider}) {
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
    <ProviderPage
      provider={provider}
      formValues={state}
      onChange={addFormValueToState}
      addServiceIsOpen={addServiceIsOpen}
      handleAddService={handleAddService}
      editServiceIsOpen={editServiceIsOpen}
      handleEditService={handleEditService}
      addProductIsOpen={addProductIsOpen}
      handleAddProduct={handleAddProduct}
      editProductIsOpen={editProductIsOpen}
      handleEditProduct={handleEditProduct}
    />
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
)(ProviderPageContainer);
