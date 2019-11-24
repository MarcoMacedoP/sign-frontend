import React from "react";
import { Button } from "./styles";

import { ButtonProps } from "../Button";
interface SecondaryButtonProps extends ButtonProps {
  bordercolor?: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  bordercolor,
  variant = "contained",
  children,
  width = "",
  onClick,
  className
}) => (
  <Button
    className={className}
    variant={variant}
    bordercolor={bordercolor}
    width={width}
    onClick={onClick}
  >
    {children}{" "}
  </Button>
);
