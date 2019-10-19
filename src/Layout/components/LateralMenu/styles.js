import styled from "styled-components";

import {
  whiteColorLigth,
  whiteColor,
  blackColorLigth,
  blackColorTransparent
} from "../../../global/styles/variables";

export const Menu = styled.aside`
  position: sticky;
  top: 0;
  background: ${whiteColorLigth};
  height: 100vh;

  width: ${props => (props.isShowed ? "23.125vw" : "5vw")};
  min-width: ${props => (props.isShowed ? "250px" : "60px")};
  max-width: 296px;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  flex-direction: column;
  box-shadow: 0 3px 7px 0 rgba(50, 54, 53, 0.3);
`;

export const Header = styled.header`
  box-sizing: border-box;
  min-height: 5rem;
  height: 12%;
  width: 100%;
  cursor: pointer;

  display: ${props => (props.isShowed ? "grid" : "flex")};

  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.5rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProfileImage = styled.div`
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
  flex-direction: column;
  justify-content: flex-end;
  color: ${blackColorLigth};
  font-weight: bold;
`;
export const Location = styled.p`
  display: ${props => (props.isShowed ? "intial" : "none")};
  font-size: 12px;
  color: ${blackColorTransparent};
`;
export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
