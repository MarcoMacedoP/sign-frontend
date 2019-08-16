import React from "react";
import { Button } from "./styles";

export const SecondaryButton = ({
  borderColor,
  variant = "contained",
  children,
  width,
  onClick
}) => (
  <Button
    variant={variant}
    borderColor={borderColor}
    width={width}
    onClick={onClick}>
    {children}{" "}
  </Button>
);
