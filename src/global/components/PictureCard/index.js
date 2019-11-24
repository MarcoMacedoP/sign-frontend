import React from "react";
import {
  Container,
  Picture,
  Description,
  Title,
  PictureContainer,
} from "./styles";
export const PictureCard = ({
  className="",
  picture,
  description,
  title,
  to = "/",
  onClick = undefined
}) => (
  <Container to={to} className={className} onClick={onClick}>
    <PictureContainer>
      <Picture url={picture} />
    </PictureContainer>
    <Title>{title || "Nombre de usuario"}</Title>
    <Description>
      {description ||
        "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos…"}
    </Description>
  </Container>
);
