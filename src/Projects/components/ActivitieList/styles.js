import styled from "styled-components";
import {whiteColor} from "../../../global/styles/variables";
import {H3} from "../../../global/styles/texts";
import {Container as SmallEmptyState} from "../../../global/components/SmallEmptyState/styles";

export const ContainerCard = styled.li`
  border-radius: 1rem;
  background-color: ${whiteColor};
  padding: 1rem 0.5rem;

  display: flex;
  flex-direction: column;

  ${H3} {
    text-align: center;
  }
  ${SmallEmptyState} {
    margin: 0 auto;
    align-self: center;
  }
`;
