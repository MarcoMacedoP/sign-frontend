import { Btn } from "../Button/styles";
import styled from "styled-components";
import {
  mainColor,
  blackColor
} from "../../../global/styles/variables";
export const Button = styled(Btn)`
  && {
      margin-top: 0.5rem;
    background-color: transparent;
    width: ${(props) => (props.width ? props.width : "100%")};
    border: 3px solid ${(props) =>
      props.borderColor ? props.borderColor : mainColor};
    &:hover,
    &:active {
     opacity: 0.70;
      background: transparent;
      
    }

    
    .MuiButton-label {
      color: ${(props) =>
        props.borderColor ? props.borderColor : blackColor};
    }
  }
`;
