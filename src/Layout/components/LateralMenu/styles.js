import styled from "styled-components";
import {MaterialIcon} from "../../../global/styles/foundations/MaterialIcon";

import {
  whiteColorLigth,
  whiteColor,
  blackColorLigth,
  blackColorTransparent
} from "../../../global/styles/variables";

export const Menu = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  background: ${whiteColorLigth};
  padding: 2.5rem 0;
  height: 100%;
  width: 23.125vw;
  min-width: 250px;
  max-width: 296px;
  box-sizing: border-box;
  display: flex;
  z-index: 2;
  flex-direction: column;
  box-shadow: 0 3px 7px 0 rgba(50, 54, 53, 0.3);
`;
export const CloseIcon = styled(MaterialIcon)`
  position: absolute;
  top: 0;
  right: 0;
`;
export const Header = styled.header`
  box-sizing: border-box;
  padding: 0 2rem;
  min-height: 5rem;
  height: 12%;
  width: 100%;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
`;
export const ProfileImage = styled.div`
  width: 5rem;
  height: 5rem;
  grid-row: 1/-1;
  grid-column: 1/2;
  border-radius: 50%;
  background: ${whiteColor};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${props => props.image && `url(${props.image}`};
`;
export const Username = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${blackColorLigth};
  font-weight: bold;
`;
export const Location = styled.p`
  font-size: 12px;
  color: ${blackColorTransparent};
`;
export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;
