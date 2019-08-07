import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainColor, whiteColor, fontBody } from "../variables";

export const Button = styled(Link)`
  box-sizing: border-box;
  display: flex;
  border-radius: 2.5625rem;
  background-color: ${mainColor};
  color: ${whiteColor};
  font-family: ${fontBody};
  font-weight: bold;
  font-size: 0.875rem;
  border: none;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: min-content;
  min-width: 10rem;
  white-space: nowrap;
`;
