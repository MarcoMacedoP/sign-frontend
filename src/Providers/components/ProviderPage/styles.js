import styled from "styled-components";
import {
  appPadding,
  blackColorLigth,
  fontTitle
} from "../../../global/styles/variables";

export const Container = styled.div`
  padding: ${appPadding};
  position: relative;
`;
export const ListContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 15vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.5rem;
  row-gap: 2.5rem;
`;
export const Name = styled.h3`
  font-size: 1.5rem;
  color: ${blackColorLigth};
  font-weight: 500;
  font-family: ${fontTitle};
  margin: 1.8rem 0 1.5rem 0;
`;
