import React from "react";
import {
  Container,
  Picture,
  Title,
  Date,
  ArrowIcon,
  PictureContainer
} from "./styles";
export const LongCard = ({ title, date, picture }) => (
  <Container>
    <PictureContainer>
      <Picture image={picture} />
    </PictureContainer>
    <Title>{title || "name"}</Title>

    <Date>{date || "04/08/2000"}</Date>
    <ArrowIcon>arrow_forward_ios</ArrowIcon>
  </Container>
);
