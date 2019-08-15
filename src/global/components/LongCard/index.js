import React from "react";
import {
  Container,
  Picture,
  Title,
  Description,
  Date,
  ArrowIcon,
  PictureContainer
} from "./styles";
export const LongCard = ({ name, date, description, image }) => (
  <Container>
    <PictureContainer>
      <Picture image={image} />
    </PictureContainer>
    <Title>{name || "name"}</Title>
    <Description>{description || "About this..."}</Description>
    <Date>{date || "04/08/2000"}</Date>
    <ArrowIcon>arrow_forward_ios</ArrowIcon>
  </Container>
);
