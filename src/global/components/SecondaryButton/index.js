import React from "react";
import {Button} from "./styles";

export const SecondaryButton = ({
  bordercolor,
  variant = "contained",
  children,
  width,
  onClick,
  type,
  className
}) => (
  <Button
    className={className}
    variant={variant}
    bordercolor={bordercolor}
    width={width}
    onClick={onClick}
    type={type}
  >
    {children}{" "}
  </Button>
);
