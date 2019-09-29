import React from "react";
import {Icon} from "../../../global/components/";
//styled-components
import {
  Container,
  Title,
  Date,
  IconContainer,
  DateIcon
} from "./styles";

export const Activitie = ({name, dueDate}) => (
  <Container>
    <Title>{name || "activitie name"}</Title>
    <Date>
      <DateIcon
        size={12}
        icon="access_time"
        hasAnimatedClick={false}
      />
      {dueDate || "due date"}
    </Date>
    <IconContainer>
      <Icon icon="arrow_forward_ios" />
    </IconContainer>
  </Container>
);
