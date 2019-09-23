import styled from "styled-components";

import {H3} from "../../styles/texts";
import {appPadding} from "../../styles/variables";

/**Main container */
export const Article = styled.article`
  display: grid;
  grid-template-columns: 35vw 1fr;
  gap: 2rem;
  padding: ${appPadding};
  margin-top: 2rem;
`;
/**Here will be contained the information */
export const Section = styled.section`
  display: flex;
  flex-direction: column;

  grid-column: 1/2;

  ${H3} {
    margin-bottom: 1rem;
  }
`;
