import React from "react";
//components
import { IncomeList } from "../IncomeList";
import { InformationHeader } from "../../../global/components";
//modals
import { AddIncome } from "../../modals/AddIncome";
import { EditIncome } from "../../modals/EditIncome";
//styled-components
import { PageContainer } from "../../../global/styles/Containers";
// hooks
import { useModalState, useHandleState } from "../../../global/hooks/";
//redux
import { connect } from "react-redux";
function ProviderPage({ provider, services = [], products = [] }) {
  // modals
  const [addServiceIsOpen, handleAddService] = useModalState();
  const [editServiceIsOpen, handleEditService] = useModalState();
  const [addProductIsOpen, handleAddProduct] = useModalState();
  const [editProductIsOpen, handleEditProduct] = useModalState();

  // Form values of AddIncome and EditIncome
  const { state, addFormValueToState } = useHandleState({});
  //provider info
  const { name, lastname, image_url, about, email, phone } = provider;
  return (
    <PageContainer>
      <InformationHeader
        title={`${name} ${lastname}`}
        imageUrl={image_url}
        about={about}
        email={email}
        phone={phone}
      />
      <IncomeList
        type="Servicios"
        incomeListArray={services}
        onAddButtonClick={handleAddService}
        onIncomeClick={handleEditService}
      />
      <IncomeList
        type="Productos"
        incomeListArray={products}
        onAddButtonClick={handleAddProduct}
        onIncomeClick={handleEditProduct}
      />

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
const mapStateToProps = ({ providers }, props) => {
  const providerId = parseInt(props.match.params.providerId);
  const [provider] = providers.list.filter(
    provider => provider.provider_id === providerId
  );
  if (provider.expenses) {
    const services = provider.expenses.filter(
      expense => expense.type === "service"
    );
    const products = provider.expenses.filter(
      expense => expense.type === "product"
    );

    return { provider, services, products };
  } else {
    return { provider };
  }
};
export default connect(mapStateToProps, null)(ProviderPage);
