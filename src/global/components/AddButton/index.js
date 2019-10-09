import React from "react";
import {Button, Container} from "./styles";
export const AddButton = ({position, onClick, isCallToAction}) => {
  debugger;
  return (
    <Container
      isCallToAction={isCallToAction}
      position={position}
      onClick={onClick}
    >
      <Button>add</Button>
    </Container>
  );
};
