import React from "react";
import { AddButton, Loading, ErrorMessage } from "..";
// styled-components
import { Container, StyledSmallEmptyState } from "./styles";
import { H1 } from "../../styles/texts";
import { SmallEmptyStateProps } from "../SmallEmptyState";

interface ListProps {
  title: string;
  onAddButtonClick?: Function | any;
  isLoading: boolean | any;
  error?: string | null;
  onErrorClose?: Function | any;
  isEmpty?: boolean | any;
  infoDisplayedOnEmpty?: EmptyListStateProps;
}
/**
 * Shows a list of a determinate React-Component
 */
export const List: React.FC<ListProps> = ({
  title,
  children,
  onAddButtonClick,
  isLoading,
  error,
  onErrorClose,
  isEmpty,
  infoDisplayedOnEmpty
}) => (
  <Container>
    <H1>{title}</H1>
    {/* <SearchBarContainer><SearchBar /> </SearchBarContainer> */}

    {isLoading ? <Loading /> : children}
    {isEmpty && infoDisplayedOnEmpty && (
      <EmptyListState {...infoDisplayedOnEmpty} />
    )}
    <ErrorMessage error={error} onClose={onErrorClose} />
    <AddButton onClick={onAddButtonClick} isCallToAction={isEmpty} />
  </Container>
);

interface EmptyListStateProps extends SmallEmptyStateProps {}
export const EmptyListState: React.FC<EmptyListStateProps> = props => (
  <StyledSmallEmptyState {...props} />
);
