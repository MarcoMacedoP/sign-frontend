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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  grid-template-rows: repeat(3, minmax(120px, 16vh));

  background-image: url(${backgroundImage});
  background-position: bottom;
  background-size: cover;

  @media ${cellphoneMediaQuery} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: repeat(3, minmax(130px, 15vh));
  }
`;
