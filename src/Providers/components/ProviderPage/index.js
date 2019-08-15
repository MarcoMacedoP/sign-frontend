import React, { useState } from "react";
import { Container, ListContainer, List, Name } from "./styles";
import { ProviderInfo } from "../ProviderInfo";
import { ProductOrService } from "../ProductOrService";
import { AddButton } from "../../../global/components/AddButton";
import { Modal } from "../../../global/components/Modal";
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
          {[ 1, 2, 3, 4, 5 ].map(() => <ProductOrService />)}
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
          {[ 1, 2, 3, 4, 5 ].map(() => <ProductOrService />)}
        </List>
        <AddButton position="static" />
      </ListContainer>
      {/*--------------*/}

      {
        /*---------Modals----*/
        <Modal
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
