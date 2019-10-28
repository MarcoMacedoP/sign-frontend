import styled from "styled-components";
import {cellphoneMediaQuery} from "../../../global/styles/mediaQuerys";
// static
import backgroundImage from "../../../global/static/img/background.svg";
export const Container = styled.div`
  width: 100%;
  height: min-content;
  padding: 7%;
  box-sizing: border-box;

  position: relative;

  display: grid;
  grid-template-columns: repeat(2, minmax(300px, auto));
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  grid-template-rows: repeat(3, minmax(min-content, auto));

  background-image: url(${backgroundImage});
  background-position: bottom;
  background-size: cover;
  @media screen and (max-width: 900px) {
    grid-template-columns: minmax(300px, 1fr);
    grid-template-rows: repeat(3, minmax(130px, 15vh));
  }
  @media ${cellphoneMediaQuery} {
    grid-template-columns: minmax(250px, 1fr);
    grid-template-rows: repeat(3, minmax(min-content, auto));
  }
`;
