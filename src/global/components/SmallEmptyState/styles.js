import styled from "styled-components";
import {
  blackColorLigth,
  whiteColorDark,
  blackColor
} from "../../styles/variables";

export const Container = styled.section`
  width: 100%;
  margin: 1rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h4`
  font-size: 1.5rem;
  color: ${whiteColorDark};
  margin-bottom: 1rem;
`;

export const Picture = styled.picture`
  width: 25vw;
  height: 25vw;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
`;

export const Message = styled.p`
  text-align: center;
  color: ${blackColorLigth};
  width: 80%;
`;

export const CallToAction = styled.p`
  margin-top: 0.5rem;
  color: ${blackColor};
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;
