import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  mainColor,
  whiteColorLigth,
  fontBody,
  mainColorLight,
  blackColor
} from "../variables";

export const Button = styled(Link)`
 ${setPrimaryButton()}
`;
export const SecondaryButton = styled(Button)`
 ${setSecondaryButton()}`;
export function setPrimaryButton() {
  return css`
    box-sizing: border-box;
    display: flex;
    border-radius: 2.5625rem;
    background-color: ${mainColor};
    color: ${whiteColorLigth};
    font-family: ${fontBody};
    font-weight: bold;
    font-size: 0.875rem;
    text-decoration: none;
    border: none;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    width: min-content;
    min-width: 10rem;
    white-space: nowrap;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: ${mainColorLight};
    }
  `;
}
export function setSecondaryButton() {
  return css`
    box-sizing: border-box;
    background-color: transparent;
    border: 3px solid ${mainColor};
    color: ${blackColor};
    &:hover,
    &:active {
      background: transparent;
      border-color: ${mainColorLight};
    }
  `;
}
