import styled from "styled-components";
import { Button } from "@material-ui/core";
import {
  mainColor,
  whiteColorLigth,
  fontBody,
  mainColorLight
} from "../../../global/styles/variables";
export const Btn = styled(Button)`
    &&{
        width: min-content;
        min-width: 10rem;
        padding: 0.5rem 1rem;
        border-radius: 2.5625rem;
        background-color: ${mainColor};
        cursor: pointer;
    &:hover,
    &:active {
      background-color: ${mainColorLight};
    }
    .MuiButton-label{

    color: ${whiteColorLigth};
    font-family: ${fontBody};
    font-weight: bold;
    font-size: 0.875rem;
    }


}


`;
