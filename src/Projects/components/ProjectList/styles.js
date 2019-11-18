import styled from "styled-components";
import {
  whiteColor,
  blackColorTransparent,
  mainColor,
  mainColorLight,
  secondaryColor,
  secondaryColorLigth,
  blackColorLigth
} from "../../../global/styles/variables";

export const StyledProjectCard = styled.article`
  border-radius: 1rem;
  box-shadow: 0 3px 6px 0 ${blackColorTransparent};
  background: linear-gradient(180deg, ${mainColor} 0%, ${mainColorLight} 100%);
  cursor: pointer;
  box-sizing: border-box;
  min-height: 200px;
  position: relative;
  transition: opacity 100ms ease-in;
  &:hover {
    opacity: 0.75;
  }
`;

export const StyledGridProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;

  ${StyledProjectCard}:nth-of-type(2n) {
    background: linear-gradient(
      180deg,
      ${secondaryColor} 0%,
      ${secondaryColorLigth} 100%
    );
  }
`;

export const StyledInfo = styled.div`
  height: 50%;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: ${whiteColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;

  p {
    width: 100%;
    text-align: center;
  }
  p:nth-of-type(2) {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: ${blackColorLigth};
  }
`;
export const StyledH3ProjectCard = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-bottom: 0.25rem;
`;
