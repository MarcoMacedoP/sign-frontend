import styled from "styled-components";
import {
  blackColorLigth,
  whiteColorDark,
  blackColor
} from "../../styles/variables";

export const Container = styled.section`
  width: 100%;
  margin: 1rem 0;
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
  width: 18vw;
  height: 18vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 200px;
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
