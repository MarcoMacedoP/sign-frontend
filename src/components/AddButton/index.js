import React from "react";
import { Button, Container } from "./styles";
export const AddButton = ({ direction, Modal, position }) => {
  return (
    <Container position={position}>
      <Button>add</Button>
    </Container>
  );
};
