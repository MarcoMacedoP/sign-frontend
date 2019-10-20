import styled from "styled-components";
import {appPadding} from "../../styles/variables";
import {BaseForm} from "../../styles/Forms";
import {mediumScreen} from "../../styles/mediaQuerys";
export const Container = styled.div`
  padding: ${appPadding};
  ${BaseForm} {
    width: 100%;
    min-width: 0;
  }
  @media ${mediumScreen} {
    ${BaseForm} {
      width: 100%;
    }
  }
`;
