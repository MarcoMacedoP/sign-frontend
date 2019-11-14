import React from "react";
import {
  Title,
  Picture,
  PictureContainer,
  About
} from "../LongCard/styles";
import {useHandleState} from "../../hooks/useHandleState";
import {StyledContainer} from "./styles";

export function SelectionCard({onSelect, title, about, picture}) {
  const {state, toggleStateValue} = useHandleState({
    isSelected: false
  });
  const handleSelect = () => {
    toggleStateValue("isSelected");
    onSelect && onSelect();
  };
  return (
    <StyledContainer onClick={handleSelect} status={state}>
      <PictureContainer>
        <Picture image={picture} />
      </PictureContainer>
      <Title>{title}</Title>
      <About>{about}</About>
    </StyledContainer>
  );
}
