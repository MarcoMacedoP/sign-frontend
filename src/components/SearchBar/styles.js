import styled from "styled-components";
import {
  blackColorTransparent,
  blackColorLigth
} from "../../styles/variables";
import { MaterialIcon } from "../../styles/foundations/MaterialIcon";

export const Container = styled.div`
  width: 284px;
  height: 42px;
  border-radius: 1.5rem;
  padding: 1rem;
  border: solid 2px ${blackColorLigth};
  box-sizing: border-box;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-color: ${(props) =>
    props.isActive ? blackColorLigth : blackColorTransparent};
`;
export const Input = styled.input`
  background: transparent;
  font-size: 1rem;
  color: ${(props) =>
    props.isActive ? blackColorLigth : blackColorTransparent};
`;
export const SearchIcon = styled(MaterialIcon)`
    color: ${(props) =>
      props.isActive ? blackColorLigth : blackColorTransparent};
 `;
