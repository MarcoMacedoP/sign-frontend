import styled from "styled-components";
//vars
import {
  whiteColorLigth,
  blackColorTransparent,
  mainColor
} from "../../styles/variables";

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

  a,
  p {
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
