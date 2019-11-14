import styled from "styled-components";
//components
import {BaseIcon as Icon} from "../Icon/styles";
//vars
import {
  secondaryColor,
  whiteColorLigth
} from "../../styles/variables";
import {cellphoneMediaQuery} from "../../styles/mediaQuerys";

export const Info = styled.div`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  max-width: 40vw;

  background-color: ${secondaryColor};
  color: ${whiteColorLigth};

  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 2rem;
  left: 0.5rem;
  z-index: 4;

  overflow: hidden;

  ${Icon} {
    color: ${whiteColorLigth};
  }

  @media ${cellphoneMediaQuery} {
    max-width: 80vw;
  }

  animation: resize 0.5s;

  @keyframes resize {
    0% {
      min-width: 0px;
      width: 0;
    }
    100% {
      width: 100%;
      min-width: 300px;
    }
  }
`;
