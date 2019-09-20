import React from "react";
import { SearchBar, AddButton } from "..";
// styled-components
import { Container, SearchBarContainer } from "./styles";
import { H1 } from "../../styles/texts";
/**
 * Shows a list of a determinate React-Component
 */
export const List = ({ title, children, onAddButtonClick }) => (
  <Container>
    <H1>{title}</H1>
    <SearchBarContainer>
      <SearchBar />
    </SearchBarContainer>
    {children}
    <AddButton onClick={onAddButtonClick} />
  </Container>
);
