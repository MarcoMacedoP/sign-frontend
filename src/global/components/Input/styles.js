import styled, {css} from "styled-components";
import {
  blackColorTransparent,
  fontBody,
  whiteColorDark,
  errorColorLigth,
  mainColor
} from "../../styles/variables";

export const BaseInputStyles = () => css`
  border: ${props =>
    props.active
      ? `4px solid ${mainColor}`
      : `1px solid ${blackColorTransparent}`};
  ${props =>
    props.error ? `border-color:${errorColorLigth};` : null};
  transition: border 200ms linear;

  border-top: none;
  border-right: none;
  border-left: none;
  margin: 0.5rem 0;
  padding: 0 0.5rem 0.5rem 0;
  background-color: transparent;
  font-family: ${fontBody};
  font-size: 1rem;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${props => (props.active ? "12px" : "1rem")};
  color: ${props => (props.active ? mainColor : whiteColorDark)};

  transition: color 200ms linear, font-size 200ms linear;
`;
export const InputForm = styled.input`
  ${BaseInputStyles()}
`;
export const TextArea = styled.textarea`
  ${BaseInputStyles()}
`;
