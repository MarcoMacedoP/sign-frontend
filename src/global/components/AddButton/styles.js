import { MaterialIcon } from "../../styles/foundations/MaterialIcon";
import styled from "styled-components";
import {
  secondaryColor,
  blackColorTransparent,
  whiteColor,
  mainColorLight
} from "../../styles/variables";
export const Button = styled(MaterialIcon)`
font-size: 1.5rem;
color: ${whiteColor};

`;
export const Container = styled.div`
  margin: 1rem;
  position: ${(props) => (props.position ? props.position : "fixed")};
  bottom: 5%;
  right: 5%;

  width: 3.5rem;
  height: 3.5rem;
  box-shadow: 3px 5px 10px 0px ${blackColorTransparent};
  border-radius: 50%;
  background-color: ${secondaryColor};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: background-color 120ms ease-in-out;
  &:active {
    background-color: ${mainColorLight};
  }
`;
