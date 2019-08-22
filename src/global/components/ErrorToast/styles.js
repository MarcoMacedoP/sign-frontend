import styled from "styled-components";
import { errorColor, whiteColor } from "../../styles/variables";
export const Container = styled.div`
  .MuiSnackbarContent-root {
    background-color: ${errorColor};
    font-size: 1rem;
    i {
      color: ${whiteColor};
    }
  }
`;
