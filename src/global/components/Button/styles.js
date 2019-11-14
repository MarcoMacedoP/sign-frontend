import styled from "styled-components";
import { Button } from "@material-ui/core";
import {
  mainColor,
  whiteColorLigth,
  fontBody,
  mainColorLight
} from "../../../global/styles/variables";
export const Btn = styled(Button)`
  && {
    width: ${props => (props.height ? props.height : "100%")};
    box-sizing: border-box;
    min-height: 2.5rem;
    height: ${props => (props.height ? props.height : "initial")};
    min-width: 10rem;
    padding: 0.5rem 1rem;
    border-radius: 2.5625rem;
    background-color: ${props =>
      props.disabled ? "rgba(0, 0, 0, 0.12)" : mainColor};
    cursor: pointer;
    &:hover,
    &:active {
      background-color: ${mainColorLight};
    }
    .MuiButton-label {
      color: ${whiteColorLigth};
      font-family: ${fontBody};
      font-weight: bold;
      font-size: 0.875rem;
    }
  }
`;
