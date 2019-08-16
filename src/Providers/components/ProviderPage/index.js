import React, { useState } from "react";
import { Container, ListContainer, List, Name } from "./styles";
import { ProviderInfo } from "../ProviderInfo";
import { Income } from "../Income";
import { AddButton } from "../../../global/components/AddButton";
import { AddIncome } from "../../modals/AddIncome";
export const ProviderPage = () => {
  const [ addServiceIsOpen, setAddServiceIsOpen ] = useState(true); //Return this to false

  return (
    <Container>
      {/*---------Info about the provider---------*/}
      <ProviderInfo />
      {/*--------------*/}

      {/*---------Services----*/}
      <ListContainer>
        <Name>Servicios</Name>
        <List>
          {[ 1, 2, 3, 4, 5 ].map((value) => <Income key={value} />)}
        </List>
        <AddButton
          position="static"
          onClick={() => setAddServiceIsOpen(true)}
        />
      </ListContainer>
      {/*--------------*/}

      {/*---------Products----*/}
      <ListContainer>
        <Name>Productos</Name>
        <List>
          {[ 1, 2, 3, 4, 5 ].map((value) => <Income key={value} />)}
        </List>
        <AddButton position="static" />
      </ListContainer>
      {/*--------------*/}

      {
        /*---------Modals----*/
        <AddIncome
          closeModal={() => {
            setAddServiceIsOpen(false);
          }}
          isOpen={addServiceIsOpen}
        />

        /*--------------*/
      }
    </Container>
  );
};
