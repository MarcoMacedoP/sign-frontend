import styled from "styled-components";
import {
  whiteColorLigth,
  mainColor,
  blackColorTransparent,
  appShadow
} from "../../../global/styles/variables";
export const Navbar = styled.nav`
  max-width: 100vw;
  width: 100vw;
  padding: 1rem 6.5625vw;
  box-sizing: border-box;
  max-height: 4rem;
  min-height: 3rem;
  height: 8.75vw;
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
export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width: ${props => (props.isShowed ? "200px" : "0px")};
  height: min-content;
  transition: width 200ms ease-out;

  position: absolute;
  top: 4rem;
  right: 1.5rem;

  box-shadow: -1px 4px 19px 1px rgba(112, 112, 112, 0.29);

  background-color: ${whiteColorLigth};
  overflow: hidden;
`;

export const MenuItem = styled.li`
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  transition: background-color 120ms ease-out;

  display: ${props => (props.isShowed ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  a {
    width: 100%;
    color: ${blackColorTransparent};
    text-decoration: none;
    text-transform: capitalize;
    transition: color 120ms ease-out;
  }

  :hover {
    background-color: ${mainColor};
    a,
    i {
      color: ${whiteColorLigth};
    }
  }
`;
