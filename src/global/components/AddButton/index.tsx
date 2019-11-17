import React from "react";
import { Button, Container } from "./styles";

interface AddButtonProps {
  position?: "fixed" | "static" | "absolute";
  onClick: Function;
  isCallToAction?: boolean;
}
export const AddButton: React.FC<AddButtonProps> = ({
  position,
  onClick,
  isCallToAction
}) => {
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
