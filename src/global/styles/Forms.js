import styled from "styled-components";

import {Btn as Button} from "../components/Button/styles";
import {Container as UploadImage} from "../components/UploadImage/styles";
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
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormWithPhotoUpload = styled(BaseForm)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 1.5rem;

  ${InputContainer} {
    grid-column: 1/2;
    grid-row: 1/-1;
  }
  ${UploadImage} {
    grid-row: 1/-1;
    grid-column: 2/-1;
  }
  @media ${cellphoneMediaQuery} {
    display: flex;
  }
`;
