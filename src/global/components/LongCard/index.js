import React from "react";
import {
  Container,
  Picture,
  Title,
  Date,
  ArrowIcon,
  PictureContainer
} from "./styles";

/**
 * @description Makes a long card full size of the width
 */
export const LongCard = ({ title, date, picture, onClick }) => (
  <Container onClick={onClick}>
    <PictureContainer>
      <Picture image={picture} />
    </PictureContainer>
    <Title>{title || "name"}</Title>

    <Date>{date || "04/08/2000"}</Date>
    <ArrowIcon>arrow_forward_ios</ArrowIcon>
  </Container>
);
