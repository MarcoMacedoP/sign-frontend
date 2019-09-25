import styled from "styled-components";

import {Btn as Button} from "../components/Button/styles";
import {cellphoneMediaQuery} from "./mediaQuerys";
export const BaseForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  width: 28vw;

  ${Button} {
    margin-top: 2rem;
    width: 100%;
    min-height: 3rem;
  }
  @media ${cellphoneMediaQuery} {
    min-width: 250px;
    width: 100%;
  }
`;
