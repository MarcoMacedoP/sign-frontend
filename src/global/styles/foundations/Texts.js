import { css } from "styled-components";
import { blackColor, fontTitle } from "../variables";
export const setHeadlineText = (
  { size = "6rem", weigth = "normal", color = blackColor } = {}
) => css`
  font-size: ${size};
  font-family: ${fontTitle};
  font-weight: ${weigth};
  color: ${color};
`;
