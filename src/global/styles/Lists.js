import styled from "styled-components";
import { mainColorLight  } from "./variables"
import { Container as PictureCard } from "../components/PictureCard/styles";
export const BigList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  * {
    text-decoration: none;
  }
  margin-bottom: 3rem;
`;
export const LongList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  //Selecting <Link> childs
  a {
    margin-top: 1rem;
    width: 100%;
  }
  a:first-child {
    margin-top: 0;
  }
  * {
    text-decoration: none;
  }
`;
export const GridList = styled.ul`
  margin-top: 1rem;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  ${PictureCard}:nth-of-type(2n){
      background-color: ${mainColorLight};
  }
`;
