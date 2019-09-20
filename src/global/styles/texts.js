import styled from "styled-components";
import { blackColor, fontTitle, blackColorLigth } from "./variables";
import { css } from "styled-components";
function setHeadlineText({
  size = "6rem",
  weigth = "normal",
  color = blackColor
}) {
  return css`
    font-size: ${size};
    font-family: ${fontTitle};
    font-weight: ${weigth};
    color: ${color};
  `;
}
//TODO: NORMALIZE TEXTS

export const H1 = styled.h1`
  ${setHeadlineText({ size: "3rem" })}
`;
export const H2 = styled.h2`
  ${setHeadlineText({ size: "2rem" })}
`;
export const H3 = styled.h3`
  ${setHeadlineText({
    size: "1.5rem",
    color: blackColorLigth,
    weigth: "300"
  })};
`;
