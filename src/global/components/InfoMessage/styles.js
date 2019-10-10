import styled from "styled-components";
//components
import {BaseIcon as Icon} from "../Icon/styles";
//vars
import {
  secondaryColor,
  whiteColorLigth
} from "../../styles/variables";

export const Info = styled.div`
  padding: 0.5rem 1rem;
  margin-top: 1rem;

  background-color: ${secondaryColor};
  color: ${whiteColorLigth};

  display: flex;
  justify-content: space-between;

  min-width: 200px;
  width: 20vw;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;

  ${Icon} {
    color: ${whiteColorLigth};
  }
`;
