import React from "react";
import { AddButton } from "..";

//styled-components
import {
  StyledAside,
  StyledUl,
  StyledLoading,
  StyledAddSection,
  StyledTitle,
  StyledLi,
  StyledPicture,
  StyledLink,
  StyledDeleteIcon
} from "./styles";

interface ItemListProps {
  title: string;
  onAddButtonClick: Function | any;
  addMessage: string;
  isLoading: boolean | any;
}
export const ItemList: React.FC<ItemListProps> = ({
  title,
  children,
  onAddButtonClick,
  addMessage,
  isLoading
}) => (
  <StyledAside>
    <StyledTitle>{title}</StyledTitle>
    <StyledUl>
      {children}
      {isLoading && <StyledLoading />}
    </StyledUl>
    <StyledAddSection onClick={onAddButtonClick}>
      <AddButton position="static" onClick={onAddButtonClick} />
      <p>{addMessage}</p>
    </StyledAddSection>
  </StyledAside>
);

interface ItemProps {
  image?: string;
  name: string;
  direction?: string;
  onDelete: Function;
}
export const Item: React.FC<ItemProps> = ({
  image,
  name,
  direction,
  onDelete
}) => (
  <StyledLi>
    <StyledLink to={direction || ""}>
      <StyledPicture>{image && <img src="" alt={image} />}</StyledPicture>
      <p>{name}</p>
      <StyledDeleteIcon onClick={onDelete} />
    </StyledLink>
  </StyledLi>
);
