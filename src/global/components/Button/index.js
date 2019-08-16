import React from "react";

import { Btn } from "./styles";

export const Button = ({
  variant = "contained",
  children,
  onClick,
  width
}) => (
  <Btn variant={variant} onClick={onClick} width={width}>
    {children}
  </Btn>
);
