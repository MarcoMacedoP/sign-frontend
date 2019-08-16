import styled from "styled-components";
import {
  whiteColor,
  positiveStatusColor,
  whiteColorLigth,
  blackColorTransparent
} from "../../../global/styles/variables";
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";
export const Container = styled.div`
  min-width: 13rem;
  min-height: 9rem;
  width: 18.25vw;
  height: 20.875vh;
  margin: 0.5rem;
  padding: 1rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  background-color: ${whiteColor};
  box-shadow: 0 3px 6px 0 ${blackColorTransparent};
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 0 6px 7px 0 ${blackColorTransparent};
  }
  /* ... */
`;
export const P = styled.p`width: 80%;`;
export const Price = styled.span`
  padding: 2px 8px;
  margin-top: 1rem;
  border-radius: 0.5rem;
  background-color: ${positiveStatusColor};
  color: ${whiteColorLigth};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
export const MoneyIcon = styled(MaterialIcon)`
font-size: 1rem;
padding: 0;
color: ${whiteColorLigth};
`;

export const ArrowIcon = styled(MaterialIcon)`
position: absolute;
right: 0;

`;
