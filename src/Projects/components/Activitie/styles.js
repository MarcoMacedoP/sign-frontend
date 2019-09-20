import styled from "styled-components";

import {
  whiteColorLigth,
  blackColorLigth
} from "../../../global/styles/variables";

export const Container = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${whiteColorLigth};

  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 1rem;
`;

export const Date = styled.span`
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  color: ${blackColorLigth};
`;
