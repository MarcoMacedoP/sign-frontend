import {
  Button,
  SecondaryButton
} from "../../styles/foundations/Buttons";
import { whiteColorLigth } from "../../styles/variables";

import styled from "styled-components";

export const LoginButton = styled(SecondaryButton)`
    max-height: 35px;
    margin-right:1rem;
`;
export const SignupButton = styled(Button)`max-height: 35px;`;
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: ${whiteColorLigth};
  height: 7.875vh;
  min-height: 63px;
  box-sizing: border-box;
  padding: 0 5%;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 7px 0 rgba(50, 54, 53, 0.3);
`;

export const ButtonContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  &a {
    margin: 0 1rem;
  }
`;
