import React, { useState } from "react";
import { Container, ListContainer, List, Name } from "./styles";
import { ProviderInfo } from "../ProviderInfo";
import { Income } from "../Income";
import { AddButton } from "../../../global/components/AddButton";
import { AddIncome } from "../../modals/AddIncome";
import { EditIncome } from "../../modals/EditIncome";
export const ProviderPage = () => {
  //State
  const [ state, setState ] = useState({
    addProduct  : false,
    editProduct : false,
    addService  : false,
    editService : false
  });
  //Handlers
  const handleChange = (name, status) => {
    setState({ ...state, [name]: status });
  };

  return (
    <Container>
      {/*---------Info about the provider---------*/}
      <ProviderInfo />
      {/*--------------*/}

      {/*---------Services----*/}
      <ListContainer>
        <Name>Servicios</Name>
        <List>
          {[ 1, 2, 3, 4, 5 ].map((value) => (
            <Income
              key={value}
              onClick={() => {
                handleChange("editService", true);
              }}
            />
          ))}
        </List>
        <AddButton
          position="static"
          onClick={() => {
            handleChange("addService", true);
          }}
        />
      </ListContainer>
      {/*--------------*/}

      {/*---------Products----*/}
      <ListContainer>
        <Name>Productos</Name>
        <List>
          {[ 1, 2, 3, 4, 5 ].map((value) => (
            <Income
              key={value}
              onClick={() => {
                handleChange("editProduct", true);
              }}
            />
          ))}
        </List>
        <AddButton
          position="static"
          onClick={() => {
            handleChange("addProduct", true);
          }}
        />
      </ListContainer>
      {/*--------------*/}

      {/*---------Modals----*/}
      {
        //services
      }
      <AddIncome
        closeModal={() => handleChange("addService", false)}
        isOpen={state.addService}
        incomeName="servicio"
      />
      <EditIncome
        closeModal={() => handleChange("editService", false)}
        isOpen={state.editService}
        incomeName="servicio"
      />
      {
        //products
      }
      <AddIncome
        closeModal={() => handleChange("addProduct", false)}
        isOpen={state.addProduct}
        incomeName="producto"
      />
      <EditIncome
        closeModal={() => handleChange("editProduct", false)}
        isOpen={state.editProduct}
        incomeName="producto"
      />
      {/*--------------*/}
    </Container>
  );
};
