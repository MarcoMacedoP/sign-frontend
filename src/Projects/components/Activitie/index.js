import React from "react";
//styled-components
import { Container } from "./styles";
export const Activitie = ({ name, dueDate }) => (
  <Container>
    <p>{name || "activitie name"}</p>
    <p>{dueDate || "due date"}</p>
  </Container>
);
