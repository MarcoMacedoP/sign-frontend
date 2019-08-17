import styled from "styled-components";
import {
  whiteColor,
  blackColorTransparent,
  secondaryColorLigth
} from "../../styles/variables";
export const Container = styled.div`
  max-width: 100%;
  height: 15.21vh;
  min-height: 121px;

  box-shadow: 0 3px 6px 0 ${blackColorTransparent};
  background-color: ${whiteColor};
  margin: 0.5rem;
  cursor: pointer;

  box-sizing: border-box;
  overflow: hidden;

  display: grid;
  grid-template-columns: 20.19% 3fr 1fr;
  grid-template-rows: 1fr 3fr;
  row-gap: 1rem;
  column-gap: 1rem;
`;

export const PictureContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/-1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: inherit;
  padding-left: 1rem;
  box-sizing: border-box;
`;
export const Picture = styled.picture`
  display: block;
  width: 6.875vw;
  height: 6.875vw;
  min-width: 4rem;
  min-height: 4rem;
  border-radius: 50%;

  ${(props) =>
    props.url
      ? `background-image:url(${props.url})`
      : `background-color: ${secondaryColorLigth}`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Description = styled.p`
  grid-column: 2/3;
  grid-row: 2/-1;
  margin-bottom: 1rem;
`;
export const Title = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;

  font-size: 0.86rem;
  font-weight: bold;

  display: flex;
  align-items: flex-end;

  margin-top: 1rem;
`;
export const IconContainer = styled.div`
  grid-column: 3/-1;
  grid-row: 1/-1;

  height: inherit;
  display: flex;
  align-items: center;

  position: relative;
  i {
    position: absolute;
    right: 0.86rem;
  }
`;
