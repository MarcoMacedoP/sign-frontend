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
  className?: string;
}
export const ItemList: React.FC<ItemListProps> = ({
  title,
  children,
  onAddButtonClick,
  addMessage,
  isLoading,
  className
}) => (
  <StyledAside className={className}>
    <StyledTitle>{title}</StyledTitle>
    <StyledUl>
      {children}
      {isLoading && <StyledLoading />}
    </StyledUl>
    {onAddButtonClick && (
      <StyledAddSection onClick={onAddButtonClick}>
        <AddButton position="static" onClick={onAddButtonClick} />
        <p>{addMessage}</p>
      </StyledAddSection>
    )}
  </StyledAside>
);

interface ItemProps {
  image?: string;
  name: string;
  direction?: string;
  onDelete?: Function;
  onClick?: Function;
}
export const Item: React.FC<ItemProps> = ({
  image,
  name,
  direction,
  onDelete,
  onClick
}) => {
  const [showDelete, setShowDelete] = React.useState(false);
  const handleMouseHover = () => setShowDelete(true);
  const handleMouseOut = () => setShowDelete(false);
  const handleDelete = (e: Event) => {
    //TODO: for some reason without this the router sends to main page. ??
    e.preventDefault();
    onDelete && onDelete();
  };
  const handleClick = (e: Event) => {
    e.preventDefault();
    onClick && onClick();
  };
  return (
    <StyledLi onMouseOver={handleMouseHover} onMouseLeave={handleMouseOut}>
      <StyledLink to={direction || ""} onClick={handleClick}>
        <StyledPicture>{image && <img src={image} alt="" />}</StyledPicture>
        <p>{name}</p>
        {onDelete && showDelete && <StyledDeleteIcon onClick={handleDelete} />}
      </StyledLink>
    </StyledLi>
  );
};
