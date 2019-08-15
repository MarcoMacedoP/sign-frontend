import React from "react";
import { Container, ListContainer, List, Name } from "./styles";
import { ProviderInfo } from "../ProviderInfo";
import { ProductOrService } from "../ProductOrService";
import { AddButton } from "../../../global/components/AddButton";
export const ProviderPage = () => (
  <Container>
    {/*---------Info about the provider---------*/}
    <ProviderInfo />
    {/*--------------*/}

    {/*---------Services----*/}
    <ListContainer>
      <Name>Servicios</Name>
      <List>{[ 1, 2, 3, 4, 5 ].map(() => <ProductOrService />)}</List>
      <AddButton position="static" />
    </ListContainer>
    {/*--------------*/}

    {/*---------Products----*/}
    <ListContainer>
      <Name>Productos</Name>
      <List>{[ 1, 2, 3, 4, 5 ].map(() => <ProductOrService />)}</List>
      <AddButton position="static" />
    </ListContainer>
    {/*--------------*/}
  </Container>
);
