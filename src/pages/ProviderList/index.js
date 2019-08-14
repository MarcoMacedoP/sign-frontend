import React from "react";
//Components
import { PictureCard } from "../../components/PictureCard";
import { SearchBar } from "../../components/SearchBar";
import { LongCard } from "../../components/LongCard";
import { AddButton } from "../../components/AddButton";
import { Link } from "react-router-dom";
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
        <Link key={actualValue} to={`/app/providers/${actualValue}`}>
          <PictureCard />
        </Link>
      ))}
    </BigProvidersList>

    <LongProvidersList>
      {[ 1, 2, 3, 4 ].map((actualValue) => (
        <Link key={actualValue} to={`/app/providers/${actualValue}`}>
          <LongCard />
        </Link>
      ))}
    </LongProvidersList>
    <AddButton />
  </Container>
);
