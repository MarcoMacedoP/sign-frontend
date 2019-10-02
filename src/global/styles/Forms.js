import styled from "styled-components";

import {Btn as Button} from "../components/Button/styles";
import {InputForm} from "../components/Input/styles";
import {cellphoneMediaQuery} from "./mediaQuerys";
import {H3} from "./texts";

export const BaseForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  width: 28vw;
  margin-top: 1rem;
  ${InputForm}:last-child {
    margin-bottom: 1rem;
  }
  ${Button} {
    width: 100%;
    min-height: 3rem;
    margin-top: 1rem;
  }

  @media ${cellphoneMediaQuery} {
    min-width: 250px;
    width: 100%;
  }
`;
export const Title = styled(H3)`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
