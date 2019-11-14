import React from "react";
import {AddButton} from "../";

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

export const ItemList = ({
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

export const Item = ({image, name, direction, onDelete}) => (
  <StyledLi>
    <StyledLink to={direction}>
      <StyledPicture>
        {image && <img src="" alt={image} />}
      </StyledPicture>
      <p>{name}</p>
      <StyledDeleteIcon onClick={onDelete} />
    </StyledLink>
  </StyledLi>
);
