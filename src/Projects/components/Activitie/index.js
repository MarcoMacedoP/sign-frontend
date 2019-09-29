import React from "react";
//components
import {Icon} from "../../../global/components/";
import ActivitieModal from "../ActivitieModal";
//hooks
import {useModalState} from "../../../global/hooks/";
//styled-components
import {
  Container,
  Title,
  Date,
  IconContainer,
  DateIcon
} from "./styles";

export const Activitie = props => {
  const {name, dueDate} = props;
  const {handleModal, modalIsOpen} = useModalState();
  debugger;

  return (
    <>
      <ActivitieModal
        activitie={props}
        isOpen={modalIsOpen}
        onClose={handleModal}
      />
      <Container onClick={handleModal}>
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
    </>
  );
};
