import React from "react";
//styled-components
import { Container, Title, Date } from "./styles";
export const Activitie = ({ name, dueDate }) => (
  <Container>
    <Title>{name || "activitie name"}</Title>
    <Date>{dueDate || "due date"}</Date>
  </Container>
);
