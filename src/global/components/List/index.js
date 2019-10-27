import React from "react";
import {SearchBar, AddButton, Loading, ErrorMessage} from "..";
// styled-components
import {Container, SearchBarContainer} from "./styles";
import {H1} from "../../styles/texts";
/**
 * Shows a list of a determinate React-Component
 */
export const List = ({
  title,
  children,
  onAddButtonClick,
  isLoading,
  error,
  onErrorClose
}) => (
  <Container>
    <H1>{title}</H1>
    {/* <SearchBarContainer>
      <SearchBar />
    </SearchBarContainer> */}
    {isLoading ? <Loading /> : children}
    <ErrorMessage error={error} onClose={onErrorClose} />
    <AddButton onClick={onAddButtonClick} />
  </Container>
);
