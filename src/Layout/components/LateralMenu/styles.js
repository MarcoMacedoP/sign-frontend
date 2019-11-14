import styled from "styled-components";
import { Icon } from "../../../global/components/Icon";
import { Link } from "react-router-dom";
import {
  whiteColorLigth,
  whiteColor,
  blackColorLigth,
  blackColorTransparent
} from "../../../global/styles/variables";
const widthTransition = "width 120ms linear";
const heightTransition = "height 120ms linear";
export const Menu = styled.aside`
  position: sticky;
  top: 0;
  background: ${whiteColorLigth};
  height: 100vh;
  transition: ${widthTransition};
  width: ${props => (props.isShowed ? "23.125vw" : "5vw")};
  min-width: ${props => (props.isShowed ? "250px" : "60px")};
  max-width: 296px;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 3px 7px 0 rgba(50, 54, 53, 0.3);
`;
export const ToggleMenuIcon = styled(Icon)`
  margin-top: 1rem;
  ${props =>
    props.isShowed &&
    `
         align-self: flex-end;
         margin-right: 1rem; `}
`;
export const Header = styled(Link)`
  box-sizing: border-box;
  min-height: 5rem;
  height: 12%;
  width: 100%;
  cursor: pointer;
  margin: ${props => (props.isShowed ? "0 0 1.5rem 0" : 0)};
  padding-left: ${props => (props.isShowed ? "1rem" : "0")};
  display: ${props => (props.isShowed ? "grid" : "flex")};

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
  --size: ${props => (props.isShowed ? "5rem" : "2rem")};
  width: var(--size);
  height: var(--size);
  grid-row: 1/-1;
  grid-column: ${props => (props.isShowed ? "1/2" : "1/-1")};
  border-radius: 50%;
  background: ${whiteColor};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${props => props.image && `url(${props.image})`};
`;
export const Username = styled.p`
  display: ${props => (props.isShowed ? "flex" : "none")};
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  color: ${blackColorLigth};
  font-weight: bold;
`;
export const Location = styled.p`
  display: ${props => (props.isShowed ? "intial" : "none")};
  font-size: 12px;
  height: 100%;
  color: ${blackColorTransparent};
`;
export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;
