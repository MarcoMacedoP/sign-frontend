import styled from "styled-components";
import {cellphoneMediaQuery} from "../../styles/mediaQuerys";
import {Btn as Button} from "../Button/styles";
import { Loading } from "../../../global/components";

export const ButtonContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${Button} {
    width: 50%;
    margin-top: 1rem;
  }

  @media ${cellphoneMediaQuery} {
    ${Button} {
      width: 100%;
    }
  }
`;

export const StyledLoading = styled(Loading)`
  margin: 0;
  padding: 0;
  min-height: unset;
`;