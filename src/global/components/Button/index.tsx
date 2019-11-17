import * as React from "react";

import { Btn } from "./styles";
import { CircularProgress } from "@material-ui/core";

interface ButtonProps {
  variant?: string;
  onClick?: Function;
  width?: string;
  loading?: boolean;
  className?: string;
  height?: "boolean";
  size?: string;
}
export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  onClick,
  width,
  loading,
  className,
  height,
  size
}) => {
  if (loading) {
    return (
      <Btn className={className} disabled>
        <CircularProgress color="secondary" size="32px" />
      </Btn>
    );
  }
  return (
    <Btn
      size={size || "large"}
      className={className}
      variant={variant}
      onClick={onClick}
      width={width}
      height={height}
    >
      {children}
    </Btn>
  );
};
