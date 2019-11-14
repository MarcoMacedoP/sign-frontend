import styled from "styled-components";

import {
  whiteColorLigth,
  blackColorLigth,
  pendingStatusColor
} from "../../../global/styles/variables";
import {Icon} from "../../../global/components/";

export const Container = styled.div`
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  background-color: ${whiteColorLigth};

  display: flex;
  flex-direction: column;

  cursor: pointer;

  position: relative;
`;

export const Title = styled.p`
  font-size: 1rem;
`;

export const Date = styled.span`
  display: flex;
  border-radius: 0.5rem;
  padding-right: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  color: ${blackColorLigth};
  background-color: ${pendingStatusColor};
  width: 66%;
`;
export const DateIcon = styled(Icon)`
  margin-right: 0.5rem;
  font-size: 20px;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1rem;
  height: 100%;

  top: 0;
`;
