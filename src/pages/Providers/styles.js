import styled from "styled-components";
import { setHeadlineText } from "../../styles/foundations/Texts";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`${setHeadlineText({ size: "3rem" })};`;
export const SearchBarContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 3rem;

  display: flex;
  justify-content: flex-end;
`;
export const BigProvidersList = styled.ul`
  width: 80%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
`;
export const LongProvidersList = styled.ul`
  margin-top: 3rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin-top: 1rem;
  }
  li:first-child {
    margin-top: 0;
  }
`;
