import React from "react";
import {ListContainer, List, Name} from "./styles";
import {InformationHeader} from "../../../global/components";
import {Income} from "../Income";
import {AddButton} from "../../../global/components/AddButton";
import {AddIncome} from "../../modals/AddIncome";
import {EditIncome} from "../../modals/EditIncome";
//styled-components
import {PageContainer} from "../../../global/styles/Containers";

export const ProviderPage = ({
  provider,
  onChange,
  formValues,
  addServiceIsOpen,
  handleAddService,
  editServiceIsOpen,
  handleEditService,
  addProductIsOpen,
  handleAddProduct,
  handleEditProduct,
  editProductIsOpen
}) => (
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
      onChange={onChange}
      formValues={formValues}
    />
    <EditIncome
      onClose={handleEditService}
      isOpen={editServiceIsOpen}
      incomeName="servicio"
      onChange={onChange}
      formValues={formValues}
    />
    {
      // products modals
    }
    <AddIncome
      onClose={handleAddProduct}
      isOpen={addProductIsOpen}
      incomeName="producto"
      onChange={onChange}
      formValues={formValues}
    />
    <EditIncome
      onClose={handleEditProduct}
      isOpen={editProductIsOpen}
      incomeName="producto"
      onChange={onChange}
      formValues={formValues}
    />
    {/* -------------- */}
  </PageContainer>
);
