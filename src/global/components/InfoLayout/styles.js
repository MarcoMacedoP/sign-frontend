import styled from "styled-components";

import {H3} from "../../styles/texts";
import {appPadding} from "../../styles/variables";
//media querys
import {cellphoneMediaQuery} from "../../styles/mediaQuerys";

/**Main container */
export const Article = styled.article`
  display: grid;
  grid-template-columns: 35vw 1fr;
  gap: 2rem;
  padding: ${appPadding};
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  @media ${cellphoneMediaQuery} {
    margin-top: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
/**Here will be contained the information */
export const Section = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  grid-column: 1/2;

  ${H3} {
    margin-bottom: 1rem;
  }
  @media ${cellphoneMediaQuery} {
    grid-row: 2/-1;
  }
`;
export const Children = styled.section`
  width: 100%;
  overflow: hidden;
`;
