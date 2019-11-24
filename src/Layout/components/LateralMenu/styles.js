import styled from "styled-components";
import { Link } from "react-router-dom";
import { whiteColorLigth, whiteColor } from "../../../global/styles/variables";
const widthTransition = "width 120ms linear";
const heightTransition = "height 120ms linear";
export const Menu = styled.aside`
  position: fixed;
  padding-top: 3rem;
  top: 0;
  background: ${whiteColorLigth};
  height: 100vh;
  transition: ${widthTransition};
  width: 5vw;
  min-width: 60px;
  max-width: 296px;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 3px 7px 0 rgba(50, 54, 53, 0.3);
`;

export const Header = styled(Link)`
  box-sizing: border-box;
  min-height: 5rem;
  height: 12%;
  width: 100%;
  cursor: pointer;
  margin: 0;
  padding-left: 0;
  display: flex;

  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.5rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
export const ProfileImage = styled.div`
  transition: ${widthTransition}, ${heightTransition};
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  grid-row: 1/-1;
  grid-column: 1/-1;
  border-radius: 50%;
  background: ${whiteColor};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${props => props.image && `url("${props.image}")`};
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;
