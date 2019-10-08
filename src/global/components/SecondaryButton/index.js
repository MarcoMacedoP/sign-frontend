import React from "react";
import {Button} from "./styles";

export const SecondaryButton = ({
  bordercolor,
  variant = "contained",
  children,
  width,
  onClick,
  type
}) => (
  <Button
    variant={variant}
    bordercolor={bordercolor}
    width={width}
    onClick={onClick}
    type={type}
  >
    {children}{" "}
  </Button>
);
