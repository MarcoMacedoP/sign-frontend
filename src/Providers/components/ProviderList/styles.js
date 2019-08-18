import styled from "styled-components";
import { setHeadlineText } from "../../../global/styles/foundations/Texts";
import { appPadding } from "../../../global/styles/variables";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: ${appPadding};
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
  @media only screen and (max-width: 800px) {
    margin-top: 2rem;
  }
`;
export const BigProvidersList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  * {
    text-decoration: none;
  }
`;
export const LongProvidersList = styled.ul`
  margin-top: 3rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  //Selecting <Link> childs
  a {
    margin-top: 1rem;
    width: 100%;
  }
  a:first-child {
    margin-top: 0;
  }
  * {
    text-decoration: none;
  }
`;
