import styled from "styled-components";

import {Btn as Button} from "../components/Button/styles";

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
`;
