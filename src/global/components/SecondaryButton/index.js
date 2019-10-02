import React from "react";
import {Button} from "./styles";

export const SecondaryButton = ({
  bordercolor,
  variant = "contained",
  children,
  width,
  onClick
}) => (
  <Button
    variant={variant}
    bordercolor={bordercolor}
    width={width}
    onClick={onClick}
  >
    {children}{" "}
  </Button>
);
