import styled from "styled-components";
import {Icon} from "../../../global/components";

import {
  whiteColorLigth,
  appShadow,
  mainColorLight
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

export const NotificationIcon = styled(Icon)`
  margin-left: auto;
  margin-right: 0.5rem;
  color: ${props => (props.isOpen ? mainColorLight : "inital")};
`;
