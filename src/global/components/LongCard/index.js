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
export const LongCard = ({
  title,
  date,
  picture,
  onClick,
  hasPicture
}) => (
  <Container onClick={onClick}>
    {hasPicture && (
      <PictureContainer>
        <Picture image={picture} />
      </PictureContainer>
    )}
    <Title>{title || "Nombre"}</Title>

    <Date>{date || "04/08/2000"}</Date>
    <IconContainer>
      <Icon icon="arrow_forward_ios" />
    </IconContainer>
  </Container>
);
