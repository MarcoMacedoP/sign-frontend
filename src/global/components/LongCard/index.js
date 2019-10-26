import React from "react";
import {
  Container,
  Picture,
  Title,
  Date,
  PictureContainer,
  IconContainer
} from "./styles";
//components
import {Icon} from "../Icon";
/**
 * @description Makes a long card full size of the width
 */
export const LongCard = ({title, date, picture, about, onClick}) => (
  <Container onClick={onClick}>
    {picture && (
      <PictureContainer>
        <Picture image={picture} />
      </PictureContainer>
    )}
    <Title>{title}</Title>

    <Date>{date || about}</Date>
    <IconContainer>
      <Icon icon="arrow_forward_ios" />
    </IconContainer>
  </Container>
);
