import styled from "styled-components";
import {Link} from "react-router-dom";
import {Icon} from "../../../global/components/";
import {
  whiteColorLigth,
  blackColorTransparent,
  mainColor
} from "../../../global/styles/variables";

export const NavigationItem = styled(Link)`
  width: 100%;
  height: 7vh;
  padding-bottom: ${props => (props.isShowed ? "2rem" : "0")};
  box-sizing: border-box;
  display: ${props => (props.isShowed ? "grid" : "flex")};
  /**grid styles for when isShowed */
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 1rem;
  /**flex-box styles for men isn't showed */
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
  opacity: 1;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  :hover {
    background-color: ${mainColor};
    opacity: 1;
    * {
      color: ${whiteColorLigth};
    }
  }
`;
export const NavigationItemTitle = styled.p`
  padding: 0.5rem;
  text-decoration: none;
  opacity: 1;
  color: ${blackColorTransparent};
  transition: color 120ms ease-out;
`;
export const Navicon = styled(Icon)`
  position: absolute;
  right: 0;
`;
