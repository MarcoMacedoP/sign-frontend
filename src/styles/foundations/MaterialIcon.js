import styled from "styled-components";
import {
  mainColorLight,
  whiteColorLigth,
  blackColorTransparent
} from "../variables";

export const MaterialIcon = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: 'liga';
  -moz-osx-font-smoothing: grayscale;
  padding: 0.5rem;
  cursor: pointer;
  color: ${blackColorTransparent};
  border-radius: 50%;
  --duration: 140ms;
  transition: background-color var(--duration) ease-in 0ms,
    color var(--duration) ease-in 0ms;
  &:active {
    color: ${whiteColorLigth};
    background-color: ${mainColorLight};
  }
`;
