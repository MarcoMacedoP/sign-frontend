import styled from "styled-components";
import { SmallEmptyState, Button } from "../../../global/components/";

export const StyledEmptyState = styled(SmallEmptyState)`
  max-width: 500px;
  margin: auto;
  h4 {
    margin-bottom: 0;
  }
`;
export const StyledButton = styled(Button)`
  && {
    width: 80%;
    margin-top: 1rem;
    min-height: 3rem;
  }
`;
