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

export const Activitie = ({activitie, onDragStart}) => {
  const {name, date, _id} = activitie;

  const [modalIsOpen, toggleModal] = useModalState();
  const allowDrop = event => event.preventDefault();

  return (
    <Container
      key={_id}
      onClick={toggleModal}
      draggable
      onDragStart={onDragStart}
      onDragOver={allowDrop}
    >
      <Title>{name}</Title>
      {date && (
        <Date>
          <DateIcon
            size={12}
            icon="access_time"
            hasAnimatedClick={false}
          />
          {date}
        </Date>
      )}
      <IconContainer>
        <Icon icon="arrow_forward_ios" />
      </IconContainer>
      <ActivitieModal
        activitie={activitie}
        isOpen={modalIsOpen}
        onClose={toggleModal}
      />
    </Container>
  );
};
