import styled from "styled-components";
import {
  whiteColor,
  blackColorTransparent,
  secondaryColorLigth
} from "../../styles/variables";
import { mediumScreen } from "../../styles/mediaQuerys";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  max-width: 100%;
  height: 15.21vh;
  min-height: 121px;

  box-shadow: 0 3px 6px 0 ${blackColorTransparent};
  background-color: ${whiteColor};
  border-radius: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;

  box-sizing: border-box;
  overflow: hidden;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: min-content;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding-left: 1rem;
  box-sizing: border-box;
`;
export const Picture = styled.picture`
  display: block;
  --size: 4rem;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);
  border-radius: 50%;

  ${props =>
    props.url
      ? `background-image:url('${props.url}')`
      : `background-color: ${secondaryColorLigth}`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${mediumScreen} {
    --size: 2rem;
  }
`;
export const Description = styled.p`
  @media ${mediumScreen} {
    font-size: 0.85rem;
  }
`;
export const Title = styled.p`
  font-size: 0.86rem;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  margin: 1rem 0 0.25rem 0;
`;