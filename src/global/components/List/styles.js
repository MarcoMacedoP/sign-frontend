import styled from "styled-components";
import { appPadding } from "../../styles/variables";
import { SmallEmptyState } from "../SmallEmptyState";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  ${appPadding()}
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 1rem;
  }
`;
export const SearchBarContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 3rem;

  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
    margin-top: 2rem;
  }
`;

export const StyledSmallEmptyState = styled(SmallEmptyState)`
  height: 60%;
`;
