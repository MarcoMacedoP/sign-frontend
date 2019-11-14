import styled from "styled-components";
import {
  blackColorTransparent,
  whiteColor,
  secondaryColorLigth
} from "../../styles/variables";
export const Container = styled.div`
  width: 100%;
  min-height: 80px;
  box-sizing: border-box;
  box-shadow: 0 3px 6px 0 ${blackColorTransparent};
  background-color: ${whiteColor};
  padding: 1rem;
  position: relative;
  display: grid;
  grid-template-columns: 3rem 1fr 1fr 3rem;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1rem;

  cursor: pointer;
`;
export const PictureContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  grid-column: 1/2;
  grid-row: 1/-1;
`;

export const Picture = styled.picture`
  background: ${props =>
    props.image ? `url(${props.image})` : secondaryColorLigth};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
export const Title = styled.p`
  font-size: 0.856rem;
  font-weight: bold;
  grid-column: 2/3;
  grid-row: 1/-1;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const About = styled.p`
  height: 100%;

  display: flex;
  align-items: center;

  grid-column: 3/4;
  grid-row: 1/-1;
`;

export const IconContainer = styled.div`
  grid-column: 4/-1;
  grid-row: 1/-1;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
