import styled, { css } from "styled-components";
import {
  mainColorLight,
  whiteColorLigth,
  blackColorTransparent
} from "../variables";

const iconAnimation = () => css`
  --duration: 140ms;
  transition: background-color var(--duration) ease-in 0ms,
    color var(--duration) ease-in 0ms;
  &:active {
    color: ${whiteColorLigth};
    background-color: ${mainColorLight};
  }
`;

export const BaseIcon = styled.i`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  color: ${blackColorTransparent};
  border-radius: 50%;
  padding: 0.5rem;
  font-size: 24px;
  /*----conditionals---- */
  font-size: ${props => props.size};
  max-width: ${props => `${props.size + 8}px`};
  max-height: ${props => `${props.size + 8}px`};
  ${props => props.hasAnimatedClick && iconAnimation()};
  cursor: ${props => (props.hasAction ? "pointer" : "auto")};
`;
