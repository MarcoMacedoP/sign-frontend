import React from "react";
//Components
import { PictureCard } from "../../components/PictureCard/";
import { SearchBar } from "../../components/SearchBar/";
import { LongCard } from "../../components/LongCard/";
//Styled Components
import {
  Container,
  BigProvidersList,
  LongProvidersList,
  SearchBarContainer,
  Title
} from "./styles";

export const Providers = () => (
  <Container>
    <Title>Proveedores</Title>
    <SearchBarContainer>
      <SearchBar />
    </SearchBarContainer>
    <BigProvidersList>
      {[ 1, 2, 3, 4 ].map((actualValue) => (
        <li key={actualValue}>
          <PictureCard />
        </li>
      ))}
    </BigProvidersList>

    <LongProvidersList>
      {[ 1, 2, 3, 4 ].map((actualValue) => (
        <li key={actualValue}>
          <LongCard />
        </li>
      ))}
    </LongProvidersList>
  </Container>
);
