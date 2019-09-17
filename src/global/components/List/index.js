import React from "react";
import { SearchBar, AddButton } from "..";
// styled-components
import { Container, SearchBarContainer, Title } from "./styles";
/**
 * Shows a list of a determinate React-Component
 */
export const List = ({ title, children, onAddButtonClick }) => (
  <Container>
    <Title>{title}</Title>
    <SearchBarContainer>
      <SearchBar />
    </SearchBarContainer>
    {children}
    <AddButton onClick={onAddButtonClick} />
  </Container>
);
