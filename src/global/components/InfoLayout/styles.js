import styled from "styled-components";

import {H3} from "../../styles/texts";
//media querys
import {mediumScreen} from "../../styles/mediaQuerys";

/**Main container */
export const Article = styled.article`
  display: grid;
  grid-template-columns: 35vw 1fr;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
  @media ${mediumScreen} {
    gap: 0;
    margin-top: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
`;
/**Here will be contained the information */
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  grid-column: 2/-1;
  grid-row: 1/2;

  ${H3} {
    margin-bottom: 1rem;
  }
  @media ${mediumScreen} {
    grid-column: 1/2;
  }
`;
export const Children = styled.section`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  @media ${mediumScreen} {
    grid-row: 2/-1;
  }
`;
