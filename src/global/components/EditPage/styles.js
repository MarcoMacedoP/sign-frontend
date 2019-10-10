import styled from "styled-components";
import {cellphoneMediaQuery} from "../../styles/mediaQuerys";
import {Btn as Button} from "../Button/styles";

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
