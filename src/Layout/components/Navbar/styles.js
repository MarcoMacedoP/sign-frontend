import styled from "styled-components";
import {
  Button,
  SecondaryButton
} from "../../../global/styles/foundations/Buttons";
import {
  whiteColorLigth,
  appShadow
} from "../../../global/styles/variables";
import {cellphoneMediaQuery} from "../../../global/styles/mediaQuerys";
import {BaseIcon as Icon} from "../../../global/components/Icon/styles";
export const LoginButton = styled(SecondaryButton)`
  max-height: 35px;
  margin-right: 1rem;
  background-color: ${whiteColorLigth};
  @media ${cellphoneMediaQuery} {
    width: 100%;
  }
`;
export const SignupButton = styled(Button)`
  max-height: 35px;
  @media ${cellphoneMediaQuery} {
    width: 100%;
    margin-top: 0.5rem;
  }
`;
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.isShowed ? "flex-start" : "space-between"};

  height: 7.875vh;
  min-height: 63px;
  box-sizing: border-box;
  padding: 0 5%;
  box-shadow: 0 3px 7px 0 rgba(50, 54, 53, 0.3);
  background: ${whiteColorLigth};
  ${Icon} {
    display: none;
  }
  @media ${cellphoneMediaQuery} {
    ${Icon} {
      display: block;
    }
  }
`;

export const ButtonContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  &a {
    margin: 0 1rem;
  }
  ${Icon} {
    display: none;
  }

  @media ${cellphoneMediaQuery} {
    display: block;

    overflow: hidden;

    box-sizing: border-box;
    width: ${props => (props.isShowed ? "50vw" : "0")};
    height: 50vh;
    padding: ${props =>
      props.isShowed ? "3rem 0.5rem 3rem 2rem" : "0"};

    transition: width 120ms linear, padding 120ms linear;
    background: ${whiteColorLigth};
    border-radius: 0 0 0 100%;
    box-shadow: ${appShadow};

    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;

    ${Icon} {
      display: block;

      position: absolute;
      top: 0;
      left: 1rem;
    }
  }
`;
