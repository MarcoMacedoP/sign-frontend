import styled from "styled-components";
import {REMINDER_STATUS} from "../RemindersListContainer";
import {
  whiteColorLigth,
  errorColor,
  pendingStatusColor,
  whiteColorDark
} from "../../../global/styles/variables";

const BASE_CARD_BACKGROUND = `linear-gradient(180deg, ${whiteColorLigth} 61.07%,
    rgba(255, 255, 255, 0) 100%),`;

export const Card = styled.section`
  min-height: 150px;
  height: min-content;
  min-width: 200px;
  width: 100%;
  padding-bottom: 2rem;

  cursor: pointer;

  margin: 0.5rem;
  box-sizing: border-box;

  border-radius: 1rem;
  border: 1px solid ${whiteColorDark};
  background: ${props =>
    props.status === REMINDER_STATUS.WARNING
      ? `${BASE_CARD_BACKGROUND}${pendingStatusColor}`
      : `${BASE_CARD_BACKGROUND}${errorColor}`};
`;
export const Title = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
export const Content = styled.div`
  padding: 1rem;
  border-radius: 1rem;

  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
  background-color: ${whiteColorLigth};
`;
export const StyledDate = styled.span`
  margin-top: 1rem;
  color: ${props =>
    props.status === REMINDER_STATUS.WARNING
      ? pendingStatusColor
      : errorColor};
`;
