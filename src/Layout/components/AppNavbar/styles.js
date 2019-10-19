import styled from "styled-components";
import {
  whiteColorLigth,
  blackColorTransparent,
  appShadow
} from "../../../global/styles/variables";
export const Navbar = styled.nav`
  max-width: 100vw;
  width: 100vw;
  padding: 1rem 3rem;
  box-sizing: border-box;
  max-height: 4rem;
  min-height: 3rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${appShadow};
  z-index: 2;
  position: sticky;
  top: 0;
  background: ${whiteColorLigth};
`;

export const Picture = styled.picture`
  width: 24px;
  height: 24px;
  max-width: 24px;
  max-height: 24px;
  border-radius: 50%;
  background-color: ${blackColorTransparent};
  overflow: hidden;

  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`;
