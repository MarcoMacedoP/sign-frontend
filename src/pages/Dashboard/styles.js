import styled from "styled-components";
import {
  mainColor,
  whiteColor,
  blackColor
} from "../../styles/variables";
import { setHeadlineText } from "../../styles/foundations/Texts";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-rows: min-content 1fr;
`;
export const Title = styled.h1`
  margin: 0 auto;
  padding: 1rem 0;
  grid-column: 1/-1;
  grid-row: 1/2;
  ${setHeadlineText({ size: "3rem" })};
`;
export const Card = styled(Link)`
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 3px 6px 0 rgba(112, 112, 112, 0.5);
  width: 100%;
  height: 30vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${setHeadlineText({
    size   : "1.5rem",
    weigth : "500",
    color  : blackColor
  })};
  &:hover {
    background-color: ${mainColor};
    color:${whiteColor};
  }
`;
