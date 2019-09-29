import styled from "styled-components";
import {
  blackColor,
  fontTitle,
  blackColorLigth,
  fontBody,
  whiteColorDark
} from "./variables";
import {css} from "styled-components";

//media-querys
import {cellphoneMediaQuery} from "./mediaQuerys";

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

export const H1 = styled.h1`
  ${setHeadlineText({size: "3rem"})}
  @media ${cellphoneMediaQuery}{
      font-size: 2rem;
  }
`;
export const H2 = styled.h2`
  ${setHeadlineText({size: "2rem", weigth: "500"})}
  @media ${cellphoneMediaQuery}{
      font-size: 1.5rem;
  }
`;
export const H3 = styled.h3`
  ${setHeadlineText({
    size: "1.5rem",
    color: blackColorLigth,
    weigth: "500"
  })};
  @media ${cellphoneMediaQuery} {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${blackColorLigth};
  font-family: ${fontBody};
`;
export const Caption = styled.caption`
  font-size: 0.85rem;
  color: ${whiteColorDark};
  text-align: initial;
`;
