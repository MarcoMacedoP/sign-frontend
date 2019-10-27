import {Btn} from "../Button/styles";
import styled from "styled-components";
import {
  blackColor,
  blackColorLigth
} from "../../../global/styles/variables";
export const Button = styled(Btn)`
  && {
    margin-top: 0.5rem;
    background-color: transparent;
    min-height: 3rem;
    width: ${props => (props.width ? props.width : "100%")};
    border: 3px solid
      ${props =>
        props.bordercolor ? props.bordercolor : blackColorLigth};
    &:hover,
    &:active {
      opacity: 0.7;
      background: transparent;
    }

    .MuiButton-label {
      color: ${props =>
        props.borderColor ? props.borderColor : blackColor};
    }
  }
`;
