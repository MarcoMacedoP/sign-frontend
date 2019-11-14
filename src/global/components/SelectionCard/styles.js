import styled from "styled-components";
import {whiteColorDark} from "../../styles/variables";
import {Container} from "../LongCard/styles";

export const StyledContainer = styled(Container)`
  background-color: ${props =>
    props.status.isSelected && whiteColorDark};
  box-shadow: none;
  margin: 1rem 0 0.5rem 0;
  min-height: 3rem;
`;
