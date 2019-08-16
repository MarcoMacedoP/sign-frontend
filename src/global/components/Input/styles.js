import styled from "styled-components";
import {
  blackColor,
  fontBody,
  whiteColorDark
} from "../../styles/variables";

export const Container = styled.div`width: 100%;`;

export const Label = styled.label`
  font-size: 12px;
  color: ${whiteColorDark};
`;
export const InputForm = styled.input`
  border: 1px solid ${blackColor};
  border-top: none;
  border-right: none;
  border-left: none;
  margin: 0.5rem 0;
  padding-bottom: 0.5rem;
  background-color: transparent;
  font-family: ${fontBody};
  font-size: 1rem;
  width: 100%;
`;
