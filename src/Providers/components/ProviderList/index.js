import React from "react";
//Components
import { PictureCard } from "../../../global/components/PictureCard";
import { SearchBar } from "../../../global/components/SearchBar";
import { LongCard } from "../../../global/components/LongCard";
import { AddButton } from "../../../global/components/AddButton";
import { Link } from "react-router-dom";
//Styled Components
import {
  Container,
  BigProvidersList,
  LongProvidersList,
  SearchBarContainer,
  Title
} from "./styles";

export const ProviderList = ({ data }) => {
  let bigProviders = data.slice(0, 4);
  let longProviders = data.slice(4);

  return (
    <Container>
      <Title>Proveedores</Title>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <BigProvidersList>
        {bigProviders.map(
          ({ id, name, lastname, image_url, about }) => (
            <Link key={id} to={`/app/providers/${id}`}>
              <PictureCard
                title={`${name} ${lastname}`}
                picture={image_url}
                description={about}
              />
            </Link>
          )
        )}
      </BigProvidersList>

      <LongProvidersList>
        {longProviders.map(
          ({ id, name, lastname, image_url, about }) => (
            <Link key={id} to={`/app/providers/${id}`}>
              <LongCard
                title={`${name} ${lastname}`}
                picture={image_url}
                description={about}
              />
            </Link>
          )
        )}
      </LongProvidersList>
      <AddButton />
    </Container>
  );
};
