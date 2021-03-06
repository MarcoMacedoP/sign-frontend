import styled from "styled-components";
import { Button as BaseButton, Loading } from "../../../global/components";
import { SmallEmptyState } from "../../../global/components/SmallEmptyState";
import { mediumScreen } from "../../../global/styles/mediaQuerys";

export const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: 60vw 1fr;
  gap: 2rem;
  padding: 1rem;

  @media ${mediumScreen} {
    grid-template-columns: 1fr;
  }
`;

export const Activities = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h3 {
    margin: 0 auto;
  }
`;

export const ActivitiesContainer = styled.section`
  margin-top: 1rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-template-rows: min-content 1fr;
  gap: 1rem;
`;
export const Button = styled(BaseButton)`
  & & {
    height: 4rem;
  }
`;
export const StyledLoading = styled(Loading).attrs(() => ({
  size: "1.5rem"
}))`
  justify-content: center;
  align-items: center;
  min-height: 3rem;
  height: 3rem;
`;

export const StyledEmptyState = styled(SmallEmptyState)`
  margin: 1.5rem auto;
  width: 50%;
  min-width: 200px;

  picture {
    height: 16vh;
    width: 16vw;
    min-height: 200px;
    min-width: 200px;
    img {
      height: 100%;
    }
  }
  @media ${mediumScreen} {
    width: 100%;
  }
`;
