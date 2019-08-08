import styled from "styled-components";
import {
  mainColor,
  whiteColor,
  blackColor
} from "../../styles/variables";
import { setHeadlineText } from "../../styles/foundations/Texts";
import { Link } from "react-router-dom";
import backgroundImage from "../images/backgroundImage.svg";
export const Container = styled.div`
  overflow: none;
  width: 100%;
  height: 91.25vh;
  padding: 7%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  grid-template-rows: repeat(3, minmax(15vh, min-content));
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: bottom;
`;
export const Card = styled(Link)`
  text-decoration: none;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  box-shadow: 0 3px 6px 0 rgba(112, 112, 112, 0.5);
  background-color: ${whiteColor};
  width: 100%;
  max-height: 121px;
  height: 100%;
  cursor: pointer;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  
  
  box-shadow: 0 3px 6px 0 rgba(112, 112, 112, 0.5);
  ${setHeadlineText({
    size   : "1.5rem",
    weigth : "500",
    color  : blackColor
  })};
  &:last-child{
    grid-column: 1/-1;
    width: 50%;
    margin: 0 auto;
  }
  &:hover {
    opacity: 1;
    box-shadow: 0 3px 6px 0 #ff82ee;
  }

`;
export const Icon = styled.img`
  grid-column: 1/2;
  grid-row: 1/-1;
`;
export const Title = styled.h2`
  font-size: 0.875rem;
  grid-column: 2/-1;
  grid-row: 1/2;

  display: flex;
  align-items: flex-end;
`;
export const Description = styled.p`
  min-height: 55px;
  display: flex;
  align-items: flex-start;
  width: 70%;
  font-size: 1rem;
  grid-column: 2/-1;
  grid-row: 2/-1;
`;
