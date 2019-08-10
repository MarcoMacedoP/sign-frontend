import styled from "styled-components";
import {
  blackColorTransparent,
  whiteColor,
  secondaryColorLigth
} from "../../styles/variables";
import { MaterialIcon } from "../../styles/foundations/MaterialIcon";

export const Container = styled.div`
  min-width: 500px;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  box-shadow: 0 3px 6px 0 ${blackColorTransparent};
  background-color: ${whiteColor};
  padding: 1rem;
  display: grid;
  grid-template-columns: 3rem 1fr 1fr 3rem;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1rem;
`;
export const PictureContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  grid-column: 1/2;
  grid-row: 1/-1;
`;

export const Picture = styled.picture`
  background: ${(props) =>
    props.image ? `url(${props.image})` : secondaryColorLigth};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
export const Title = styled.p`
  font-size: 0.856rem;
  font-weight: bold;
  grid-column: 2/3;
  grid-row: 1/2;
`;
export const Description = styled.p`
  grid-column: 2/3;
  grid-row: 2/-1;
`;
export const Date = styled.p`
  height: 100%;

  display: flex;
  align-items: center;

  grid-column: 3/4;
  grid-row: 1/-1;
`;

export const ArrowIcon = styled(MaterialIcon)`
grid-column: 4/-1;
  grid-row: 1/-1;
`;
