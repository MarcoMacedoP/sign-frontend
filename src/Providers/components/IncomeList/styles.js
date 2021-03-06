import styled from "styled-components";
import {
  blackColorLigth,
  fontTitle
} from "../../../global/styles/variables";

export const ListContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  width: 100%;
`;
export const Name = styled.h3`
  font-size: 1.5rem;
  color: ${blackColorLigth};
  font-weight: 500;
  font-family: ${fontTitle};
  margin: 1.8rem 0 1.5rem 0;
`;
