import styled from "styled-components";
import { Loading } from "../../../global/components/Loading";
import {
  blackColorLigth,
  positiveStatusColor,
  errorColor
} from "../../../global/styles/variables";
import { Icon } from "../../../global/components";
export const StyledLoading = styled(Loading)`
  margin: 0;
  padding: 0;
  width: 3rem;
  height: 3rem;
  min-height: 3rem;
  min-width: 3rem;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const StyledSection = styled.section`
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const StyledTransactionList = styled.ul`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledTransaction = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  width: 100%;
`;
export const StyledTransactionName = styled.span`
  display: flex;
  position: relative;
  left: -1.2rem;
`;
export const StyledTransactionIcon = styled(Icon)`
  color: ${props =>
    props.type === "income" ? positiveStatusColor : errorColor};
  font-size: 1.2rem;
  padding: 0;
`;

export const StyledTransactionDate = styled.span`
  color: ${blackColorLigth};
  font-size: 0.85rem;
`;

export const StyledTransactionValue = styled.span`
  color: ${props =>
    props.type === "income" ? positiveStatusColor : errorColor};
`;
