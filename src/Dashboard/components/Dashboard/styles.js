import styled from "styled-components";
import {
  cellphoneMediaQuery,
  laptopScreen
} from "../../../global/styles/mediaQuerys";
// static
import backgroundImage from "../../../global/static/img/background.svg";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 3rem 7% 0 7%;

  position: relative;

  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  grid-template-rows: repeat(3, minmax(min-content, auto));

  background-image: url(${backgroundImage});
  background-position: bottom;
  background-size: cover;

  overflow-y: scroll;

  @media screen and (max-width: 900px) {
    grid-template-columns: minmax(300px, 1fr);
    grid-template-rows: repeat(3, minmax(130px, 15vh));
  }
  @media ${laptopScreen} {
    grid-template-rows: repeat(3, 130px);
    padding-top: 7vh;
  }
  @media ${cellphoneMediaQuery} {
    padding-top: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(min-content, auto));
  }
`;
