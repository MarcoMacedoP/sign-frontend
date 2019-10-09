import React from "react";
import {MaterialIcon} from "../../styles/foundations/MaterialIcon";
import {
  Container,
  Picture,
  Description,
  Title,
  PictureContainer,
  IconContainer
} from "./styles";
export const PictureCard = ({
  className,
  picture,
  description,
  title,
  onClick
}) => (
  <Container className={className} onClick={onClick}>
    <PictureContainer>
      <Picture url={picture} />
    </PictureContainer>
    <Title>{title || "Nombre de usuario"}</Title>
    <Description>
      {description ||
        "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos…"}
    </Description>
    <IconContainer>
      <MaterialIcon>arrow_forward_ios</MaterialIcon>
    </IconContainer>
  </Container>
);
