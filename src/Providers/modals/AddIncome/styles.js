import styled from "styled-components";
import {
  fontTitle,
  whiteColorDark
} from "../../../global/styles/variables";
import { FormControlLabel as FormControlLabelContainer } from "@material-ui/core";

export const Title = styled.h3`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  font-family: ${fontTitle};
  font-size: 1.5rem;
  font-weight: 500;
`;
export const FormControlLabel = styled(FormControlLabelContainer)`
    &&{
        margin-bottom: 1.5rem;
        align-self: flex-start;
        
        .MuiFormControlLabel-label{
            font-size: 0.8rem;
            color: ${whiteColorDark};
        }
    }
`;
